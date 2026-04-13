// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 合併 Tailwind 類名，解決後方類名覆蓋前方類名的問題
 * 同時處理條件判斷（例如：isActive && "bg-blue-500"）
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}