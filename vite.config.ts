import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "hk-wq",
  project: "travel_app",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};


export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), tsconfigPaths(), reactRouter(),sentryReactRouter(sentryConfig, config)],sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});
