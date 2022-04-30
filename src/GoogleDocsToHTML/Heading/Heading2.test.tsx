import React from 'react';
import renderer from 'react-test-renderer';
import {Heading} from './Heading';

it('renders correctly', ()=>{
    var paraObj =  {
        "elements": [
          {
            "startIndex": 11,
            "endIndex": 21,
            "textRun": {
              "content": "Heading 2\n",
              "textStyle": {}
            }
          }
        ],
        "paragraphStyle": {
          "headingId": "h.jcp4wo8tn982",
          "namedStyleType": "HEADING_2",
          "direction": "LEFT_TO_RIGHT"
        }
      };

    const tree = renderer
    .create(<Heading paraObj={paraObj}></Heading>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})