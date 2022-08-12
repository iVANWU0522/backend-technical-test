import { ContentBrowser } from "./content-browser.interface";

export interface Response {
    data: {
        data: {
            contentBrowser: ContentBrowser;
        }
    }
}