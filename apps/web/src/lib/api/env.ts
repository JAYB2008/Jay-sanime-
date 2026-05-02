const required = ['VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY'] as const

required.forEach((key) => {
  if (!import.meta.env[key]) {
    console.warn(`[env] Missing required variable: ${key}`)
  }
})

export const env = {
  appName: import.meta.env.VITE_APP_NAME,
  appEnv: import.meta.env.VITE_APP_ENV,
  webUrl: import.meta.env.VITE_WEB_URL,
  mobileUrl: import.meta.env.VITE_MOBILE_URL,
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  websocketUrl: import.meta.env.WEBSOCKET_URL
}
