import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EASE_APPLE = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT_APPLE = [0.65, 0, 0.35, 1] as const;

export const TRANSITION_PREMIUM = {
  duration: 1.2,
  ease: EASE_APPLE,
};

export const STAGGER_CHILDREN = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
