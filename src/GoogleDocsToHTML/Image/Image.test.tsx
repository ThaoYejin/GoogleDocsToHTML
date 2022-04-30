import React from 'react';
import renderer from 'react-test-renderer';
import {Image} from './Image';
import * as test from './ImageTest.json';

it('renders correctly', ()=>{
    var doc = test;
   var element ={
      "startIndex": 1,
      "endIndex": 2,
      "inlineObjectElement": {
        "inlineObjectId": "kix.5mgyfthwug6j",
        "textStyle": {
          "weightedFontFamily": {
            "fontFamily": "Comic Sans MS",
            "weight": 400
          }
        }
      }
    };

    const tree = renderer
    .create(<Image doc={doc} element={element}></Image>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})