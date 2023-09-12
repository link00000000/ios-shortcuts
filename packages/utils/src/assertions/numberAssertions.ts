import { assert } from "..";

export function isPositive(n: number, message?: string) {
    assert(n > 0, message ?? isPositive.name);
}
