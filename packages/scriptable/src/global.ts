import { Alert as AlertComponent } from "./components/alert";
import { TextField as TextFieldComponent } from "./components/textField";

declare global {
    export var Alert: typeof AlertComponent;
    export var TextField: typeof TextFieldComponent;
}
