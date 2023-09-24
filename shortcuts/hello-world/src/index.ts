import "@ios-shortcuts/scriptable-environment";

abstract class ScriptableShortcut {
    public readonly name: string;
    public readonly version: string;

    constructor(name: string, version: string) {
        this.name = name;
        this.version = version;
    }
}

class Shortcut extends ScriptableShortcut {
    constructor() {
        super(__PACKAGE_NAME__, __PACKAGE_VERSION__);
    }
}

const shortcut = new Shortcut();
console.log(shortcut.name);
console.log(shortcut.version);
