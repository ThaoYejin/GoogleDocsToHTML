import React from 'react';
import renderer from 'react-test-renderer';
import {Heading} from './Heading';

it('renders correctly', ()=>{
    var paraObj =  {
        "elements": [
          {
            "startIndex": 1,
            "endIndex": 11,
            "textRun": {
              "content": "Heading 1\n",
              "textStyle": {}
            }
          }
        ],
        "paragraphStyle": {
          "headingId": "h.f8as6dpeqqe",
          "namedStyleType": "HEADING_1",
          "direction": "LEFT_TO_RIGHT"
        }
      };

    const tree = renderer
    .create(<Heading paraObj={paraObj}></Heading>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})