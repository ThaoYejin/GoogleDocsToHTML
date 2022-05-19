import React from 'react';
import renderer from 'react-test-renderer';
import { Table } from "./Table";
import * as OneCell from './OneCell.json';
import * as OneRow from './OneRow.json';
import * as OneColumn from './OneColumn.json';
import * as TableDoc from './Table.json';

it("Table with one cell and style runs correctly", ()=>{
    var table = {
        "rows": 1,
        "columns": 1,
        "tableRows": [
          {
            "startIndex": 3,
            "endIndex": 12,
            "tableCells": [
              {
                "startIndex": 4,
                "endIndex": 12,
                "content": [
                  {
                    "startIndex": 5,
                    "endIndex": 12,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 5,
                          "endIndex": 12,
                          "textRun": {
                            "content": "Item 1\n",
                            "textStyle": {
                              "fontSize": {
                                "magnitude": 12,
                                "unit": "PT"
                              }
                            }
                          }
                        }
                      ],
                      "paragraphStyle": {
                        "namedStyleType": "NORMAL_TEXT",
                        "alignment": "START",
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "spacingMode": "COLLAPSE_LISTS",
                        "spaceAbove": {
                          "unit": "PT"
                        },
                        "spaceBelow": {
                          "unit": "PT"
                        },
                        "borderBetween": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderTop": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderBottom": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderLeft": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderRight": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "indentFirstLine": {
                          "unit": "PT"
                        },
                        "indentStart": {
                          "unit": "PT"
                        },
                        "indentEnd": {
                          "unit": "PT"
                        },
                        "keepLinesTogether": false,
                        "keepWithNext": false,
                        "avoidWidowAndOrphan": false,
                        "shading": {
                          "backgroundColor": {}
                        },
                        "pageBreakBefore": false
                      }
                    }
                  }
                ],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {},
                  "borderLeft": {
                    "color": {
                      "color": {
                        "rgbColor": {}
                      }
                    },
                    "width": {
                      "magnitude": 3,
                      "unit": "PT"
                    },
                    "dashStyle": "SOLID"
                  },
                  "borderRight": {
                    "color": {
                      "color": {
                        "rgbColor": {}
                      }
                    },
                    "width": {
                      "magnitude": 1,
                      "unit": "PT"
                    },
                    "dashStyle": "DASH"
                  },
                  "borderTop": {
                    "color": {
                      "color": {
                        "rgbColor": {
                          "red": 1
                        }
                      }
                    },
                    "width": {
                      "magnitude": 1,
                      "unit": "PT"
                    },
                    "dashStyle": "SOLID"
                  },
                  "borderBottom": {
                    "color": {
                      "color": {
                        "rgbColor": {
                          "green": 1
                        }
                      }
                    },
                    "width": {
                      "magnitude": 4.5,
                      "unit": "PT"
                    },
                    "dashStyle": "SOLID"
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
                  "paddingBottom": {
                    "magnitude": 5,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
                }
              }
            ],
            "tableRowStyle": {
              "minRowHeight": {
                "unit": "PT"
              }
            }
          }
        ],
        "tableStyle": {
          "tableColumnProperties": [
            {
              "widthType": "EVENLY_DISTRIBUTED"
            }
          ]
        }
      };
      const tree = renderer
        .create(<Table table={table} doc={OneCell} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it("Table with one row runs correctly", ()=>{
    var table = {
        "rows": 1,
        "columns": 3,
        "tableRows": [
          {
            "startIndex": 3,
            "endIndex": 28,
            "tableCells": [
              {
                "startIndex": 4,
                "endIndex": 12,
                "content": [
                  {
                    "startIndex": 5,
                    "endIndex": 12,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 5,
                          "endIndex": 12,
                          "textRun": {
                            "content": "Item 1\n",
                            "textStyle": {
                              "fontSize": {
                                "magnitude": 12,
                                "unit": "PT"
                              }
                            }
                          }
                        }
                      ],
                      "paragraphStyle": {
                        "namedStyleType": "NORMAL_TEXT",
                        "alignment": "START",
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "spacingMode": "COLLAPSE_LISTS",
                        "spaceAbove": {
                          "unit": "PT"
                        },
                        "spaceBelow": {
                          "unit": "PT"
                        },
                        "borderBetween": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderTop": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderBottom": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderLeft": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderRight": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "indentFirstLine": {
                          "unit": "PT"
                        },
                        "indentStart": {
                          "unit": "PT"
                        },
                        "indentEnd": {
                          "unit": "PT"
                        },
                        "keepLinesTogether": false,
                        "keepWithNext": false,
                        "avoidWidowAndOrphan": false,
                        "shading": {
                          "backgroundColor": {}
                        },
                        "pageBreakBefore": false
                      }
                    }
                  }
                ],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {},
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
                  "paddingBottom": {
                    "magnitude": 5,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
                }
              },
              {
                "startIndex": 12,
                "endIndex": 20,
                "content": [
                  {
                    "startIndex": 13,
                    "endIndex": 20,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 13,
                          "endIndex": 20,
                          "textRun": {
                            "content": "Item 2\n",
                            "textStyle": {
                              "fontSize": {
                                "magnitude": 12,
                                "unit": "PT"
                              }
                            }
                          }
                        }
                      ],
                      "paragraphStyle": {
                        "namedStyleType": "NORMAL_TEXT",
                        "alignment": "START",
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "spacingMode": "COLLAPSE_LISTS",
                        "spaceAbove": {
                          "unit": "PT"
                        },
                        "spaceBelow": {
                          "unit": "PT"
                        },
                        "borderBetween": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderTop": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderBottom": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderLeft": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderRight": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "indentFirstLine": {
                          "unit": "PT"
                        },
                        "indentStart": {
                          "unit": "PT"
                        },
                        "indentEnd": {
                          "unit": "PT"
                        },
                        "keepLinesTogether": false,
                        "keepWithNext": false,
                        "avoidWidowAndOrphan": false,
                        "shading": {
                          "backgroundColor": {}
                        },
                        "pageBreakBefore": false
                      }
                    }
                  }
                ],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {},
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
                  "paddingBottom": {
                    "magnitude": 5,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
                }
              },
              {
                "startIndex": 20,
                "endIndex": 28,
                "content": [
                  {
                    "startIndex": 21,
                    "endIndex": 28,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 21,
                          "endIndex": 28,
                          "textRun": {
                            "content": "Item 3\n",
                            "textStyle": {
                              "fontSize": {
                                "magnitude": 12,
                                "unit": "PT"
                              }
                            }
                          }
                        }
                      ],
                      "paragraphStyle": {
                        "namedStyleType": "NORMAL_TEXT",
                        "alignment": "START",
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "spacingMode": "COLLAPSE_LISTS",
                        "spaceAbove": {
                          "unit": "PT"
                        },
                        "spaceBelow": {
                          "unit": "PT"
                        },
                        "borderBetween": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderTop": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderBottom": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderLeft": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderRight": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "indentFirstLine": {
                          "unit": "PT"
                        },
                        "indentStart": {
                          "unit": "PT"
                        },
                        "indentEnd": {
                          "unit": "PT"
                        },
                        "keepLinesTogether": false,
                        "keepWithNext": false,
                        "avoidWidowAndOrphan": false,
                        "shading": {
                          "backgroundColor": {}
                        },
                        "pageBreakBefore": false
                      }
                    }
                  }
                ],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {},
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
                  "paddingBottom": {
                    "magnitude": 5,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
                }
              }
            ],
            "tableRowStyle": {
              "minRowHeight": {
                "unit": "PT"
              }
            }
          }
        ],
        "tableStyle": {
          "tableColumnProperties": [
            {
              "widthType": "EVENLY_DISTRIBUTED"
            },
            {
              "widthType": "EVENLY_DISTRIBUTED"
            },
            {
              "widthType": "EVENLY_DISTRIBUTED"
            }
          ]
        }
      };
      const tree = renderer
        .create(<Table table={table} doc={OneRow} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it("Table with one column runs correctly", ()=>{
    var table = {
        "rows": 3,
        "columns": 1,
        "tableRows": [
          {
            "startIndex": 3,
            "endIndex": 12,
            "tableCells": [
              {
                "startIndex": 4,
                "endIndex": 12,
                "content": [
                  {
                    "startIndex": 5,
                    "endIndex": 12,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 5,
                          "endIndex": 12,
                          "textRun": {
                            "content": "Item 1\n",
                            "textStyle": {
                              "fontSize": {
                                "magnitude": 12,
                                "unit": "PT"
                              }
                            }
                          }
                        }
                      ],
                      "paragraphStyle": {
                        "namedStyleType": "NORMAL_TEXT",
                        "alignment": "START",
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "spacingMode": "COLLAPSE_LISTS",
                        "spaceAbove": {
                          "unit": "PT"
                        },
                        "spaceBelow": {
                          "unit": "PT"
                        },
                        "borderBetween": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderTop": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderBottom": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderLeft": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderRight": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "indentFirstLine": {
                          "unit": "PT"
                        },
                        "indentStart": {
                          "unit": "PT"
                        },
                        "indentEnd": {
                          "unit": "PT"
                        },
                        "keepLinesTogether": false,
                        "keepWithNext": false,
                        "avoidWidowAndOrphan": false,
                        "shading": {
                          "backgroundColor": {}
                        },
                        "pageBreakBefore": false
                      }
                    }
                  }
                ],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {},
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
                  "paddingBottom": {
                    "magnitude": 5,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
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
            "startIndex": 12,
            "endIndex": 21,
            "tableCells": [
              {
                "startIndex": 13,
                "endIndex": 21,
                "content": [
                  {
                    "startIndex": 14,
                    "endIndex": 21,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 14,
                          "endIndex": 21,
                          "textRun": {
                            "content": "Item 2\n",
                            "textStyle": {
                              "fontSize": {
                                "magnitude": 12,
                                "unit": "PT"
                              }
                            }
                          }
                        }
                      ],
                      "paragraphStyle": {
                        "namedStyleType": "NORMAL_TEXT",
                        "alignment": "START",
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "spacingMode": "COLLAPSE_LISTS",
                        "spaceAbove": {
                          "unit": "PT"
                        },
                        "spaceBelow": {
                          "unit": "PT"
                        },
                        "borderBetween": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderTop": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderBottom": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderLeft": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderRight": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "indentFirstLine": {
                          "unit": "PT"
                        },
                        "indentStart": {
                          "unit": "PT"
                        },
                        "indentEnd": {
                          "unit": "PT"
                        },
                        "keepLinesTogether": false,
                        "keepWithNext": false,
                        "avoidWidowAndOrphan": false,
                        "shading": {
                          "backgroundColor": {}
                        },
                        "pageBreakBefore": false
                      }
                    }
                  }
                ],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {},
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
                  "paddingBottom": {
                    "magnitude": 5,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
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
            "startIndex": 21,
            "endIndex": 30,
            "tableCells": [
              {
                "startIndex": 22,
                "endIndex": 30,
                "content": [
                  {
                    "startIndex": 23,
                    "endIndex": 30,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 23,
                          "endIndex": 30,
                          "textRun": {
                            "content": "Item 3\n",
                            "textStyle": {
                              "fontSize": {
                                "magnitude": 12,
                                "unit": "PT"
                              }
                            }
                          }
                        }
                      ],
                      "paragraphStyle": {
                        "namedStyleType": "NORMAL_TEXT",
                        "alignment": "START",
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "spacingMode": "COLLAPSE_LISTS",
                        "spaceAbove": {
                          "unit": "PT"
                        },
                        "spaceBelow": {
                          "unit": "PT"
                        },
                        "borderBetween": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderTop": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderBottom": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderLeft": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderRight": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "indentFirstLine": {
                          "unit": "PT"
                        },
                        "indentStart": {
                          "unit": "PT"
                        },
                        "indentEnd": {
                          "unit": "PT"
                        },
                        "keepLinesTogether": false,
                        "keepWithNext": false,
                        "avoidWidowAndOrphan": false,
                        "shading": {
                          "backgroundColor": {}
                        },
                        "pageBreakBefore": false
                      }
                    }
                  }
                ],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {},
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
                  "paddingBottom": {
                    "magnitude": 5,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
                }
              }
            ],
            "tableRowStyle": {
              "minRowHeight": {
                "unit": "PT"
              }
            }
          }
        ],
        "tableStyle": {
          "tableColumnProperties": [
            {
              "widthType": "EVENLY_DISTRIBUTED"
            }
          ]
        }
      };
      const tree = renderer
        .create(<Table table={table} doc={OneColumn} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

it("Table with two columns and two rows runs correctly", ()=>{
    var table = {
        "rows": 2,
        "columns": 2,
        "tableRows": [
          {
            "startIndex": 3,
            "endIndex": 36,
            "tableCells": [
              {
                "startIndex": 4,
                "endIndex": 20,
                "content": [
                  {
                    "startIndex": 5,
                    "endIndex": 20,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 5,
                          "endIndex": 20,
                          "textRun": {
                            "content": "Northwest Cell\n",
                            "textStyle": {
                              "fontSize": {
                                "magnitude": 12,
                                "unit": "PT"
                              }
                            }
                          }
                        }
                      ],
                      "paragraphStyle": {
                        "namedStyleType": "NORMAL_TEXT",
                        "alignment": "START",
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "spacingMode": "COLLAPSE_LISTS",
                        "spaceAbove": {
                          "unit": "PT"
                        },
                        "spaceBelow": {
                          "unit": "PT"
                        },
                        "borderBetween": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderTop": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderBottom": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderLeft": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderRight": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "indentFirstLine": {
                          "unit": "PT"
                        },
                        "indentStart": {
                          "unit": "PT"
                        },
                        "indentEnd": {
                          "unit": "PT"
                        },
                        "keepLinesTogether": false,
                        "keepWithNext": false,
                        "avoidWidowAndOrphan": false,
                        "shading": {
                          "backgroundColor": {}
                        },
                        "pageBreakBefore": false
                      }
                    }
                  }
                ],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {},
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
                  "paddingBottom": {
                    "magnitude": 5,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
                }
              },
              {
                "startIndex": 20,
                "endIndex": 36,
                "content": [
                  {
                    "startIndex": 21,
                    "endIndex": 36,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 21,
                          "endIndex": 36,
                          "textRun": {
                            "content": "Northeast Cell\n",
                            "textStyle": {
                              "fontSize": {
                                "magnitude": 12,
                                "unit": "PT"
                              }
                            }
                          }
                        }
                      ],
                      "paragraphStyle": {
                        "namedStyleType": "NORMAL_TEXT",
                        "alignment": "START",
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "spacingMode": "COLLAPSE_LISTS",
                        "spaceAbove": {
                          "unit": "PT"
                        },
                        "spaceBelow": {
                          "unit": "PT"
                        },
                        "borderBetween": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderTop": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderBottom": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderLeft": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderRight": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "indentFirstLine": {
                          "unit": "PT"
                        },
                        "indentStart": {
                          "unit": "PT"
                        },
                        "indentEnd": {
                          "unit": "PT"
                        },
                        "keepLinesTogether": false,
                        "keepWithNext": false,
                        "avoidWidowAndOrphan": false,
                        "shading": {
                          "backgroundColor": {}
                        },
                        "pageBreakBefore": false
                      }
                    }
                  }
                ],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {},
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
                  "paddingBottom": {
                    "magnitude": 5,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
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
            "startIndex": 36,
            "endIndex": 69,
            "tableCells": [
              {
                "startIndex": 37,
                "endIndex": 53,
                "content": [
                  {
                    "startIndex": 38,
                    "endIndex": 53,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 38,
                          "endIndex": 53,
                          "textRun": {
                            "content": "Northeast Cell\n",
                            "textStyle": {
                              "fontSize": {
                                "magnitude": 12,
                                "unit": "PT"
                              }
                            }
                          }
                        }
                      ],
                      "paragraphStyle": {
                        "namedStyleType": "NORMAL_TEXT",
                        "alignment": "START",
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "spacingMode": "COLLAPSE_LISTS",
                        "spaceAbove": {
                          "unit": "PT"
                        },
                        "spaceBelow": {
                          "unit": "PT"
                        },
                        "borderBetween": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderTop": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderBottom": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderLeft": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderRight": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "indentFirstLine": {
                          "unit": "PT"
                        },
                        "indentStart": {
                          "unit": "PT"
                        },
                        "indentEnd": {
                          "unit": "PT"
                        },
                        "keepLinesTogether": false,
                        "keepWithNext": false,
                        "avoidWidowAndOrphan": false,
                        "shading": {
                          "backgroundColor": {}
                        },
                        "pageBreakBefore": false
                      }
                    }
                  }
                ],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {},
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
                  "paddingBottom": {
                    "magnitude": 5,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
                }
              },
              {
                "startIndex": 53,
                "endIndex": 69,
                "content": [
                  {
                    "startIndex": 54,
                    "endIndex": 69,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 54,
                          "endIndex": 69,
                          "textRun": {
                            "content": "Southeast Cell\n",
                            "textStyle": {
                              "fontSize": {
                                "magnitude": 12,
                                "unit": "PT"
                              }
                            }
                          }
                        }
                      ],
                      "paragraphStyle": {
                        "namedStyleType": "NORMAL_TEXT",
                        "alignment": "START",
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "spacingMode": "COLLAPSE_LISTS",
                        "spaceAbove": {
                          "unit": "PT"
                        },
                        "spaceBelow": {
                          "unit": "PT"
                        },
                        "borderBetween": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderTop": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderBottom": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderLeft": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "borderRight": {
                          "color": {},
                          "width": {
                            "unit": "PT"
                          },
                          "padding": {
                            "unit": "PT"
                          },
                          "dashStyle": "SOLID"
                        },
                        "indentFirstLine": {
                          "unit": "PT"
                        },
                        "indentStart": {
                          "unit": "PT"
                        },
                        "indentEnd": {
                          "unit": "PT"
                        },
                        "keepLinesTogether": false,
                        "keepWithNext": false,
                        "avoidWidowAndOrphan": false,
                        "shading": {
                          "backgroundColor": {}
                        },
                        "pageBreakBefore": false
                      }
                    }
                  }
                ],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {},
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
                  "paddingBottom": {
                    "magnitude": 5,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
                }
              }
            ],
            "tableRowStyle": {
              "minRowHeight": {
                "unit": "PT"
              }
            }
          }
        ],
        "tableStyle": {
          "tableColumnProperties": [
            {
              "widthType": "EVENLY_DISTRIBUTED"
            },
            {
              "widthType": "EVENLY_DISTRIBUTED"
            }
          ]
        }
      };
      const tree = renderer
        .create(<Table table={table} doc={TableDoc} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})
