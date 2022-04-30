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
              "magnitude": 45,
              "unit": "PT"
            }
          }
        }
      };

    const tree = renderer
        .create(<TextRun element={element} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})