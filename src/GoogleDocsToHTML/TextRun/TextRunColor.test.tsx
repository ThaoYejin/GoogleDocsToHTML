import React from 'react';
import renderer from 'react-test-renderer';
import { TextRun } from './TextRun';

it('renders correctly', () => {
    var element = {
        "startIndex": 1,
        "endIndex": 6,
        "textRun": {
          "content": "Text ",
          "textStyle": {
            "foregroundColor": {
              "color": {
                "rgbColor": {
                  "red": 0.6,
                  "blue": 1
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