import StringUtils from "./string";

function fail(assertionName: string): never {
    throw new Error("Assertion failed: " + assertionName);
}

function assertNotNullOrEmpty(s: string | null | undefined, message?: string): asserts s is string {
    if (StringUtils.isNullOrEmpty(s)) {
        fail(message ?? "assertNotNullOrEmpty");
    }
}

function assertNotNullOrWhiteSpace(s: string | null | undefined, message?: string): asserts s is string {
    if (StringUtils.isNullOrWhiteSpace(s)) {
        fail(message ?? "assertNotNullOrWhiteSpace");
    }
}

export default { assertNotNullOrEmpty, assertNotNullOrWhiteSpace };
