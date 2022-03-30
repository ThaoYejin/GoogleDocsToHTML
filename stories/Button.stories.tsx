import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {GoogleDocsToHTML} from "../src/GoogleDocsToHTML/GoogleDocsToHTML";
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

const Template1 = (args:any) => <GoogleDocsToHTML {...args}/>;

export const Test = Template1.bind({});
Test.args = {doc:{"title":"testGoogleDoc","body":{"content":[{"endIndex":1,"sectionBreak":{"sectionStyle":{"columnSeparatorStyle":"NONE","contentDirection":"LEFT_TO_RIGHT","sectionType":"CONTINUOUS"}}},{"startIndex":1,"endIndex":6,"paragraph":{"elements":[{"startIndex":1,"endIndex":6,"textRun":{"content":"Haha\n","textStyle":{}}}],"paragraphStyle":{"headingId":"h.qbbjol1r1ss3","namedStyleType":"HEADING_1","direction":"LEFT_TO_RIGHT"}}},{"startIndex":6,"endIndex":11,"paragraph":{"elements":[{"startIndex":6,"endIndex":11,"textRun":{"content":"Hihi\n","textStyle":{}}}],"paragraphStyle":{"headingId":"h.x72dgzhnsyz4","namedStyleType":"HEADING_2","direction":"LEFT_TO_RIGHT"}}},{"startIndex":11,"endIndex":16,"paragraph":{"elements":[{"startIndex":11,"endIndex":16,"textRun":{"content":"huhu\n","textStyle":{}}}],"paragraphStyle":{"headingId":"h.5m6ts12x5b5o","namedStyleType":"HEADING_3","direction":"LEFT_TO_RIGHT"}}}]},"documentStyle":{"background":{"color":{}},"pageNumberStart":1,"marginTop":{"magnitude":72,"unit":"PT"},"marginBottom":{"magnitude":72,"unit":"PT"},"marginRight":{"magnitude":72,"unit":"PT"},"marginLeft":{"magnitude":72,"unit":"PT"},"pageSize":{"height":{"magnitude":792,"unit":"PT"},"width":{"magnitude":612,"unit":"PT"}},"marginHeader":{"magnitude":36,"unit":"PT"},"marginFooter":{"magnitude":36,"unit":"PT"},"useCustomHeaderFooterMargins":true},"namedStyles":{"styles":[{"namedStyleType":"NORMAL_TEXT","textStyle":{"bold":false,"italic":false,"underline":false,"strikethrough":false,"smallCaps":false,"backgroundColor":{},"foregroundColor":{"color":{"rgbColor":{}}},"fontSize":{"magnitude":11,"unit":"PT"},"weightedFontFamily":{"fontFamily":"Arial","weight":400},"baselineOffset":"NONE"},"paragraphStyle":{"namedStyleType":"NORMAL_TEXT","alignment":"START","lineSpacing":115,"direction":"LEFT_TO_RIGHT","spacingMode":"COLLAPSE_LISTS","spaceAbove":{"unit":"PT"},"spaceBelow":{"unit":"PT"},"borderBetween":{"color":{},"width":{"unit":"PT"},"padding":{"unit":"PT"},"dashStyle":"SOLID"},"borderTop":{"color":{},"width":{"unit":"PT"},"padding":{"unit":"PT"},"dashStyle":"SOLID"},"borderBottom":{"color":{},"width":{"unit":"PT"},"padding":{"unit":"PT"},"dashStyle":"SOLID"},"borderLeft":{"color":{},"width":{"unit":"PT"},"padding":{"unit":"PT"},"dashStyle":"SOLID"},"borderRight":{"color":{},"width":{"unit":"PT"},"padding":{"unit":"PT"},"dashStyle":"SOLID"},"indentFirstLine":{"unit":"PT"},"indentStart":{"unit":"PT"},"indentEnd":{"unit":"PT"},"keepLinesTogether":false,"keepWithNext":false,"avoidWidowAndOrphan":true,"shading":{"backgroundColor":{}}}},{"namedStyleType":"HEADING_1","textStyle":{"fontSize":{"magnitude":20,"unit":"PT"}},"paragraphStyle":{"namedStyleType":"NORMAL_TEXT","direction":"LEFT_TO_RIGHT","spaceAbove":{"magnitude":20,"unit":"PT"},"spaceBelow":{"magnitude":6,"unit":"PT"},"keepLinesTogether":true,"keepWithNext":true}},{"namedStyleType":"HEADING_2","textStyle":{"bold":false,"fontSize":{"magnitude":16,"unit":"PT"}},"paragraphStyle":{"namedStyleType":"NORMAL_TEXT","direction":"LEFT_TO_RIGHT","spaceAbove":{"magnitude":18,"unit":"PT"},"spaceBelow":{"magnitude":6,"unit":"PT"},"keepLinesTogether":true,"keepWithNext":true}},{"namedStyleType":"HEADING_3","textStyle":{"bold":false,"foregroundColor":{"color":{"rgbColor":{"red":0.2627451,"green":0.2627451,"blue":0.2627451}}},"fontSize":{"magnitude":14,"unit":"PT"}},"paragraphStyle":{"namedStyleType":"NORMAL_TEXT","direction":"LEFT_TO_RIGHT","spaceAbove":{"magnitude":16,"unit":"PT"},"spaceBelow":{"magnitude":4,"unit":"PT"},"keepLinesTogether":true,"keepWithNext":true}},{"namedStyleType":"HEADING_4","textStyle":{"foregroundColor":{"color":{"rgbColor":{"red":0.4,"green":0.4,"blue":0.4}}},"fontSize":{"magnitude":12,"unit":"PT"}},"paragraphStyle":{"namedStyleType":"NORMAL_TEXT","direction":"LEFT_TO_RIGHT","spaceAbove":{"magnitude":14,"unit":"PT"},"spaceBelow":{"magnitude":4,"unit":"PT"},"keepLinesTogether":true,"keepWithNext":true}},{"namedStyleType":"HEADING_5","textStyle":{"foregroundColor":{"color":{"rgbColor":{"red":0.4,"green":0.4,"blue":0.4}}},"fontSize":{"magnitude":11,"unit":"PT"}},"paragraphStyle":{"namedStyleType":"NORMAL_TEXT","direction":"LEFT_TO_RIGHT","spaceAbove":{"magnitude":12,"unit":"PT"},"spaceBelow":{"magnitude":4,"unit":"PT"},"keepLinesTogether":true,"keepWithNext":true}},{"namedStyleType":"HEADING_6","textStyle":{"italic":true,"foregroundColor":{"color":{"rgbColor":{"red":0.4,"green":0.4,"blue":0.4}}},"fontSize":{"magnitude":11,"unit":"PT"}},"paragraphStyle":{"namedStyleType":"NORMAL_TEXT","direction":"LEFT_TO_RIGHT","spaceAbove":{"magnitude":12,"unit":"PT"},"spaceBelow":{"magnitude":4,"unit":"PT"},"keepLinesTogether":true,"keepWithNext":true}},{"namedStyleType":"TITLE","textStyle":{"fontSize":{"magnitude":26,"unit":"PT"}},"paragraphStyle":{"namedStyleType":"NORMAL_TEXT","direction":"LEFT_TO_RIGHT","spaceAbove":{"unit":"PT"},"spaceBelow":{"magnitude":3,"unit":"PT"},"keepLinesTogether":true,"keepWithNext":true}},{"namedStyleType":"SUBTITLE","textStyle":{"italic":false,"foregroundColor":{"color":{"rgbColor":{"red":0.4,"green":0.4,"blue":0.4}}},"fontSize":{"magnitude":15,"unit":"PT"},"weightedFontFamily":{"fontFamily":"Arial","weight":400}},"paragraphStyle":{"namedStyleType":"NORMAL_TEXT","direction":"LEFT_TO_RIGHT","spaceAbove":{"unit":"PT"},"spaceBelow":{"magnitude":16,"unit":"PT"},"keepLinesTogether":true,"keepWithNext":true}}]},"lists":{"kix.cqlncuxpuhb9":{"listProperties":{"nestingLevels":[{"bulletAlignment":"START","glyphType":"DECIMAL","glyphFormat":"%0.","indentFirstLine":{"magnitude":18,"unit":"PT"},"indentStart":{"magnitude":36,"unit":"PT"},"textStyle":{"underline":false},"startNumber":1},{"bulletAlignment":"START","glyphType":"ALPHA","glyphFormat":"%1.","indentFirstLine":{"magnitude":54,"unit":"PT"},"indentStart":{"magnitude":72,"unit":"PT"},"textStyle":{"underline":false},"startNumber":1},{"bulletAlignment":"END","glyphType":"ROMAN","glyphFormat":"%2.","indentFirstLine":{"magnitude":90,"unit":"PT"},"indentStart":{"magnitude":108,"unit":"PT"},"textStyle":{"underline":false},"startNumber":1},{"bulletAlignment":"START","glyphType":"DECIMAL","glyphFormat":"%3.","indentFirstLine":{"magnitude":126,"unit":"PT"},"indentStart":{"magnitude":144,"unit":"PT"},"textStyle":{"underline":false},"startNumber":1},{"bulletAlignment":"START","glyphType":"ALPHA","glyphFormat":"%4.","indentFirstLine":{"magnitude":162,"unit":"PT"},"indentStart":{"magnitude":180,"unit":"PT"},"textStyle":{"underline":false},"startNumber":1},{"bulletAlignment":"END","glyphType":"ROMAN","glyphFormat":"%5.","indentFirstLine":{"magnitude":198,"unit":"PT"},"indentStart":{"magnitude":216,"unit":"PT"},"textStyle":{"underline":false},"startNumber":1},{"bulletAlignment":"START","glyphType":"DECIMAL","glyphFormat":"%6.","indentFirstLine":{"magnitude":234,"unit":"PT"},"indentStart":{"magnitude":252,"unit":"PT"},"textStyle":{"underline":false},"startNumber":1},{"bulletAlignment":"START","glyphType":"ALPHA","glyphFormat":"%7.","indentFirstLine":{"magnitude":270,"unit":"PT"},"indentStart":{"magnitude":288,"unit":"PT"},"textStyle":{"underline":false},"startNumber":1},{"bulletAlignment":"END","glyphType":"ROMAN","glyphFormat":"%8.","indentFirstLine":{"magnitude":306,"unit":"PT"},"indentStart":{"magnitude":324,"unit":"PT"},"textStyle":{"underline":false},"startNumber":1}]}}},"suggestionsViewMode":"PREVIEW_WITHOUT_SUGGESTIONS","documentId":"12rbiv-1ozz9maXRTYG-iYf41A5Goyul5TjyNIeHCpKI"}};
