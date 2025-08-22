import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"


/**
* Merge conditional class names and resolve Tailwind conflicts.
* why: shadcn components rely on this to combine className props safely
*/
export function cn(...inputs) {
return twMerge(clsx(inputs))
}