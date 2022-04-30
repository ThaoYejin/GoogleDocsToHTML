import React from 'react';
import renderer from 'react-test-renderer';
import { TextRun } from './TextRun';

it('renders correctly', () => {
    var element = {
        "startIndex": 6,
        "endIndex": 10,
        "textRun": {
          "content": "Run\n",
          "textStyle": {
            "bold": true
          }
        }
      };

    const tree = renderer
        .create(<TextRun element={element} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})