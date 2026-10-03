// CI 使用 Playwright Chromium；本地可设 PLAYWRIGHT_CHANNEL=chrome。
import { chromium as engine, devices } from 'playwright';
export { devices };
export const chromium = { launch: options => engine.launch({ ...(process.env.PLAYWRIGHT_CHANNEL ? { channel: process.env.PLAYWRIGHT_CHANNEL } : {}), ...options }) };
