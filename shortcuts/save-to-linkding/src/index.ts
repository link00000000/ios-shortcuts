import * as scriptable from "@ios-shortcuts/scriptable";

async function main() {
    const y = new TextField();

    const alert = new TestGlobalClass();
    alert.title = "Test title";
    alert.message = "Test message";
    alert.present();
}

main();
