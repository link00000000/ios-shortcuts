import "@ios-shortcuts/scriptable-environment";

type AlertBuilderOptions = {
    title?: string;
    message?: string;
    actions?: AlertBuilderOptionsAction[];
};

const AlertActionTypes = ["default", "cancel"] as const;

type AlertBuilderOptionsAction = {
    message: string;
    type?: typeof AlertActionTypes[number];
};


export class AlertBuilder {
    private alert = new Alert();

    constructor(options: AlertBuilderOptions) {
        if (options.title) {
            this.setTitle(options.title);
        }

        if (options.message) {
            this.setMessage(options.message);
        }

        if (options.actions) {
            for (const { type, message } of options.actions) {
                switch (type) {
                    case undefined:
                    case "default":
                        this.addAction(message);
                    case "cancel":
                        this.addCancelAction(message);
                }
            }
        }
    }

    public setTitle(title: string) {
        this.alert.title = title;
        return this;
    }

    public setMessage(message: string) {
        this.alert.message = message;
        return this;
    }

    public addAction(text: string) {
        this.alert.addAction(text);
        return this;
    }

    public addCancelAction(text: string) {
        this.alert.addCancelAction(text);
        return this;
    }

    public build() {
        return this.alert;
    }
}
