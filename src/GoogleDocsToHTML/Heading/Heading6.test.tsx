import React from 'react';
import renderer from 'react-test-renderer';
import {Heading} from './Heading';

it('renders correctly', ()=>{
    var paraObj =  {
        "elements": [
          {
            "startIndex": 51,
            "endIndex": 61,
            "textRun": {
              "content": "Heading 6\n",
              "textStyle": {}
            }
          }
        ],
        "paragraphStyle": {
          "headingId": "h.a13a3gam3vv3",
          "namedStyleType": "HEADING_6",
          "direction": "LEFT_TO_RIGHT"
        }
      };

    const tree = renderer
    .create(<Heading paraObj={paraObj}></Heading>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})