"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type StructuredInputProps = {
  onSubmit: (value: string) => void;
  onCancel?: () => void;
  className?: string;
};

export function WatchValueInput({
  onSubmit,
  onCancel,
  className,
}: StructuredInputProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const numValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(numValue) || numValue <= 0) {
      setError("Please enter a valid amount");
      return;
    }
    onSubmit(`My watch is worth approximately $${numValue.toLocaleString()}`);
  };

  const formatCurrency = (input: string) => {
    const numbers = input.replace(/[^0-9.]/g, "");
    if (!numbers) return "";
    const num = parseFloat(numbers);
    if (isNaN(num)) return "";
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setValue(formatted);
    setError("");
  };

  return (
    <div className={cn("flex flex-col gap-2 p-4", className)}>
      <label className="text-sm font-medium">Watch Value</label>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            $
          </span>
          <Input
            className={cn(
              "pl-7",
              error && "border-destructive focus-visible:ring-destructive"
            )}
            placeholder="50,000"
            value={value}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
        </div>
        <Button onClick={handleSubmit} size="default">
          Submit
        </Button>
        {onCancel && (
          <Button onClick={onCancel} variant="ghost" size="default">
            Cancel
          </Button>
        )}
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

export function AnnualPremiumInput({
  onSubmit,
  onCancel,
  className,
}: StructuredInputProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const numValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(numValue) || numValue <= 0) {
      setError("Please enter a valid amount");
      return;
    }
    onSubmit(`The annual premium I was quoted is $${numValue.toLocaleString()}`);
  };

  const formatCurrency = (input: string) => {
    const numbers = input.replace(/[^0-9.]/g, "");
    if (!numbers) return "";
    const num = parseFloat(numbers);
    if (isNaN(num)) return "";
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setValue(formatted);
    setError("");
  };

  return (
    <div className={cn("flex flex-col gap-2 p-4", className)}>
      <label className="text-sm font-medium">Annual Premium</label>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            $
          </span>
          <Input
            className={cn(
              "pl-7",
              error && "border-destructive focus-visible:ring-destructive"
            )}
            placeholder="3,000"
            value={value}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
        </div>
        <Button onClick={handleSubmit} size="default">
          Submit
        </Button>
        {onCancel && (
          <Button onClick={onCancel} variant="ghost" size="default">
            Cancel
          </Button>
        )}
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

export function FinancialContextSelector({
  onSubmit,
  onCancel,
  className,
}: StructuredInputProps) {
  const [value, setValue] = useState("");

  const options = [
    { value: "tight", label: "Tight - I'd feel the loss significantly" },
    {
      value: "comfortable",
      label: "Comfortable - I could absorb it but it would hurt",
    },
    {
      value: "very-comfortable",
      label: "Very comfortable - I could handle it without major impact",
    },
    {
      value: "high-net-worth",
      label: "High net worth - The loss would be relatively minor",
    },
  ];

  const handleSubmit = () => {
    if (!value) return;
    const option = options.find((opt) => opt.value === value);
    if (option) {
      onSubmit(
        `My financial situation is ${option.label.toLowerCase()}. I would ${option.value === "tight" ? "feel the loss significantly" : option.value === "comfortable" ? "feel it but could absorb it" : option.value === "very-comfortable" ? "handle it without major impact" : "barely notice it"}.`
      );
    }
  };

  return (
    <div className={cn("flex flex-col gap-2 p-4", className)}>
      <label className="text-sm font-medium">Financial Context</label>
      <div className="flex gap-2">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Select your financial situation" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleSubmit} disabled={!value} size="default">
          Submit
        </Button>
        {onCancel && (
          <Button onClick={onCancel} variant="ghost" size="default">
            Cancel
          </Button>
        )}
      </div>
    </div>
  );
}

export function UsageStorageSelector({
  onSubmit,
  onCancel,
  className,
}: StructuredInputProps) {
  const [wearing, setWearing] = useState("");
  const [storage, setStorage] = useState("");
  const [travel, setTravel] = useState("");

  const wearingOptions = [
    { value: "daily", label: "Daily wear" },
    { value: "occasional", label: "Occasional wear" },
    { value: "special-occasions", label: "Special occasions only" },
    { value: "rarely", label: "Rarely worn" },
  ];

  const storageOptions = [
    { value: "safe", label: "In a safe" },
    { value: "display-case", label: "Display case" },
    { value: "drawer", label: "Drawer or box" },
    { value: "worn", label: "Always on wrist" },
  ];

  const travelOptions = [
    { value: "frequently", label: "Frequently travel with it" },
    { value: "sometimes", label: "Sometimes travel with it" },
    { value: "rarely", label: "Rarely travel with it" },
    { value: "never", label: "Never travel with it" },
  ];

  const handleSubmit = () => {
    const parts: string[] = [];
    if (wearing) {
      const option = wearingOptions.find((opt) => opt.value === wearing);
      if (option) parts.push(`I wear it ${option.label.toLowerCase()}`);
    }
    if (storage) {
      const option = storageOptions.find((opt) => opt.value === storage);
      if (option) parts.push(`I store it ${option.label.toLowerCase()}`);
    }
    if (travel) {
      const option = travelOptions.find((opt) => opt.value === travel);
      if (option) parts.push(`I ${option.label.toLowerCase()}`);
    }

    if (parts.length > 0) {
      onSubmit(parts.join(". ") + ".");
    }
  };

  const hasSelection = wearing || storage || travel;

  return (
    <div className={cn("flex flex-col gap-4 p-4", className)}>
      <label className="text-sm font-medium">Usage & Storage</label>
      <div className="flex flex-col gap-3">
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">
            Wearing Pattern
          </label>
          <Select value={wearing} onValueChange={setWearing}>
            <SelectTrigger>
              <SelectValue placeholder="How often do you wear it?" />
            </SelectTrigger>
            <SelectContent>
              {wearingOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">
            Storage
          </label>
          <Select value={storage} onValueChange={setStorage}>
            <SelectTrigger>
              <SelectValue placeholder="How do you store it?" />
            </SelectTrigger>
            <SelectContent>
              {storageOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-xs text-muted-foreground mb-1 block">
            Travel
          </label>
          <Select value={travel} onValueChange={setTravel}>
            <SelectTrigger>
              <SelectValue placeholder="Do you travel with it?" />
            </SelectTrigger>
            <SelectContent>
              {travelOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={handleSubmit}
          disabled={!hasSelection}
          size="default"
          className="flex-1"
        >
          Submit
        </Button>
        {onCancel && (
          <Button onClick={onCancel} variant="ghost" size="default">
            Cancel
          </Button>
        )}
      </div>
    </div>
  );
}
