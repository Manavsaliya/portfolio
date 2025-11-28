import { clsx, type ClassValue } from "clsx";
import { differenceInMonths, format } from "date-fns";
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
  if (end === "current") {
    const startDate = new Date(start + "T00:00:00");
    const now = new Date();
    const months = differenceInMonths(now, startDate);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (years > 0) {
      return `${years}y ${remainingMonths}mo`;
    }
    return `${remainingMonths}mo`;
  }

  const startDate = new Date(start + "T00:00:00");
  const endDate = new Date(end + "T00:00:00");
  const months = differenceInMonths(endDate, startDate);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  if (years > 0) {
    return `${years}y ${remainingMonths}mo`;
  }
  return `${remainingMonths}mo`;
}
