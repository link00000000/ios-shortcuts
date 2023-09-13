import { Assert } from ".";

export function isNullOrUndefined(obj: unknown) {
    return obj === null || obj === undefined;
}

export function hasValue(obj: unknown) {
    return obj !== null && obj !== undefined;
}

export function getAsserted<TResult, TObj, TKey extends keyof TObj>(obj: TObj | null | undefined, key: TKey) {
    Assert.Object.hasValue(obj);

    const element = obj[key];
    Assert.Object.hasValue(element);

    return element as TResult;
}
