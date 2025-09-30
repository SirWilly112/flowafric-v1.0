import * as Sentry from "@sentry/nextjs";
import { Replay } from "@sentry/replay";

export async function register() {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    integrations: [
      new Replay({
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
  });
}
