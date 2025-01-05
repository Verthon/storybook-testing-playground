/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USER_API_URL: 'https://my-api-local.example.com' | 'https://my-api.example.com'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}