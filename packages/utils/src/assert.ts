export function assert(condition: boolean): asserts condition is true;
export function assert(condition: boolean, func: Function): asserts condition is true;
export function assert(condition: boolean, message: string): asserts condition is true;
export function assert(condition: boolean, context: Function | string): asserts condition is true;
export function assert(condition: boolean, context?: Function | string): asserts condition is true {
    if (!condition) {
        throw new AssertionError(context);
    }
}

export class AssertionError extends Error {
    constructor(func: Function);
    constructor(message: string);
    constructor(context?: Function | string);
    constructor(context?: Function | string) {
        super(context === undefined
            ? "Assertion failed" 
            : "Assertion failed: " + (typeof context === "function" ? context.name : context));
    }
}
