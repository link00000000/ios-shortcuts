import { Assert } from ".";

export function length(arr: unknown[] | null | undefined) {
    if (arr === null || arr === undefined) {
        return 0;
    }

    return arr.length;
}

export function getAsserted<T>(arr: T[] | null | undefined, index: number): T {
    Assert.Object.hasValue(arr);

    const element = arr[index];
    Assert.Object.hasValue(element);

    return element;
}

