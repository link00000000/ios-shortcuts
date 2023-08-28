import { Alert as AlertComponent } from "./components/alert";
import { TextField as TextFieldComponent } from "./components/textField";
import { Calendar as calendar } from "./components/calendar";

declare global {
    export var Alert: typeof AlertComponent;
    export var TextField: typeof TextFieldComponent;
}
