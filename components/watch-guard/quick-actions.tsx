"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type QuickActionsProps = {
  options: string[];
  onSelect: (option: string) => void;
  className?: string;
};

export function QuickActions({
  options,
  onSelect,
  className,
}: QuickActionsProps) {
  if (options.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "mt-3 flex flex-wrap gap-2",
        className
      )}
    >
      {options.map((option, index) => (
        <Button
          key={index}
          onClick={() => onSelect(option)}
          size="sm"
          variant="outline"
          className="text-xs"
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

// Helper function to extract quick action options from assistant messages
export function extractQuickActions(text: string): string[] {
  const options: string[] = [];
  
  // EXCLUDE open-ended questions that need free-form input
  // Questions asking for specific values, types, or descriptions should NOT have quick actions
  const openEndedPatterns = [
    /what\s+(?:is|are|kind|type|model|brand|value|worth|price|cost)/i,
    /how\s+(?:much|many|old|long|often)/i,
    /tell\s+me\s+(?:about|more)/i,
    /describe/i,
    /which\s+(?:watch|piece|model|brand)/i,
  ];
  
  // If it's an open-ended question, don't show quick actions
  if (openEndedPatterns.some((pattern) => pattern.test(text))) {
    return [];
  }
  
  // Pattern 1: "Would you like A or B?" / "Do you prefer X or Y?"
  const orPattern = /(?:would you|do you|are you|is it|can you)\s+(?:like|prefer|want|have|need)\s+(?:to\s+)?(.+?)\s+or\s+(.+?)[?.!]/i;
  const orMatch = text.match(orPattern);
  if (orMatch) {
    options.push(orMatch[1].trim(), orMatch[2].trim());
    return options;
  }

  // Pattern 2: "Which do you prefer: A, B, or C?" / "Options: X, Y, Z" / "Are we talking about A, B, or C?"
  const listPattern = /(?:which|what|options?|choices?|preferences?|are we talking about|are you thinking)[\s:]+(.+?)[?.!]/i;
  const listMatch = text.match(listPattern);
  if (listMatch) {
    const listText = listMatch[1];
    // Split by commas and "or"
    const items = listText
      .split(/,|\s+or\s+|perhaps\s+/i)
      .map((item) => item.trim())
      .filter((item) => item.length > 0 && item.length < 50);
    
    if (items.length >= 2 && items.length <= 4) {
      return items;
    }
  }

  // Pattern 3: Binary yes/no questions
  const yesNoPattern = /(?:do you|are you|have you|would you|is it|can you|does it)\s+(?:have|own|wear|travel|store|insure|want|need|prefer|like|know|think|feel|consider|plan|intend)[^?.!]*[?.!]/i;
  if (yesNoPattern.test(text)) {
    // Check if it's a clear yes/no question (not already answered)
    const hasOptions = /(?:yes|no|maybe|probably|definitely)/i.test(text);
    if (!hasOptions) {
      return ["Yes", "No"];
    }
  }

  // Pattern 4: Financial context questions with specific options
  const financialPattern = /(?:financial|situation|wealth|comfortable|tight|net worth)/i;
  if (financialPattern.test(text)) {
    // Look for specific financial context mentions
    if (/tight|struggling|difficult/i.test(text)) {
      return ["Tight - I'd feel the loss significantly", "Comfortable - I could absorb it"];
    }
    if (/comfortable|manageable/i.test(text)) {
      return [
        "Comfortable - I could absorb it but it would hurt",
        "Very comfortable - I could handle it without major impact",
        "High net worth - The loss would be relatively minor",
      ];
    }
  }

  // Pattern 5: Usage/storage questions - check for specific question context
  // Only match if it's an actual question (ends with ?) and not just mentioning the word
  const isQuestion = text.trim().endsWith("?");
  
  // Storage questions - must be a question and explicitly about storage
  if (isQuestion && /(?:where.*store|where.*keep|where.*put|where.*place|store it|keep it|put it|place it)/i.test(text) && 
      !/(?:wear|wearing)/i.test(text)) {
    return ["In a safe", "Display case", "Drawer or box", "Always on wrist"];
  }
  
  // Wearing pattern questions - must be a question and explicitly about wearing frequency
  if (isQuestion && /(?:how often.*wear|when.*wear|how.*wear|wear it)/i.test(text) && 
      !/(?:store|storage|where)/i.test(text)) {
    return ["Daily wear", "Occasional wear", "Special occasions only", "Rarely worn"];
  }
  
  // Travel questions - must be a question and explicitly about travel
  if (isQuestion && /(?:travel|traveling|do you travel)/i.test(text) && 
      !/(?:wear|wearing|store|storage|where)/i.test(text)) {
    return ["Frequently travel with it", "Sometimes travel with it", "Rarely travel with it", "Never travel with it"];
  }

  return options;
}
