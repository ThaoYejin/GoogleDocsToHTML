import { docs_v1 } from "googleapis";

it('run correctly', ()=>{
    var listObjArr: docs_v1.Schema$Paragraph[], level: number, startIndex: number, listType:string, listStyle:string[][];
    listObjArr = [
        {
            "elements": [
              {
                "startIndex": 1,
                "endIndex": 8,
                "textRun": {
                  "content": "Item 1\n",
                  "textStyle": {
                    "fontSize": {
                      "magnitude": 12,
                      "unit": "PT"
                    }
                  }
                }
              }
            ],
            "paragraphStyle": {
              "namedStyleType": "NORMAL_TEXT",
              "direction": "LEFT_TO_RIGHT",
              "indentFirstLine": {
                "magnitude": 18,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 36,
                "unit": "PT"
              }
            },
            "bullet": {
              "listId": "kix.yu98wpyunb8j",
              "textStyle": {
                "underline": false,
                "fontSize": {
                  "magnitude": 12,
                  "unit": "PT"
                }
              }
            }
          },
          {
            "elements": [
              {
                "startIndex": 8,
                "endIndex": 14,
                "textRun": {
                  "content": "Item 2",
                  "textStyle": {
                    "fontSize": {
                      "magnitude": 12,
                      "unit": "PT"
                    }
                  }
                }
              },
              {
                "startIndex": 14,
                "endIndex": 15,
                "textRun": {
                  "content": "\n",
                  "textStyle": {
                    "fontSize": {
                      "magnitude": 12,
                      "unit": "PT"
                    }
                  }
                }
              }
            ],
            "paragraphStyle": {
              "namedStyleType": "NORMAL_TEXT",
              "direction": "LEFT_TO_RIGHT",
              "indentFirstLine": {
                "magnitude": 18,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 36,
                "unit": "PT"
              }
            },
            "bullet": {
              "listId": "kix.yu98wpyunb8j",
              "textStyle": {
                "underline": false,
                "fontSize": {
                  "magnitude": 12,
                  "unit": "PT"
                }
              }
            }
          }
    ];
    level = 0;
    startIndex = 0;
    listType = "ul" ;
    listStyle = [["●","○"],["undefined", "undefined"]];
})