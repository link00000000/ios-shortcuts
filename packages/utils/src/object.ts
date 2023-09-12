export function isNullOrUndefined(obj: unknown) {
    return obj === null || obj === undefined;
}

export function hasValue(obj: unknown) {
    return obj !== null && obj !== undefined;
}
