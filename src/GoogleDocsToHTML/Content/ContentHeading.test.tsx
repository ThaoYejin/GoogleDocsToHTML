import React from 'react';
import renderer from 'react-test-renderer';
import { Content } from './Content';
import * as doc from './ContentHeadingTest.json';

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
      "endIndex": 11,
      "paragraph": {
        "elements": [
          {
            "startIndex": 1,
            "endIndex": 10,
            "textRun": {
              "content": "Heading 2",
              "textStyle": {}
            }
          },
          {
            "startIndex": 10,
            "endIndex": 11,
            "textRun": {
              "content": "\n",
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
          }
        ],
        "paragraphStyle": {
          "headingId": "h.uj1624xbojaz",
          "namedStyleType": "HEADING_2",
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