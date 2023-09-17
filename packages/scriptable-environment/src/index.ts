import { type Alert as AlertComponent } from "./components/alert";
import { type args as ArgsComponent } from "./components/args";
import { type Calendar as CalendarComponent } from "./components/calendar";
import { type CalendarEvent as CalendarEventComponent } from "./components/calendarEvent";
import { type CallbackURL as CallbackUrlComponent } from "./components/callbackUrl";
import { type Color as ColorComponent } from "./components/color";
import { type config as ConfigComponent } from "./components/config";
import { type console as ConsoleComponent } from "./components/console";
import { type Contact as ContactComponent } from "./components/contact";
import { type ContactsContainer as ContactsContainerComponent } from "./components/contactsContainer";
import { type ContactsGroup as ContactsGroupComponent } from "./components/contactsGroup";
import { type Data as DataComponent } from "./components/data";
import { type DateFormatter as DateFormatterComponent } from "./components/dateFormatter";
import { type DatePicker as DatePickerComponent } from "./components/datePicker";
import { type Device as DeviceComponent } from "./components/device";
import { type Dictation as DictationComponent } from "./components/dictation";
import { type DocumentPicker as DocumentPickerComponent } from "./components/documentPicker";
import { type DrawContext as DrawContextComponent } from "./components/drawContext";
import { type FileManager as FileManagerComponent } from "./components/fileManager";
import { type Font as FontComponent } from "./components/font";
import { type Image as ImageComponent } from "./components/image";
import { type Keychain as KeychainComponent } from "./components/keychain";
import { type LinearGradient as LinearGradientComponent } from "./components/linearGradient";
import { type ListWidget as ListWidgetComponent } from "./components/listWidget";
import { type Location as LocationComponent } from "./components/location";
import { type Mail as MailComponent } from "./components/mail";
import { type Message as MessageComponent } from "./components/message";
import { type module as ModuleComponent } from "./components/module";
import { type Notification as NotificationComponent } from "./components/notification";
import { type Pasteboard as PasteboardComponent } from "./components/pasteboard";
import { type Path as PathComponent } from "./components/path";
import { type Photos as PhotosComponent } from "./components/photos";
import { type Point as PointComponent } from "./components/point";
import { type QuickLook as QuickLookComponent } from "./components/quickLook";
import { type Rect as RectComponent } from "./components/rect";
import { type RecurrenceRule as RecurrenceRuleComponent } from "./components/recurrenceRule";
import { type RelativeDateTimeFormatter as RelativeDateTimeFormatterComponent } from "./components/relativeDateTimeFormatter";
import { type Reminder as ReminderComponent } from "./components/reminder";
import { type Request as RequestComponent } from "./components/request";
import { type Safari as SafariComponent } from "./components/safari";
import { type Script as ScriptComponent } from "./components/script";
import { type SFSymbol as SfSymbolComponent } from "./components/sfSymbol";
import { type ShareSheet as ShareSheetComponent } from "./components/shareSheet";
import { type Size as SizeComponent } from "./components/size";
import { type Speech as SpeechComponent } from "./components/speech";
import { type TextField as TextFieldComponent } from "./components/textField";
import { type Timer as TimerComponent } from "./components/timer";
import { type UITable as UiTableComponent } from "./components/uiTable";
import { type UITableCell as UiTableCellComponent } from "./components/uiTableCell";
import { type UITableRow as UiTableRowComponent } from "./components/uiTableRow";
import { type URLScheme as UrlSchemeComponent } from "./components/urlScheme";
import { type UUID as UuidComponent } from "./components/uuid";
import { type WebView as WebViewComponent } from "./components/webView";
import { type WidgetDate as WidgetDateComponent } from "./components/widgetDate";
import { type WidgetImage as WidgetImageComponent } from "./components/widgetImage";
import { type WidgetSpacer as WidgetSpacerComponent } from "./components/widgetSpacer";
import { type WidgetStack as WidgetStackComponent } from "./components/widgetStack";
import { type WidgetText as WidgetTextComponent } from "./components/widgetText";
import { type XMLParser as XmlParserComponent } from "./components/xmlParser";

export { type Alert } from "./components/alert";
export { type args } from "./components/args";
export { type Calendar } from "./components/calendar";
export { type CalendarEvent } from "./components/calendarEvent";
export { type CallbackURL } from "./components/callbackUrl";
export { type Color } from "./components/color";
export { type config } from "./components/config";
export { type console } from "./components/console";
export { type Contact } from "./components/contact";
export { type ContactsContainer } from "./components/contactsContainer";
export { type ContactsGroup } from "./components/contactsGroup";
export { type Data } from "./components/data";
export { type DateFormatter } from "./components/dateFormatter";
export { type DatePicker } from "./components/datePicker";
export { type Device } from "./components/device";
export { type Dictation } from "./components/dictation";
export { type DocumentPicker } from "./components/documentPicker";
export { type DrawContext } from "./components/drawContext";
export { type FileManager } from "./components/fileManager";
export { type Font } from "./components/font";
export { type Image } from "./components/image";
export { type Keychain } from "./components/keychain";
export { type LinearGradient } from "./components/linearGradient";
export { type ListWidget } from "./components/listWidget";
export { type Location } from "./components/location";
export { type Mail } from "./components/mail";
export { type Message } from "./components/message";
export { type module } from "./components/module";
export { type Notification } from "./components/notification";
export { type Pasteboard } from "./components/pasteboard";
export { type Path } from "./components/path";
export { type Photos } from "./components/photos";
export { type Point } from "./components/point";
export { type QuickLook } from "./components/quickLook";
export { type Rect } from "./components/rect";
export { type RecurrenceRule } from "./components/recurrenceRule";
export { type RelativeDateTimeFormatter } from "./components/relativeDateTimeFormatter";
export { type Reminder } from "./components/reminder";
export { type Request } from "./components/request";
export { type Safari } from "./components/safari";
export { type Script } from "./components/script";
export { type SFSymbol } from "./components/sfSymbol";
export { type ShareSheet } from "./components/shareSheet";
export { type Size } from "./components/size";
export { type Speech } from "./components/speech";
export { type TextField } from "./components/textField";
export { type Timer } from "./components/timer";
export { type UITable } from "./components/uiTable";
export { type UITableCell } from "./components/uiTableCell";
export { type UITableRow } from "./components/uiTableRow";
export { type URLScheme } from "./components/urlScheme";
export { type UUID } from "./components/uuid";
export { type WebView } from "./components/webView";
export { type WidgetDate } from "./components/widgetDate";
export { type WidgetImage } from "./components/widgetImage";
export { type WidgetSpacer } from "./components/widgetSpacer";
export { type WidgetStack } from "./components/widgetStack";
export { type WidgetText } from "./components/widgetText";
export { type XMLParser } from "./components/xmlParser";

declare global {
    export var Alert: typeof AlertComponent;
    export var Args: typeof ArgsComponent;
    export var Calendar: typeof CalendarComponent;
    export var CalendarEvent: typeof CalendarEventComponent;
    export var CallbackUrl: typeof CallbackUrlComponent;
    export var Color: typeof ColorComponent;
    export var Config: typeof ConfigComponent;
    export var Console: typeof ConsoleComponent;
    export var Contact: typeof ContactComponent;
    export var ContactsContainer: typeof ContactsContainerComponent;
    export var ContactsGroup: typeof ContactsGroupComponent;
    export var Data: typeof DataComponent;
    export var DateFormatter: typeof DateFormatterComponent;
    export var DatePicker: typeof DatePickerComponent;
    export var Device: typeof DeviceComponent;
    export var Dictation: typeof DictationComponent;
    export var DocumentPicker: typeof DocumentPickerComponent;
    export var DrawContext: typeof DrawContextComponent;
    export var FileManager: typeof FileManagerComponent;
    export var Font: typeof FontComponent;
    export var Image: typeof ImageComponent;
    export var Keychain: typeof KeychainComponent;
    export var LinearGradient: typeof LinearGradientComponent;
    export var ListWidget: typeof ListWidgetComponent;
    export var Location: typeof LocationComponent;
    export var Mail: typeof MailComponent;
    export var Message: typeof MessageComponent;
    export var Module: typeof ModuleComponent;
    export var Notification: typeof NotificationComponent;
    export var Pasteboard: typeof PasteboardComponent;
    export var Path: typeof PathComponent;
    export var Photos: typeof PhotosComponent;
    export var Point: typeof PointComponent;
    export var QuickLook: typeof QuickLookComponent;
    export var Rect: typeof RectComponent;
    export var RecurrenceRule: typeof RecurrenceRuleComponent;
    export var RelativeDateTimeFormatter: typeof RelativeDateTimeFormatterComponent;
    export var Reminder: typeof ReminderComponent;
    export var Request: typeof RequestComponent;
    export var Safari: typeof SafariComponent;
    export var Script: typeof ScriptComponent;
    export var SfSymbol: typeof SfSymbolComponent;
    export var ShareSheet: typeof ShareSheetComponent;
    export var Size: typeof SizeComponent;
    export var Speech: typeof SpeechComponent;
    export var TextField: typeof TextFieldComponent;
    export var Timer: typeof TimerComponent;
    export var UiTable: typeof UiTableComponent;
    export var UiTableCell: typeof UiTableCellComponent;
    export var UiTableRow: typeof UiTableRowComponent;
    export var UrlScheme: typeof UrlSchemeComponent;
    export var Uuid: typeof UuidComponent;
    export var WebView: typeof WebViewComponent;
    export var WidgetDate: typeof WidgetDateComponent;
    export var WidgetImage: typeof WidgetImageComponent;
    export var WidgetSpacer: typeof WidgetSpacerComponent;
    export var WidgetStack: typeof WidgetStackComponent;
    export var WidgetText: typeof WidgetTextComponent;
    export var XmlParser: typeof XmlParserComponent;
}
