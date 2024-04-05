import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testMatch: '*.spec.ts',
  fullyParallel: true,
  workers: 3,
  reporter: [
    ['html', { open: 'never' }],
  ],

  use: {
    trace: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
