import { Data, Image, Request, Response } from "@ios-shortcuts/scriptable-environment";
import axios from "axios";

export class SimulatedRequest implements Request {
    public url: string = "";
    public method: string = "GET";
    public headers: Record<string, string> = {};
    public body: Data | string = "";
    public timeoutInterval: number = 60;
    public onRedirect: (request: Request) => Request = (r) => r;
    public response: Response | undefined = undefined;
    public allowInsecureRequest: boolean = false;

    public load(): Promise<Data> {
        throw new Error("Method not implemented.");
    }

    public loadString(): Promise<string> {
        throw new Error("Method not implemented.");
    }

    public loadJSON(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public loadImage(): Promise<Image> {
        throw new Error("Method not implemented.");
    }

    public addParameterToMultipart(name: string, value: string): void {
        throw new Error("Method not implemented.");
    }

    public addFileDataToMultipart(data: Data, mimeType: string, name: string, filename: string): void {
        throw new Error("Method not implemented.");
    }

    public addFileToMultipart(filePath: string, name: string, filename: string): void {
        throw new Error("Method not implemented.");
    }

    public addImageToMultipart(image: Image, name: string, filename: string): void {
        throw new Error("Method not implemented.");
    }
}
