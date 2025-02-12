import { ApiModule } from '../api/index';

declare module 'app' {
  interface NuxtApp {
    $api: ApiModule;
  }
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    colorMode?: {
      preference?: string;
    };
    tailwindcss?: {
      exposeConfig?: boolean;
      viewer?: boolean;
      config?: object;
    };
    ui?: {
      icons: Array[];
    };
    esbuild?: {
      jsxFactory: string;
      jsxFragment: string;
      target: string;
      supported: {
        optionalChaining: boolean;
      };
    };
  }
}
