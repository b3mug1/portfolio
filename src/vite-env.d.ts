/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_TELEGRAM_BOT_TOKEN?: string;
	readonly VITE_TELEGRAM_CHAT_ID?: string;
	readonly VITE_GITHUB_TOKEN?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
