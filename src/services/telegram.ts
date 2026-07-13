import type { Locale } from "@/types";

type TelegramContactMessage = {
  name: string;
  email: string;
  message: string;
  locale: Locale;
};

function getTelegramConfig() {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string | undefined;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID as string | undefined;

  if (!botToken || !chatId) {
    return null;
  }

  return { botToken, chatId };
}

export async function sendTelegramContactMessage(payload: TelegramContactMessage) {
  const config = getTelegramConfig();

  if (!config) {
    throw new Error("Telegram bot is not configured.");
  }

  const text = [
    "New portfolio contact message",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Locale: ${payload.locale}`,
    "Message:",
    payload.message
  ].join("\n");

  const response = await fetch(`https://api.telegram.org/bot${config.botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: config.chatId,
      text,
      disable_web_page_preview: true
    })
  });

  if (!response.ok) {
    const errorBody = (await response.json().catch(() => null)) as { description?: string } | null;
    throw new Error(errorBody?.description ?? "Failed to send message to Telegram.");
  }
}