import React from 'react';
import renderer from 'react-test-renderer';
import { TextRun } from './TextRun';

it('renders correctly', () => {
    var element = {
        "startIndex": 1,
        "endIndex": 10,
        "textRun": {
          "content": "Text Run\n",
          "textStyle": {}
        }
      };

    const tree = renderer
        .create(<TextRun element={element} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})