import { tool } from "ai";
import { z } from "zod";

export const collectWatchData = tool({
  description:
    "Collect and store watch insurance assessment data from the user. Use this tool when the user provides information about their watch value, premium, financial situation, or usage patterns. This data will be used for calculations.",
  inputSchema: z.object({
    watch_value: z
      .number()
      .positive()
      .optional()
      .describe("The approximate value of the watch in the user's currency"),
    annual_premium: z
      .number()
      .positive()
      .optional()
      .describe("The quoted yearly insurance cost, if available"),
    financial_context: z
      .enum(["tight", "comfortable", "very-comfortable", "high-net-worth"])
      .optional()
      .describe(
        "The user's financial situation or ability to absorb a loss"
      ),
    usage_storage: z
      .object({
        wearing_pattern: z
          .enum(["daily", "occasional", "special-occasions", "rarely"])
          .optional(),
        storage_method: z
          .enum(["safe", "display-case", "drawer", "worn"])
          .optional(),
        travel_frequency: z
          .enum(["frequently", "sometimes", "rarely", "never"])
          .optional(),
      })
      .optional()
      .describe("How the watch is worn, stored, and traveled with"),
    watch_type: z
      .string()
      .optional()
      .describe("Type or brand of watch (e.g., 'Rolex Submariner', 'Omega Speedmaster')"),
  }),
  execute: async (input) => {
    // Store the collected data (in a real implementation, this would be saved to a database)
    // For now, we'll just return confirmation
    const collectedFields = Object.keys(input).filter(
      (key) => input[key as keyof typeof input] !== undefined
    );

    return {
      success: true,
      message: `Collected data: ${collectedFields.join(", ")}`,
      data: input,
    };
  },
});
