export function isRunningInScriptable() {
    return 'process' in globalThis;
}
