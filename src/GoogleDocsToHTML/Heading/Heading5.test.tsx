import React from 'react';
import renderer from 'react-test-renderer';
import {Heading} from './Heading';

it('renders correctly', ()=>{
    var paraObj =  {
        "elements": [
          {
            "startIndex": 41,
            "endIndex": 51,
            "textRun": {
              "content": "Heading 5\n",
              "textStyle": {}
            }
          }
        ],
        "paragraphStyle": {
          "headingId": "h.ntalojsk5fda",
          "namedStyleType": "HEADING_5",
          "direction": "LEFT_TO_RIGHT"
        }
      };

    const tree = renderer
    .create(<Heading paraObj={paraObj}></Heading>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})