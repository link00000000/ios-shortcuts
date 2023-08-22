type Action = {
    title: string;
    type: "regular" | "cancel" | "destructive";
}

type TextField = {
    placeholder: string;
    text: string;
    type: "regular" | "secure";
}

export class Alert {
    public message: string | undefined;
    public title: string | undefined;

    private actions: Action[] = [];
    private textFields: TextField[] = [];

    public addAction(title: string) {
        this.actions.push({ title, type: "regular" });
    }

    public addCancelAction(title: string) {
        this.actions.push({ title, type: "cancel" });
    }

    public addDestructiveAction(title: string) {
        this.actions.push({ title, type: "destructive" });
    }
    
    public addTextField(placeholder: string, text: string) {
        // TODO; Use TextField class instead
        this.textFields.push({ placeholder, text, type: "regular" });
    }

    public addSecureTextField(placeholder: string, text: string) {
        // TODO; Use TextField class instead
        this.textFields.push({ placeholder, text, type: "secure" });
    }

    public async present() {
        console.log({ title: this.title, message: this.message });
        // TODO: Implement
        return 0;
    }

    public async presentAlert() {
        // TODO: Implement
        return 0;
    }

    public async presentSheet() {
        // TODO: Implement
        return 0;
    }

    public textFieldValue(index: number) {
        // TODO: Implement
        return "";
    }
}
