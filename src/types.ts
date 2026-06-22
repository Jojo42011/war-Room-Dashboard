/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface RecentScrub {
  id?: string | number;
  publisherName: string;
  publisher?: string; // fallback
  amount: number;
  status: 'voided' | 'approved' | 'pending' | string;
  time?: string;
  timestamp?: string; // fallback
}

export interface ScrubStats {
  totalScrubs: number;
  payoutVoided: number;
  revenueVoided: number;
  lastRunTimestamp: string;
  nextRunCountdown: number; // in seconds
  recentScrubs: RecentScrub[];
}

export type ActivePanel = 'scrub' | 'fraud' | 'chat' | 'payment' | 'jarvis' | null;

export interface ChatMessage {
  id: string;
  sender: 'user' | 'jarvis';
  text: string;
  timestamp: string;
}
