declare global {
    export var __PACKAGE_NAME__: string;
    export var __PACKAGE_VERSION__: "development" | string & {}; // string & {} so that Typescript will recommend using specified string literals before any other string
}
