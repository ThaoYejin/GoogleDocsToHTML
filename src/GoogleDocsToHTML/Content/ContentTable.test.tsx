import React from 'react';
import renderer from 'react-test-renderer';
import { Content } from './Content';
import * as doc from './ContentTableTest.json';

it('renders correctly', () => {
  var body = [
    {
      "endIndex": 1,
      "sectionBreak": {
        "sectionStyle": {
          "columnSeparatorStyle": "NONE",
          "contentDirection": "LEFT_TO_RIGHT",
          "sectionType": "CONTINUOUS"
        }
      }
    },
    {
      "startIndex": 1,
      "endIndex": 2,
      "paragraph": {
        "elements": [
          {
            "startIndex": 1,
            "endIndex": 2,
            "textRun": {
              "content": "\n",
              "textStyle": {
                "foregroundColor": {
                  "color": {
                    "rgbColor": {
                      "red": 0.2509804,
                      "green": 0.2509804,
                      "blue": 0.2509804
                    }
                  }
                },
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
          "direction": "LEFT_TO_RIGHT"
        }
      }
    },
    {
      "startIndex": 2,
      "endIndex": 36,
      "table": {
        "rows": 2,
        "columns": 2,
        "tableRows": [
          {
            "startIndex": 3,
            "endIndex": 19,
            "tableCells": [
              {
                "startIndex": 4,
                "endIndex": 11,
                "content": [
                  {
                    "startIndex": 5,
                    "endIndex": 11,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 5,
                          "endIndex": 11,
                          "textRun": {
                            "content": "First\n",
                            "textStyle": {
                              "foregroundColor": {
                                "color": {
                                  "rgbColor": {
                                    "red": 0.2509804,
                                    "green": 0.2509804,
                                    "blue": 0.2509804
                                  }
                                }
                              },
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
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "avoidWidowAndOrphan": false
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
                "startIndex": 11,
                "endIndex": 19,
                "content": [
                  {
                    "startIndex": 12,
                    "endIndex": 19,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 12,
                          "endIndex": 19,
                          "textRun": {
                            "content": "Second\n",
                            "textStyle": {
                              "foregroundColor": {
                                "color": {
                                  "rgbColor": {
                                    "red": 0.2509804,
                                    "green": 0.2509804,
                                    "blue": 0.2509804
                                  }
                                }
                              },
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
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "avoidWidowAndOrphan": false
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
            "startIndex": 19,
            "endIndex": 35,
            "tableCells": [
              {
                "startIndex": 20,
                "endIndex": 27,
                "content": [
                  {
                    "startIndex": 21,
                    "endIndex": 27,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 21,
                          "endIndex": 27,
                          "textRun": {
                            "content": "Third\n",
                            "textStyle": {
                              "foregroundColor": {
                                "color": {
                                  "rgbColor": {
                                    "red": 0.2509804,
                                    "green": 0.2509804,
                                    "blue": 0.2509804
                                  }
                                }
                              },
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
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "avoidWidowAndOrphan": false
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
                "startIndex": 27,
                "endIndex": 35,
                "content": [
                  {
                    "startIndex": 28,
                    "endIndex": 35,
                    "paragraph": {
                      "elements": [
                        {
                          "startIndex": 28,
                          "endIndex": 35,
                          "textRun": {
                            "content": "Fourth\n",
                            "textStyle": {
                              "foregroundColor": {
                                "color": {
                                  "rgbColor": {
                                    "red": 0.2509804,
                                    "green": 0.2509804,
                                    "blue": 0.2509804
                                  }
                                }
                              },
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
                        "lineSpacing": 100,
                        "direction": "LEFT_TO_RIGHT",
                        "avoidWidowAndOrphan": false
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
      }
    },
    {
      "startIndex": 36,
      "endIndex": 37,
      "paragraph": {
        "elements": [
          {
            "startIndex": 36,
            "endIndex": 37,
            "textRun": {
              "content": "\n",
              "textStyle": {
                "foregroundColor": {
                  "color": {
                    "rgbColor": {
                      "red": 0.2509804,
                      "green": 0.2509804,
                      "blue": 0.2509804
                    }
                  }
                },
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
          "direction": "LEFT_TO_RIGHT"
        }
      }
    },
    {
      "startIndex": 37,
      "endIndex": 38,
      "paragraph": {
        "elements": [
          {
            "startIndex": 37,
            "endIndex": 38,
            "textRun": {
              "content": "\n",
              "textStyle": {
                "foregroundColor": {
                  "color": {
                    "rgbColor": {
                      "red": 0.2509804,
                      "green": 0.2509804,
                      "blue": 0.2509804
                    }
                  }
                },
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
          "direction": "LEFT_TO_RIGHT"
        }
      }
    }
  ];

    const tree = renderer
        .create(<Content doc={doc} body={body} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})