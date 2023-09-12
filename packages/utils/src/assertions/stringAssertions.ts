import { StringUtils, assert } from "..";

export function isNotNullOrEmpty(s: string | null | undefined, message?: string): asserts s is string {
    assert(!StringUtils.isNullOrEmpty(s), message ?? isNotNullOrEmpty);
}

export function isNotNullOrWhiteSpace(s: string | null | undefined, message?: string): asserts s is string {
    assert(!StringUtils.isNullOrWhiteSpace(s), message ?? isNotNullOrWhiteSpace);
}

