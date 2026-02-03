import type { UserType } from "@/app/(auth)/auth";

type Entitlements = {
  maxMessagesPerDay: number;
};

export const entitlementsByUserType: Record<UserType, Entitlements> = {
  /*
   * For users without an account
   */
  guest: {
    maxMessagesPerDay: 1000, // Increased for testing/development
  },

  /*
   * For users with an account
   */
  regular: {
    maxMessagesPerDay: 1000, // Increased for testing/development
  },

  /*
   * TODO: For users with an account and a paid membership
   */
};
