export function isNullOrEmpty(s: string | null | undefined) {
    return s === null || s === undefined || s.length === 0;
}

export function isNullOrWhiteSpace(s: string | null | undefined) {
    return isNullOrEmpty(s?.trim());
}

