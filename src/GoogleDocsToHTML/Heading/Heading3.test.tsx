import React from 'react';
import renderer from 'react-test-renderer';
import {Heading} from './Heading';

it('renders correctly', ()=>{
    var paraObj =  {
        "elements": [
          {
            "startIndex": 21,
            "endIndex": 31,
            "textRun": {
              "content": "Heading 3\n",
              "textStyle": {}
            }
          }
        ],
        "paragraphStyle": {
          "headingId": "h.e2xo2rcdign0",
          "namedStyleType": "HEADING_3",
          "direction": "LEFT_TO_RIGHT"
        }
      };

    const tree = renderer
    .create(<Heading paraObj={paraObj}></Heading>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})