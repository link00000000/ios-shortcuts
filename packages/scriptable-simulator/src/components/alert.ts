import { Alert, TextField } from "@ios-shortcuts/scriptable-environment";
import process from "node:process";

type Action = {
    type: "regular" | "destructive"| "cancel";
    title: string;
}

export class SimulatedAlert implements Alert {
    public title: string = "";
    public message: string = "";

    private actions: Action[] = [];
    private textFields: TextField[] = [];

    public addAction(title: string): void {
        this.actions.push({ type: "regular", title })
    }

    public addDestructiveAction(title: string): void {
        this.actions.push({ type: "destructive", title })
    }

    public addCancelAction(title: string): void {
        this.actions.push({ type: "cancel", title })
    }

    public addTextField(placeholder: string, text: string): TextField {
        return null!;
        // const textField = new TextField();
        // textField.placeholder = placeholder;
        // textField.text = text;
        // textField.isSecure = false;
        
        // this.textFields.push(textField);

        // return textField;
    }

    public addSecureTextField(placeholder: string, text: string): TextField {
        return null!;
        // const textField = new TextField();
        // textField.placeholder = placeholder;
        // textField.text = text;
        // textField.isSecure = true;
        // 
        // this.textFields.push(textField);
        //
        // return textField;
    }

    public textFieldValue(index: number): string {
        return this.textFields[index]?.text ?? "";
    }

    public present(): Promise<number> {
        return this.presentAlert();
    }

    public presentAlert(): Promise<number> {
        process.stdout.write(JSON.stringify(this) + "\n");
        
        // TODO: Figure out what this is supposed to return
        return Promise.resolve(0);
    }

    public presentSheet(): Promise<number> {
        process.stdout.write(JSON.stringify(this) + "\n");
        
        // TODO: Figure out what this is supposed to return
        return Promise.resolve(0);
    }
}
