import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { GoogleDocsToHTML } from "../../src/GoogleDocsToHTML/GoogleDocsToHTML";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GoogleDocsToHTML> = (args) => {
  var docJson = {
    "body": {
        "content": [
            {
                "endIndex": 1, 
                "sectionBreak": {
                    "sectionStyle": {
                        "columnSeparatorStyle": "NONE", 
                        "contentDirection": "LEFT_TO_RIGHT"
                    }
                }
            }, 
            {
                "endIndex": 75, 
                "paragraph": {
                    "elements": [
                        {
                            "endIndex": 75, 
                            "startIndex": 1, 
                            "textRun": {
                                "content": "This is an ordinary paragraph. It is the first paragraph of the document.\n", 
                                "textStyle": {}
                            }
                        }
                    ], 
                    "paragraphStyle": {
                        "direction": "LEFT_TO_RIGHT", 
                        "namedStyleType": "NORMAL_TEXT"
                    }
                }, 
                "startIndex": 1
            }, 
            {
                "endIndex": 102, 
                "paragraph": {
                    "elements": [
                        {
                            "endIndex": 102, 
                            "startIndex": 75, 
                            "textRun": {
                                "content": "Here\u2019s a level one heading\n", 
                                "textStyle": {}
                            }
                        }
                    ], 
                    "paragraphStyle": {
                        "direction": "LEFT_TO_RIGHT", 
                        "headingId": "h.o1fkftgl5zwf", 
                        "namedStyleType": "HEADING_1"
                    }
                }, 
                "startIndex": 75
            }, 
            {
                "endIndex": 219, 
                "paragraph": {
                    "elements": [
                        {
                            "endIndex": 171, 
                            "startIndex": 102, 
                            "textRun": {
                                "content": "This is another paragraph. Formatting within this paragraph includes ", 
                                "textStyle": {}
                            }
                        }, 
                        {
                            "endIndex": 190, 
                            "startIndex": 171, 
                            "textRun": {
                                "content": "these words in bold", 
                                "textStyle": {
                                    "bold": true
                                }
                            }
                        }, 
                        {
                            "endIndex": 195, 
                            "startIndex": 190, 
                            "textRun": {
                                "content": " and ", 
                                "textStyle": {}
                            }
                        }, 
                        {
                            "endIndex": 217, 
                            "startIndex": 195, 
                            "textRun": {
                                "content": "these words in italics", 
                                "textStyle": {
                                    "italic": true
                                }
                            }
                        }, 
                        {
                            "endIndex": 219, 
                            "startIndex": 217, 
                            "textRun": {
                                "content": ".\n", 
                                "textStyle": {}
                            }
                        }
                    ], 
                    "paragraphStyle": {
                        "direction": "LEFT_TO_RIGHT", 
                        "namedStyleType": "NORMAL_TEXT"
                    }
                }, 
                "startIndex": 102
            }, 
            {
                "endIndex": 248, 
                "paragraph": {
                    "bullet": {
                        "listId": "kix.717rkbf3o6mp", 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    "elements": [
                        {
                            "endIndex": 248, 
                            "startIndex": 219, 
                            "textRun": {
                                "content": "This is a bulleted list item\n", 
                                "textStyle": {}
                            }
                        }
                    ], 
                    "paragraphStyle": {
                        "direction": "LEFT_TO_RIGHT", 
                        "indentFirstLine": {
                            "magnitude": 18, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 36, 
                            "unit": "PT"
                        }, 
                        "namedStyleType": "NORMAL_TEXT"
                    }
                }, 
                "startIndex": 219
            }, 
            {
                "endIndex": 308, 
                "paragraph": {
                    "bullet": {
                        "listId": "kix.717rkbf3o6mp", 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    "elements": [
                        {
                            "endIndex": 308, 
                            "startIndex": 248, 
                            "textRun": {
                                "content": "And this is another one, which has a numbered list under it\n", 
                                "textStyle": {}
                            }
                        }
                    ], 
                    "paragraphStyle": {
                        "direction": "LEFT_TO_RIGHT", 
                        "indentFirstLine": {
                            "magnitude": 18, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 36, 
                            "unit": "PT"
                        }, 
                        "namedStyleType": "NORMAL_TEXT"
                    }
                }, 
                "startIndex": 248
            }, 
            {
                "endIndex": 346, 
                "paragraph": {
                    "bullet": {
                        "listId": "kix.717rkbf3o6mp", 
                        "nestingLevel": 1, 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    "elements": [
                        {
                            "endIndex": 346, 
                            "startIndex": 308, 
                            "textRun": {
                                "content": "This is the first numbered list item.\n", 
                                "textStyle": {}
                            }
                        }
                    ], 
                    "paragraphStyle": {
                        "direction": "LEFT_TO_RIGHT", 
                        "indentFirstLine": {
                            "magnitude": 54, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 72, 
                            "unit": "PT"
                        }, 
                        "namedStyleType": "NORMAL_TEXT"
                    }
                }, 
                "startIndex": 308
            }, 
            {
                "endIndex": 385, 
                "paragraph": {
                    "bullet": {
                        "listId": "kix.717rkbf3o6mp", 
                        "nestingLevel": 1, 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    "elements": [
                        {
                            "endIndex": 385, 
                            "startIndex": 346, 
                            "textRun": {
                                "content": "This is the second numbered list item.\n", 
                                "textStyle": {}
                            }
                        }
                    ], 
                    "paragraphStyle": {
                        "direction": "LEFT_TO_RIGHT", 
                        "indentFirstLine": {
                            "magnitude": 54, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 72, 
                            "unit": "PT"
                        }, 
                        "namedStyleType": "NORMAL_TEXT"
                    }
                }, 
                "startIndex": 346
            }, 
            {
                "endIndex": 460, 
                "paragraph": {
                    "bullet": {
                        "listId": "kix.717rkbf3o6mp", 
                        "nestingLevel": 1, 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    "elements": [
                        {
                            "endIndex": 433, 
                            "startIndex": 385, 
                            "textRun": {
                                "content": "This is the third numbered list item, which has ", 
                                "textStyle": {}
                            }
                        }, 
                        {
                            "endIndex": 450, 
                            "startIndex": 433, 
                            "textRun": {
                                "content": "these three words", 
                                "textStyle": {
                                    "bold": true
                                }
                            }
                        }, 
                        {
                            "endIndex": 460, 
                            "startIndex": 450, 
                            "textRun": {
                                "content": " in bold.\n", 
                                "textStyle": {}
                            }
                        }
                    ], 
                    "paragraphStyle": {
                        "direction": "LEFT_TO_RIGHT", 
                        "indentFirstLine": {
                            "magnitude": 54, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 72, 
                            "unit": "PT"
                        }, 
                        "namedStyleType": "NORMAL_TEXT"
                    }
                }, 
                "startIndex": 385
            }, 
            {
                "endIndex": 496, 
                "paragraph": {
                    "bullet": {
                        "listId": "kix.717rkbf3o6mp", 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    "elements": [
                        {
                            "endIndex": 496, 
                            "startIndex": 460, 
                            "textRun": {
                                "content": "And a final list item with a bullet\n", 
                                "textStyle": {}
                            }
                        }
                    ], 
                    "paragraphStyle": {
                        "direction": "LEFT_TO_RIGHT", 
                        "indentFirstLine": {
                            "magnitude": 18, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 36, 
                            "unit": "PT"
                        }, 
                        "namedStyleType": "NORMAL_TEXT"
                    }
                }, 
                "startIndex": 460
            }, 
            {
                "endIndex": 497, 
                "paragraph": {
                    "elements": [
                        {
                            "endIndex": 497, 
                            "startIndex": 496, 
                            "textRun": {
                                "content": "\n", 
                                "textStyle": {}
                            }
                        }
                    ], 
                    "paragraphStyle": {
                        "direction": "LEFT_TO_RIGHT", 
                        "namedStyleType": "NORMAL_TEXT"
                    }
                }, 
                "startIndex": 496
            }, 
            {
                "endIndex": 565, 
                "startIndex": 497, 
                "table": {
                    "columns": 2, 
                    "rows": 2, 
                    "tableRows": [
                        {
                            "endIndex": 531, 
                            "startIndex": 498, 
                            "tableCells": [
                                {
                                    "content": [
                                        {
                                            "endIndex": 515, 
                                            "paragraph": {
                                                "elements": [
                                                    {
                                                        "endIndex": 515, 
                                                        "startIndex": 500, 
                                                        "textRun": {
                                                            "content": "Northwest cell\n", 
                                                            "textStyle": {}
                                                        }
                                                    }
                                                ], 
                                                "paragraphStyle": {
                                                    "alignment": "START", 
                                                    "avoidWidowAndOrphan": false, 
                                                    "borderBetween": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderBottom": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderLeft": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderRight": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderTop": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "direction": "LEFT_TO_RIGHT", 
                                                    "indentEnd": {
                                                        "unit": "PT"
                                                    }, 
                                                    "indentFirstLine": {
                                                        "unit": "PT"
                                                    }, 
                                                    "indentStart": {
                                                        "unit": "PT"
                                                    }, 
                                                    "keepLinesTogether": false, 
                                                    "keepWithNext": false, 
                                                    "lineSpacing": 100, 
                                                    "namedStyleType": "NORMAL_TEXT", 
                                                    "shading": {
                                                        "backgroundColor": {}
                                                    }, 
                                                    "spaceAbove": {
                                                        "unit": "PT"
                                                    }, 
                                                    "spaceBelow": {
                                                        "unit": "PT"
                                                    }, 
                                                    "spacingMode": "COLLAPSE_LISTS"
                                                }
                                            }, 
                                            "startIndex": 500
                                        }
                                    ], 
                                    "endIndex": 515, 
                                    "startIndex": 499, 
                                    "tableCellStyle": {
                                        "backgroundColor": {}, 
                                        "columnSpan": 1, 
                                        "contentAlignment": "TOP", 
                                        "paddingBottom": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "paddingLeft": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "paddingRight": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "paddingTop": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "rowSpan": 1
                                    }
                                }, 
                                {
                                    "content": [
                                        {
                                            "endIndex": 531, 
                                            "paragraph": {
                                                "elements": [
                                                    {
                                                        "endIndex": 531, 
                                                        "startIndex": 516, 
                                                        "textRun": {
                                                            "content": "Northeast cell\n", 
                                                            "textStyle": {}
                                                        }
                                                    }
                                                ], 
                                                "paragraphStyle": {
                                                    "alignment": "START", 
                                                    "avoidWidowAndOrphan": false, 
                                                    "borderBetween": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderBottom": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderLeft": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderRight": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderTop": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "direction": "LEFT_TO_RIGHT", 
                                                    "indentEnd": {
                                                        "unit": "PT"
                                                    }, 
                                                    "indentFirstLine": {
                                                        "unit": "PT"
                                                    }, 
                                                    "indentStart": {
                                                        "unit": "PT"
                                                    }, 
                                                    "keepLinesTogether": false, 
                                                    "keepWithNext": false, 
                                                    "lineSpacing": 100, 
                                                    "namedStyleType": "NORMAL_TEXT", 
                                                    "shading": {
                                                        "backgroundColor": {}
                                                    }, 
                                                    "spaceAbove": {
                                                        "unit": "PT"
                                                    }, 
                                                    "spaceBelow": {
                                                        "unit": "PT"
                                                    }, 
                                                    "spacingMode": "COLLAPSE_LISTS"
                                                }
                                            }, 
                                            "startIndex": 516
                                        }
                                    ], 
                                    "endIndex": 531, 
                                    "startIndex": 515, 
                                    "tableCellStyle": {
                                        "backgroundColor": {}, 
                                        "columnSpan": 1, 
                                        "contentAlignment": "TOP", 
                                        "paddingBottom": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "paddingLeft": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "paddingRight": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "paddingTop": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "rowSpan": 1
                                    }
                                }
                            ], 
                            "tableRowStyle": {
                                "minRowHeight": {
                                    "unit": "PT"
                                }
                            }
                        }, 
                        {
                            "endIndex": 564, 
                            "startIndex": 531, 
                            "tableCells": [
                                {
                                    "content": [
                                        {
                                            "endIndex": 548, 
                                            "paragraph": {
                                                "elements": [
                                                    {
                                                        "endIndex": 548, 
                                                        "startIndex": 533, 
                                                        "textRun": {
                                                            "content": "Southwest cell\n", 
                                                            "textStyle": {}
                                                        }
                                                    }
                                                ], 
                                                "paragraphStyle": {
                                                    "alignment": "START", 
                                                    "avoidWidowAndOrphan": false, 
                                                    "borderBetween": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderBottom": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderLeft": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderRight": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderTop": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "direction": "LEFT_TO_RIGHT", 
                                                    "indentEnd": {
                                                        "unit": "PT"
                                                    }, 
                                                    "indentFirstLine": {
                                                        "unit": "PT"
                                                    }, 
                                                    "indentStart": {
                                                        "unit": "PT"
                                                    }, 
                                                    "keepLinesTogether": false, 
                                                    "keepWithNext": false, 
                                                    "lineSpacing": 100, 
                                                    "namedStyleType": "NORMAL_TEXT", 
                                                    "shading": {
                                                        "backgroundColor": {}
                                                    }, 
                                                    "spaceAbove": {
                                                        "unit": "PT"
                                                    }, 
                                                    "spaceBelow": {
                                                        "unit": "PT"
                                                    }, 
                                                    "spacingMode": "COLLAPSE_LISTS"
                                                }
                                            }, 
                                            "startIndex": 533
                                        }
                                    ], 
                                    "endIndex": 548, 
                                    "startIndex": 532, 
                                    "tableCellStyle": {
                                        "backgroundColor": {}, 
                                        "columnSpan": 1, 
                                        "contentAlignment": "TOP", 
                                        "paddingBottom": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "paddingLeft": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "paddingRight": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "paddingTop": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "rowSpan": 1
                                    }
                                }, 
                                {
                                    "content": [
                                        {
                                            "endIndex": 564, 
                                            "paragraph": {
                                                "elements": [
                                                    {
                                                        "endIndex": 564, 
                                                        "startIndex": 549, 
                                                        "textRun": {
                                                            "content": "Southeast cell\n", 
                                                            "textStyle": {}
                                                        }
                                                    }
                                                ], 
                                                "paragraphStyle": {
                                                    "alignment": "START", 
                                                    "avoidWidowAndOrphan": false, 
                                                    "borderBetween": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderBottom": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderLeft": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderRight": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "borderTop": {
                                                        "color": {}, 
                                                        "dashStyle": "SOLID", 
                                                        "lineStyle": "SOLID", 
                                                        "padding": {
                                                            "unit": "PT"
                                                        }, 
                                                        "width": {
                                                            "unit": "PT"
                                                        }
                                                    }, 
                                                    "direction": "LEFT_TO_RIGHT", 
                                                    "indentEnd": {
                                                        "unit": "PT"
                                                    }, 
                                                    "indentFirstLine": {
                                                        "unit": "PT"
                                                    }, 
                                                    "indentStart": {
                                                        "unit": "PT"
                                                    }, 
                                                    "keepLinesTogether": false, 
                                                    "keepWithNext": false, 
                                                    "lineSpacing": 100, 
                                                    "namedStyleType": "NORMAL_TEXT", 
                                                    "shading": {
                                                        "backgroundColor": {}
                                                    }, 
                                                    "spaceAbove": {
                                                        "unit": "PT"
                                                    }, 
                                                    "spaceBelow": {
                                                        "unit": "PT"
                                                    }, 
                                                    "spacingMode": "COLLAPSE_LISTS"
                                                }
                                            }, 
                                            "startIndex": 549
                                        }
                                    ], 
                                    "endIndex": 564, 
                                    "startIndex": 548, 
                                    "tableCellStyle": {
                                        "backgroundColor": {}, 
                                        "columnSpan": 1, 
                                        "contentAlignment": "TOP", 
                                        "paddingBottom": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "paddingLeft": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "paddingRight": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "paddingTop": {
                                            "magnitude": 5, 
                                            "unit": "PT"
                                        }, 
                                        "rowSpan": 1
                                    }
                                }
                            ], 
                            "tableRowStyle": {
                                "minRowHeight": {
                                    "unit": "PT"
                                }
                            }
                        }
                    ]
                }
            }, 
            {
                "endIndex": 566, 
                "paragraph": {
                    "elements": [
                        {
                            "endIndex": 566, 
                            "startIndex": 565, 
                            "textRun": {
                                "content": "\n", 
                                "textStyle": {}
                            }
                        }
                    ], 
                    "paragraphStyle": {
                        "direction": "LEFT_TO_RIGHT", 
                        "namedStyleType": "NORMAL_TEXT"
                    }
                }, 
                "startIndex": 565
            }, 
            {
                "endIndex": 590, 
                "paragraph": {
                    "elements": [
                        {
                            "endIndex": 590, 
                            "startIndex": 566, 
                            "textRun": {
                                "content": "And a level two heading\n", 
                                "textStyle": {}
                            }
                        }
                    ], 
                    "paragraphStyle": {
                        "direction": "LEFT_TO_RIGHT", 
                        "headingId": "h.aq14w5o48s82", 
                        "namedStyleType": "HEADING_2"
                    }
                }, 
                "startIndex": 566
            }, 
            {
                "endIndex": 650, 
                "paragraph": {
                    "elements": [
                        {
                            "endIndex": 650, 
                            "startIndex": 590, 
                            "textRun": {
                                "content": "And this is a paragraph that follows the level two heading.\n", 
                                "textStyle": {}
                            }
                        }
                    ], 
                    "paragraphStyle": {
                        "direction": "LEFT_TO_RIGHT", 
                        "namedStyleType": "NORMAL_TEXT"
                    }
                }, 
                "startIndex": 590
            }
        ]
    }, 
    "documentId": "18AI89WMd4eI6TFI4VrbmD_srVWJYH2avsXpC_amtLZs", 
    "documentStyle": {
        "background": {
            "color": {}
        }, 
        "marginBottom": {
            "magnitude": 72, 
            "unit": "PT"
        }, 
        "marginLeft": {
            "magnitude": 72, 
            "unit": "PT"
        }, 
        "marginRight": {
            "magnitude": 72, 
            "unit": "PT"
        }, 
        "marginTop": {
            "magnitude": 72, 
            "unit": "PT"
        }, 
        "pageNumberStart": 1, 
        "pageSize": {
            "height": {
                "magnitude": 792, 
                "unit": "PT"
            }, 
            "width": {
                "magnitude": 612, 
                "unit": "PT"
            }
        }
    }, 
    "lists": {
        "kix.717rkbf3o6mp": {
            "listProperties": {
                "nestingLevels": [
                    {
                        "bulletAlignment": "START", 
                        "glyphFormat": "%0", 
                        "glyphSymbol": "\u25cf", 
                        "indentFirstLine": {
                            "magnitude": 18, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 36, 
                            "unit": "PT"
                        }, 
                        "startNumber": 1, 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    {
                        "bulletAlignment": "START", 
                        "glyphFormat": "%1.", 
                        "glyphType": "ALPHA", 
                        "indentFirstLine": {
                            "magnitude": 54, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 72, 
                            "unit": "PT"
                        }, 
                        "startNumber": 1, 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    {
                        "bulletAlignment": "START", 
                        "glyphFormat": "%2", 
                        "glyphSymbol": "\u25a0", 
                        "indentFirstLine": {
                            "magnitude": 90, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 108, 
                            "unit": "PT"
                        }, 
                        "startNumber": 1, 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    {
                        "bulletAlignment": "START", 
                        "glyphFormat": "%3", 
                        "glyphSymbol": "\u25cf", 
                        "indentFirstLine": {
                            "magnitude": 126, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 144, 
                            "unit": "PT"
                        }, 
                        "startNumber": 1, 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    {
                        "bulletAlignment": "START", 
                        "glyphFormat": "%4", 
                        "glyphSymbol": "\u25cb", 
                        "indentFirstLine": {
                            "magnitude": 162, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 180, 
                            "unit": "PT"
                        }, 
                        "startNumber": 1, 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    {
                        "bulletAlignment": "START", 
                        "glyphFormat": "%5", 
                        "glyphSymbol": "\u25a0", 
                        "indentFirstLine": {
                            "magnitude": 198, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 216, 
                            "unit": "PT"
                        }, 
                        "startNumber": 1, 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    {
                        "bulletAlignment": "START", 
                        "glyphFormat": "%6", 
                        "glyphSymbol": "\u25cf", 
                        "indentFirstLine": {
                            "magnitude": 234, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 252, 
                            "unit": "PT"
                        }, 
                        "startNumber": 1, 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    {
                        "bulletAlignment": "START", 
                        "glyphFormat": "%7", 
                        "glyphSymbol": "\u25cb", 
                        "indentFirstLine": {
                            "magnitude": 270, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 288, 
                            "unit": "PT"
                        }, 
                        "startNumber": 1, 
                        "textStyle": {
                            "underline": false
                        }
                    }, 
                    {
                        "bulletAlignment": "START", 
                        "glyphFormat": "%8", 
                        "glyphSymbol": "\u25a0", 
                        "indentFirstLine": {
                            "magnitude": 306, 
                            "unit": "PT"
                        }, 
                        "indentStart": {
                            "magnitude": 324, 
                            "unit": "PT"
                        }, 
                        "startNumber": 1, 
                        "textStyle": {
                            "underline": false
                        }
                    }
                ]
            }
        }
    }, 
    "namedStyles": {
        "styles": [
            {
                "namedStyleType": "NORMAL_TEXT", 
                "paragraphStyle": {
                    "alignment": "START", 
                    "avoidWidowAndOrphan": true, 
                    "borderBetween": {
                        "color": {}, 
                        "dashStyle": "SOLID", 
                        "lineStyle": "SOLID", 
                        "padding": {
                            "unit": "PT"
                        }, 
                        "width": {
                            "unit": "PT"
                        }
                    }, 
                    "borderBottom": {
                        "color": {}, 
                        "dashStyle": "SOLID", 
                        "lineStyle": "SOLID", 
                        "padding": {
                            "unit": "PT"
                        }, 
                        "width": {
                            "unit": "PT"
                        }
                    }, 
                    "borderLeft": {
                        "color": {}, 
                        "dashStyle": "SOLID", 
                        "lineStyle": "SOLID", 
                        "padding": {
                            "unit": "PT"
                        }, 
                        "width": {
                            "unit": "PT"
                        }
                    }, 
                    "borderRight": {
                        "color": {}, 
                        "dashStyle": "SOLID", 
                        "lineStyle": "SOLID", 
                        "padding": {
                            "unit": "PT"
                        }, 
                        "width": {
                            "unit": "PT"
                        }
                    }, 
                    "borderTop": {
                        "color": {}, 
                        "dashStyle": "SOLID", 
                        "lineStyle": "SOLID", 
                        "padding": {
                            "unit": "PT"
                        }, 
                        "width": {
                            "unit": "PT"
                        }
                    }, 
                    "direction": "LEFT_TO_RIGHT", 
                    "indentEnd": {
                        "unit": "PT"
                    }, 
                    "indentFirstLine": {
                        "unit": "PT"
                    }, 
                    "indentStart": {
                        "unit": "PT"
                    }, 
                    "keepLinesTogether": false, 
                    "keepWithNext": false, 
                    "lineSpacing": 115, 
                    "namedStyleType": "NORMAL_TEXT", 
                    "shading": {
                        "backgroundColor": {}
                    }, 
                    "spaceAbove": {
                        "unit": "PT"
                    }, 
                    "spaceBelow": {
                        "unit": "PT"
                    }, 
                    "spacingMode": "COLLAPSE_LISTS"
                }, 
                "textStyle": {
                    "backgroundColor": {}, 
                    "baselineOffset": "NONE", 
                    "bold": false, 
                    "fontSize": {
                        "magnitude": 11, 
                        "unit": "PT"
                    }, 
                    "foregroundColor": {
                        "color": {
                            "rgbColor": {}
                        }
                    }, 
                    "italic": false, 
                    "smallCaps": false, 
                    "strikethrough": false, 
                    "underline": false, 
                    "weightedFontFamily": {
                        "fontFamily": "Arial", 
                        "weight": 400
                    }
                }
            }, 
            {
                "namedStyleType": "HEADING_1", 
                "paragraphStyle": {
                    "direction": "LEFT_TO_RIGHT", 
                    "keepLinesTogether": true, 
                    "keepWithNext": true, 
                    "namedStyleType": "NORMAL_TEXT", 
                    "spaceAbove": {
                        "magnitude": 20, 
                        "unit": "PT"
                    }, 
                    "spaceBelow": {
                        "magnitude": 6, 
                        "unit": "PT"
                    }
                }, 
                "textStyle": {
                    "fontSize": {
                        "magnitude": 20, 
                        "unit": "PT"
                    }
                }
            }, 
            {
                "namedStyleType": "HEADING_2", 
                "paragraphStyle": {
                    "direction": "LEFT_TO_RIGHT", 
                    "keepLinesTogether": true, 
                    "keepWithNext": true, 
                    "namedStyleType": "NORMAL_TEXT", 
                    "spaceAbove": {
                        "magnitude": 18, 
                        "unit": "PT"
                    }, 
                    "spaceBelow": {
                        "magnitude": 6, 
                        "unit": "PT"
                    }
                }, 
                "textStyle": {
                    "bold": false, 
                    "fontSize": {
                        "magnitude": 16, 
                        "unit": "PT"
                    }
                }
            }, 
            {
                "namedStyleType": "HEADING_3", 
                "paragraphStyle": {
                    "direction": "LEFT_TO_RIGHT", 
                    "keepLinesTogether": true, 
                    "keepWithNext": true, 
                    "namedStyleType": "NORMAL_TEXT", 
                    "spaceAbove": {
                        "magnitude": 16, 
                        "unit": "PT"
                    }, 
                    "spaceBelow": {
                        "magnitude": 4, 
                        "unit": "PT"
                    }
                }, 
                "textStyle": {
                    "bold": false, 
                    "fontSize": {
                        "magnitude": 14, 
                        "unit": "PT"
                    }, 
                    "foregroundColor": {
                        "color": {
                            "rgbColor": {
                                "blue": 0.2627451, 
                                "green": 0.2627451, 
                                "red": 0.2627451
                            }
                        }
                    }
                }
            }, 
            {
                "namedStyleType": "HEADING_4", 
                "paragraphStyle": {
                    "direction": "LEFT_TO_RIGHT", 
                    "keepLinesTogether": true, 
                    "keepWithNext": true, 
                    "namedStyleType": "NORMAL_TEXT", 
                    "spaceAbove": {
                        "magnitude": 14, 
                        "unit": "PT"
                    }, 
                    "spaceBelow": {
                        "magnitude": 4, 
                        "unit": "PT"
                    }
                }, 
                "textStyle": {
                    "fontSize": {
                        "magnitude": 12, 
                        "unit": "PT"
                    }, 
                    "foregroundColor": {
                        "color": {
                            "rgbColor": {
                                "blue": 0.4, 
                                "green": 0.4, 
                                "red": 0.4
                            }
                        }
                    }
                }
            }, 
            {
                "namedStyleType": "HEADING_5", 
                "paragraphStyle": {
                    "direction": "LEFT_TO_RIGHT", 
                    "keepLinesTogether": true, 
                    "keepWithNext": true, 
                    "namedStyleType": "NORMAL_TEXT", 
                    "spaceAbove": {
                        "magnitude": 12, 
                        "unit": "PT"
                    }, 
                    "spaceBelow": {
                        "magnitude": 4, 
                        "unit": "PT"
                    }
                }, 
                "textStyle": {
                    "fontSize": {
                        "magnitude": 11, 
                        "unit": "PT"
                    }, 
                    "foregroundColor": {
                        "color": {
                            "rgbColor": {
                                "blue": 0.4, 
                                "green": 0.4, 
                                "red": 0.4
                            }
                        }
                    }
                }
            }, 
            {
                "namedStyleType": "HEADING_6", 
                "paragraphStyle": {
                    "direction": "LEFT_TO_RIGHT", 
                    "keepLinesTogether": true, 
                    "keepWithNext": true, 
                    "namedStyleType": "NORMAL_TEXT", 
                    "spaceAbove": {
                        "magnitude": 12, 
                        "unit": "PT"
                    }, 
                    "spaceBelow": {
                        "magnitude": 4, 
                        "unit": "PT"
                    }
                }, 
                "textStyle": {
                    "fontSize": {
                        "magnitude": 11, 
                        "unit": "PT"
                    }, 
                    "foregroundColor": {
                        "color": {
                            "rgbColor": {
                                "blue": 0.4, 
                                "green": 0.4, 
                                "red": 0.4
                            }
                        }
                    }, 
                    "italic": true
                }
            }, 
            {
                "namedStyleType": "TITLE", 
                "paragraphStyle": {
                    "direction": "LEFT_TO_RIGHT", 
                    "keepLinesTogether": true, 
                    "keepWithNext": true, 
                    "namedStyleType": "NORMAL_TEXT", 
                    "spaceAbove": {
                        "unit": "PT"
                    }, 
                    "spaceBelow": {
                        "magnitude": 3, 
                        "unit": "PT"
                    }
                }, 
                "textStyle": {
                    "fontSize": {
                        "magnitude": 26, 
                        "unit": "PT"
                    }
                }
            }, 
            {
                "namedStyleType": "SUBTITLE", 
                "paragraphStyle": {
                    "direction": "LEFT_TO_RIGHT", 
                    "keepLinesTogether": true, 
                    "keepWithNext": true, 
                    "namedStyleType": "NORMAL_TEXT", 
                    "spaceAbove": {
                        "unit": "PT"
                    }, 
                    "spaceBelow": {
                        "magnitude": 16, 
                        "unit": "PT"
                    }
                }, 
                "textStyle": {
                    "fontSize": {
                        "magnitude": 15, 
                        "unit": "PT"
                    }, 
                    "foregroundColor": {
                        "color": {
                            "rgbColor": {
                                "blue": 0.4, 
                                "green": 0.4, 
                                "red": 0.4
                            }
                        }
                    }, 
                    "italic": false, 
                    "weightedFontFamily": {
                        "fontFamily": "Arial", 
                        "weight": 400
                    }
                }
            }
        ]
    }, 
    "revisionId": "np_INheZiecEMA", 
    "suggestionsViewMode": "SUGGESTIONS_INLINE", 
    "title": "Test mule"
};
  return (
    <>
      <GoogleDocsToHTML doc={docJson} />
    </>
  );
};

export const StaticJson = Template.bind({});
