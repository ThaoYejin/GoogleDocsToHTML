# GoogleDocsToHTML

## Installation

1. Install React (if not available already)

    Note: This component is written in React version ^17.0.2

    ```
    npm i react@^17.0.2 react-dom@^17.0.2

    ```

2. Install GoogleDocsToHTML using npm

    ```
    npm i googledocs-to-html

    ```

## Usage

If you get the json object which is the result of [Google Docs API](https://developers.google.com/docs/api/reference/rest/v1/documents/get) and plug into this component, this component will turn it into a HTML page.

Example: 

    import { GoogleDocsToHTML } from "googledocs-to-html";

    export const UsageExample: React.FC<> = () => {
        return (
            <GoogleDocsToHTML doc={{"body": {
                "content": [
                    {
                        "endIndex": 1, 
                        "sectionBreak": {
                            "sectionStyle": {
                                "columnSeparatorStyle": "NONE", 
                                "contentDirection": "LEFT_TO_RIGHT"
                            }
                        }
                    }, 
                    ...
                    }} 
            />
        )
    }

### Sample

1. Static Json sample

    Please refer to [Static Json Sample](https://googledocs-to-html.netlify.app/?path=/story/googledocstohtml--static-json)


2. Fetch from API sample

    Please refer to [Fetch from API Sample](https://googledocs-to-html.netlify.app/?path=/story/googledocstohtml--fetch-from-api)

## License

googledocs-to-html is under [MIT license](./LICENSE).
