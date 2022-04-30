import React from 'react';
import renderer from 'react-test-renderer';
import { TextRun } from './TextRun';

it('renders correctly', () => {
    var element = {
        "startIndex": 1,
        "endIndex": 5,
        "textRun": {
          "content": "Text",
          "textStyle": {
            "backgroundColor": {
              "color": {
                "rgbColor": {
                  "red": 1,
                  "green": 1
                }
              }
            },
            "foregroundColor": {
              "color": {
                "rgbColor": {
                  "red": 0.2509804,
                  "green": 0.2509804,
                  "blue": 0.2509804
                }
              }
            }
          }
        }
      };

    const tree = renderer
        .create(<TextRun element={element} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})