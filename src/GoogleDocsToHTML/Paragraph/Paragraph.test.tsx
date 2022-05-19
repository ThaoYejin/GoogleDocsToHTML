import React from 'react';
import renderer from 'react-test-renderer';
import { Paragraph } from "./Paragraph";
import * as docImage from './ParagraphImage.json';
import * as docLink from './ParagraphLink.json';
import * as docTextRun from './ParagraphTextRun.json';

it("Paragraph Image runs correctly", ()=>{
    var paraObj = {
        "elements": [
          {
            "startIndex": 1,
            "endIndex": 2,
            "inlineObjectElement": {
              "inlineObjectId": "kix.fw30sug1ofhp",
              "textStyle": {
                "fontSize": {
                  "magnitude": 12,
                  "unit": "PT"
                }
              }
            }
          },
          {
            "startIndex": 2,
            "endIndex": 3,
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
            "unit": "PT"
          },
          "indentStart": {
            "unit": "PT"
          }
        }
      };
      const tree = renderer
        .create(<Paragraph paraObj={paraObj} doc={docImage} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it("Paragraph Link runs correctly", ()=>{
    var paraObj = {
        "elements": [
          {
            "startIndex": 1,
            "endIndex": 8,
            "textRun": {
              "content": "Thao FB",
              "textStyle": {
                "underline": true,
                "foregroundColor": {
                  "color": {
                    "rgbColor": {
                      "red": 0.06666667,
                      "green": 0.33333334,
                      "blue": 0.8
                    }
                  }
                },
                "fontSize": {
                  "magnitude": 12,
                  "unit": "PT"
                },
                "link": {
                  "url": "https://www.facebook.com/thaoho0806"
                }
              }
            }
          },
          {
            "startIndex": 8,
            "endIndex": 9,
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
            "unit": "PT"
          },
          "indentStart": {
            "unit": "PT"
          }
        }
      };
      const tree = renderer
        .create(<Paragraph paraObj={paraObj} doc={docLink} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it("Paragraph TextRun runs correctly", ()=>{
    var paraObj = {
        "elements": [
          {
            "startIndex": 1,
            "endIndex": 31,
            "textRun": {
              "content": "This is a normal paragraph!!!!",
              "textStyle": {
                "fontSize": {
                  "magnitude": 12,
                  "unit": "PT"
                }
              }
            }
          },
          {
            "startIndex": 31,
            "endIndex": 32,
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
            "unit": "PT"
          },
          "indentStart": {
            "unit": "PT"
          }
        }
      };
      const tree = renderer
        .create(<Paragraph paraObj={paraObj} doc={docTextRun} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})