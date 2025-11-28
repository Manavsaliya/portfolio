import { clsx, type ClassValue } from "clsx";
import { differenceInMonths, format, isValid } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
  if (dateStr === "current") return "Present";
  const date = new Date(dateStr + "T00:00:00");
  return format(date, "MMM yyyy");
}

export function calculateDuration(start: string, end: string): string {
  const startDate = new Date(`${start}T00:00:00`);

  const endDate = end === "current" ? new Date() : new Date(`${end}T00:00:00`);

  if (!isValid(startDate) || !isValid(endDate)) {
    return "";
  }

  if (endDate < startDate) {
    return "0mo";
  }

  const totalMonths = differenceInMonths(endDate, startDate);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0) {
    return `${years}y ${months}mo`;
  }
  return `${months}mo`;
}
