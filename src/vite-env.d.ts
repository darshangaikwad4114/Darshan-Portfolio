/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_TOKEN: string;
  // add other env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
