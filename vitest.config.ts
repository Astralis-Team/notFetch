import { vitest } from "@astralis-os/vitest";

export default {
  ...vitest,
  test: {
    ...vitest,
    include: ["src/**/*.test.ts"],
  },
};
