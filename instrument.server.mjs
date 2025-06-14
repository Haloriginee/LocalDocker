import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://a0e8fea920261c98d742f56b6b0f75c0@o4507490113814528.ingest.de.sentry.io/4507490118008912",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
