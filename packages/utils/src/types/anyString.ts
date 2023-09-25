export type AnyString = string & {};
export type AnyStringWithAutoComplete<TAutoComplete extends string> = TAutoComplete | AnyString;
