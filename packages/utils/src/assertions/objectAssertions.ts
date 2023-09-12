import { assert, ObjectUtils } from "..";

export function isNullOrUndefined(obj: unknown, message?: string): asserts obj is (null | undefined) {
    assert(!ObjectUtils.isNullOrUndefined(obj), message ?? isNullOrUndefined.name);
}

export function hasValue<T>(obj: T, message?: string): asserts obj is (NonNullable<T> & T) {
    assert(ObjectUtils.hasValue(obj), message ?? hasValue.name);
}
