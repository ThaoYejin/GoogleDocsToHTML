
import React from 'react';
import renderer from 'react-test-renderer';
import { ListTestComponent } from "./ListTestComponent";
import * as doc1 from './OrderedList.json';
import * as doc2 from './UnorderedList.json';

it("ol runs correctly", ()=>{
    var startIndex = 1;
    const tree = renderer
        .create(<ListTestComponent doc={doc1} startIndex={startIndex} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it("ul runs correctly", ()=>{
    var startIndex = 1;
    const tree = renderer
        .create(<ListTestComponent doc={doc2} startIndex={startIndex} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})