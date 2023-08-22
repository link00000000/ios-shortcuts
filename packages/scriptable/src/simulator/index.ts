import "../global";
import { Alert as AlertComponent } from "../components/alert";
import { TextField as TextFieldComponent } from "../components/textField";

export function configureEnvironment() {
    globalThis.Alert = AlertComponent;
    globalThis.TextField = TextFieldComponent;
}
