'use client';

/**
 * Cross-border LP tracking helpers.
 *
 * UTM + gclid values are read from the URL on first load and mirrored into
 * sessionStorage so they survive a reload or a lost query string while the
 * visitor is still on the page. `trackingValues()` always returns the full set,
 * preferring the current URL and falling back to what was stored.
 */

declare global {
    interface Window {
        dataLayer?: Record<string, unknown>[];
    }
}

export const TRACKING_KEYS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'gclid',
] as const;

export type TrackingKey = (typeof TRACKING_KEYS)[number];
export type TrackingValues = Record<TrackingKey, string>;

function safeGet(key: string): string | null {
    try {
        return sessionStorage.getItem(key);
    } catch {
        return null;
    }
}

function safeSet(key: string, value: string): void {
    try {
        sessionStorage.setItem(key, value);
    } catch {
        /* storage unavailable (private mode, blocked) — ignore */
    }
}

/**
 * Capture any tracking params present in the URL into sessionStorage.
 * Safe to call on every page load; existing stored values are only overwritten
 * when the URL actually carries a fresh value.
 */
export function captureTracking(): void {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    TRACKING_KEYS.forEach((key) => {
        const value = params.get(key);
        if (value) safeSet(key, value);
    });
}

/** Return the current tracking values (URL first, sessionStorage fallback). */
export function trackingValues(): TrackingValues {
    const out = {} as TrackingValues;
    const params =
        typeof window === 'undefined'
            ? new URLSearchParams()
            : new URLSearchParams(window.location.search);

    TRACKING_KEYS.forEach((key) => {
        const value = params.get(key) || safeGet(key) || '';
        out[key] = value;
    });
    return out;
}
