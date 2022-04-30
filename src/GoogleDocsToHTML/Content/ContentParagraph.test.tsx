import React from 'react';
import renderer from 'react-test-renderer';
import { Content } from './Content';
import * as doc from './ContentParagraphTest.json';

it('renders correctly', () => {
  var body = [
    {
      "endIndex": 1,
      "sectionBreak": {
        "sectionStyle": {
          "columnSeparatorStyle": "NONE",
          "contentDirection": "LEFT_TO_RIGHT",
          "sectionType": "CONTINUOUS"
        }
      }
    },
    {
      "startIndex": 1,
      "endIndex": 34,
      "paragraph": {
        "elements": [
          {
            "startIndex": 1,
            "endIndex": 33,
            "textRun": {
              "content": "This is just a normal paragraph.",
              "textStyle": {
                "foregroundColor": {
                  "color": {
                    "rgbColor": {
                      "red": 0.2509804,
                      "green": 0.2509804,
                      "blue": 0.2509804
                    }
                  }
                },
                "fontSize": {
                  "magnitude": 12,
                  "unit": "PT"
                }
              }
            }
          },
          {
            "startIndex": 33,
            "endIndex": 34,
            "textRun": {
              "content": "\n",
              "textStyle": {}
            }
          }
        ],
        "paragraphStyle": {
          "namedStyleType": "NORMAL_TEXT",
          "direction": "LEFT_TO_RIGHT"
        }
      }
    }
  ];

    const tree = renderer
        .create(<Content doc={doc} body={body} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})