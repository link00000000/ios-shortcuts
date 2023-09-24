export abstract class Shortcut {
    public name: string;
    public version: string;

    constructor(name: string, version: string) {
        this.name = name;
        this.version = version;
    }
    
    public abstract run(): Promise<void>;
}
