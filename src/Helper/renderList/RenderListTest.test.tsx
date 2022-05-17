import { docs_v1 } from "googleapis";
import React from 'react';
import renderer from 'react-test-renderer';
import {RenderListTest} from './RenderListTest'

//Render ol list
it('ol run correctly', ()=>{
    var listObjArr: docs_v1.Schema$Paragraph[], level: number, startIndex: number, listType:string, listStyle:string[][];
    listObjArr = [
        {
            "elements": [
              {
                "startIndex": 1,
                "endIndex": 8,
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
              "direction": "LEFT_TO_RIGHT",
              "indentFirstLine": {
                "magnitude": 18,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 36,
                "unit": "PT"
              }
            },
            "bullet": {
              "listId": "kix.19aulhhubza3",
              "textStyle": {
                "underline": false,
                "fontSize": {
                  "magnitude": 12,
                  "unit": "PT"
                }
              }
            }
          },
          {
            "elements": [
              {
                "startIndex": 8,
                "endIndex": 14,
                "textRun": {
                  "content": "Item 2",
                  "textStyle": {
                    "fontSize": {
                      "magnitude": 12,
                      "unit": "PT"
                    }
                  }
                }
              },
              {
                "startIndex": 14,
                "endIndex": 15,
                "textRun": {
                  "content": "\n",
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
              "direction": "LEFT_TO_RIGHT",
              "indentFirstLine": {
                "magnitude": 18,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 36,
                "unit": "PT"
              }
            },
            "bullet": {
              "listId": "kix.19aulhhubza3",
              "textStyle": {
                "underline": false,
                "fontSize": {
                  "magnitude": 12,
                  "unit": "PT"
                }
              }
            }
          }
    ];
    level = 0;
    startIndex = 0;
    listType = "ol" ;
    listStyle = [["undefined","undefined"],["DECIMAL","ALPHA"]];
    const tree = renderer
        .create(<RenderListTest listObjArr={listObjArr} level={level} startIndex={startIndex} listType={listType} listStyle={listStyle} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

//Render ul list
it('ul run correctly', ()=>{
  var listObjArr: docs_v1.Schema$Paragraph[], level: number, startIndex: number, listType:string, listStyle:string[][];
  listObjArr = [
      {
          "elements": [
            {
              "startIndex": 1,
              "endIndex": 8,
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
            "direction": "LEFT_TO_RIGHT",
            "indentFirstLine": {
              "magnitude": 18,
              "unit": "PT"
            },
            "indentStart": {
              "magnitude": 36,
              "unit": "PT"
            }
          },
          "bullet": {
            "listId": "kix.yu98wpyunb8j",
            "textStyle": {
              "underline": false,
              "fontSize": {
                "magnitude": 12,
                "unit": "PT"
              }
            }
          }
        },
        {
          "elements": [
            {
              "startIndex": 8,
              "endIndex": 14,
              "textRun": {
                "content": "Item 2",
                "textStyle": {
                  "fontSize": {
                    "magnitude": 12,
                    "unit": "PT"
                  }
                }
              }
            },
            {
              "startIndex": 14,
              "endIndex": 15,
              "textRun": {
                "content": "\n",
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
            "direction": "LEFT_TO_RIGHT",
            "indentFirstLine": {
              "magnitude": 18,
              "unit": "PT"
            },
            "indentStart": {
              "magnitude": 36,
              "unit": "PT"
            }
          },
          "bullet": {
            "listId": "kix.yu98wpyunb8j",
            "textStyle": {
              "underline": false,
              "fontSize": {
                "magnitude": 12,
                "unit": "PT"
              }
            }
          }
        }
  ];
  level = 0;
  startIndex = 0;
  listType = "ul" ;
  listStyle = [["●","○"],["undefined","undefined"]];
  const tree = renderer
        .create(<RenderListTest listObjArr={listObjArr} level={level} startIndex={startIndex} listType={listType} listStyle={listStyle} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

//Render list nesting level 0
it('renderList nesting level 0 run correctly', ()=>{
  var listObjArr: docs_v1.Schema$Paragraph[], level: number, startIndex: number, listType:string, listStyle:string[][];
  listObjArr = [
    {
      "elements": [
        {
          "startIndex": 1,
          "endIndex": 8,
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
        "direction": "LEFT_TO_RIGHT",
        "indentFirstLine": {
          "magnitude": 18,
          "unit": "PT"
        },
        "indentStart": {
          "magnitude": 36,
          "unit": "PT"
        }
      },
      "bullet": {
        "listId": "kix.ckyjcxkcrj5d",
        "textStyle": {
          "underline": false,
          "fontSize": {
            "magnitude": 12,
            "unit": "PT"
          }
        }
      }
    },
    {
      "elements": [
        {
          "startIndex": 8,
          "endIndex": 14,
          "textRun": {
            "content": "Item 2",
            "textStyle": {
              "fontSize": {
                "magnitude": 12,
                "unit": "PT"
              }
            }
          }
        },
        {
          "startIndex": 14,
          "endIndex": 15,
          "textRun": {
            "content": "\n",
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
        "direction": "LEFT_TO_RIGHT",
        "indentFirstLine": {
          "magnitude": 18,
          "unit": "PT"
        },
        "indentStart": {
          "magnitude": 36,
          "unit": "PT"
        }
      },
      "bullet": {
        "listId": "kix.ckyjcxkcrj5d",
        "textStyle": {
          "underline": false,
          "fontSize": {
            "magnitude": 12,
            "unit": "PT"
          }
        }
      }
    }
  ];
  level = 0;
  startIndex = 0;
  listType = "ol" ;
  listStyle = [["undefined","undefined"],["DECIMAL","ALPHA"]];
  const tree = renderer
        .create(<RenderListTest listObjArr={listObjArr} level={level} startIndex={startIndex} listType={listType} listStyle={listStyle} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

//Render list nesting level 1
it('renderList nesting level 1 run correctly', ()=>{
  var listObjArr: docs_v1.Schema$Paragraph[], level: number, startIndex: number, listType:string, listStyle:string[][];
  listObjArr = [
    {
      "elements": [
        {
          "startIndex": 1,
          "endIndex": 8,
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
        "direction": "LEFT_TO_RIGHT",
        "indentFirstLine": {
          "magnitude": 18,
          "unit": "PT"
        },
        "indentStart": {
          "magnitude": 36,
          "unit": "PT"
        }
      },
      "bullet": {
        "listId": "kix.ckyjcxkcrj5d",
        "textStyle": {
          "underline": false,
          "fontSize": {
            "magnitude": 12,
            "unit": "PT"
          }
        }
      }
    },
    {
      "elements": [
        {
          "startIndex": 8,
          "endIndex": 22,
          "textRun": {
            "content": "Nested item 1\n",
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
        "direction": "LEFT_TO_RIGHT",
        "indentFirstLine": {
          "magnitude": 54,
          "unit": "PT"
        },
        "indentStart": {
          "magnitude": 72,
          "unit": "PT"
        }
      },
      "bullet": {
        "listId": "kix.ckyjcxkcrj5d",
        "nestingLevel": 1,
        "textStyle": {
          "underline": false,
          "fontSize": {
            "magnitude": 12,
            "unit": "PT"
          }
        }
      }
    },
    {
      "elements": [
        {
          "startIndex": 22,
          "endIndex": 36,
          "textRun": {
            "content": "Nested item 2\n",
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
        "direction": "LEFT_TO_RIGHT",
        "indentFirstLine": {
          "magnitude": 54,
          "unit": "PT"
        },
        "indentStart": {
          "magnitude": 72,
          "unit": "PT"
        }
      },
      "bullet": {
        "listId": "kix.ckyjcxkcrj5d",
        "nestingLevel": 1,
        "textStyle": {
          "underline": false,
          "fontSize": {
            "magnitude": 12,
            "unit": "PT"
          }
        }
      }
    },
    {
      "elements": [
        {
          "startIndex": 36,
          "endIndex": 42,
          "textRun": {
            "content": "Item 2",
            "textStyle": {
              "fontSize": {
                "magnitude": 12,
                "unit": "PT"
              }
            }
          }
        },
        {
          "startIndex": 42,
          "endIndex": 43,
          "textRun": {
            "content": "\n",
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
        "direction": "LEFT_TO_RIGHT",
        "indentFirstLine": {
          "magnitude": 18,
          "unit": "PT"
        },
        "indentStart": {
          "magnitude": 36,
          "unit": "PT"
        }
      },
      "bullet": {
        "listId": "kix.ckyjcxkcrj5d",
        "textStyle": {
          "underline": false,
          "fontSize": {
            "magnitude": 12,
            "unit": "PT"
          }
        }
      }
    }
  ];
  level = 0;
  startIndex = 0;
  listType = "ol" ;
  listStyle = [["undefined","undefined","undefined"],["DECIMAL","ALPHA","ROMAN"]];
  const tree = renderer
        .create(<RenderListTest listObjArr={listObjArr} level={level} startIndex={startIndex} listType={listType} listStyle={listStyle} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

//Render list nesting level 2
it('renderList nesting level 2 run correctly', ()=>{
  var listObjArr: docs_v1.Schema$Paragraph[], level: number, startIndex: number, listType:string, listStyle:string[][];
  listObjArr = [
    {
      "elements": [
        {
          "startIndex": 1,
          "endIndex": 8,
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
        "direction": "LEFT_TO_RIGHT",
        "indentFirstLine": {
          "magnitude": 18,
          "unit": "PT"
        },
        "indentStart": {
          "magnitude": 36,
          "unit": "PT"
        }
      },
      "bullet": {
        "listId": "kix.ckyjcxkcrj5d",
        "textStyle": {
          "underline": false,
          "fontSize": {
            "magnitude": 12,
            "unit": "PT"
          }
        }
      }
    },
    {
      "elements": [
        {
          "startIndex": 8,
          "endIndex": 22,
          "textRun": {
            "content": "Nested item 1\n",
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
        "direction": "LEFT_TO_RIGHT",
        "indentFirstLine": {
          "magnitude": 54,
          "unit": "PT"
        },
        "indentStart": {
          "magnitude": 72,
          "unit": "PT"
        }
      },
      "bullet": {
        "listId": "kix.ckyjcxkcrj5d",
        "nestingLevel": 1,
        "textStyle": {
          "underline": false,
          "fontSize": {
            "magnitude": 12,
            "unit": "PT"
          }
        }
      }
    },
    {
      "elements": [
        {
          "startIndex": 22,
          "endIndex": 43,
          "textRun": {
            "content": "Nested nested item 1\n",
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
        "direction": "LEFT_TO_RIGHT",
        "indentFirstLine": {
          "magnitude": 90,
          "unit": "PT"
        },
        "indentStart": {
          "magnitude": 108,
          "unit": "PT"
        }
      },
      "bullet": {
        "listId": "kix.ckyjcxkcrj5d",
        "nestingLevel": 2,
        "textStyle": {
          "underline": false,
          "fontSize": {
            "magnitude": 12,
            "unit": "PT"
          }
        }
      }
    },
    {
      "elements": [
        {
          "startIndex": 43,
          "endIndex": 64,
          "textRun": {
            "content": "Nested nested item 2\n",
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
        "direction": "LEFT_TO_RIGHT",
        "indentFirstLine": {
          "magnitude": 90,
          "unit": "PT"
        },
        "indentStart": {
          "magnitude": 108,
          "unit": "PT"
        }
      },
      "bullet": {
        "listId": "kix.ckyjcxkcrj5d",
        "nestingLevel": 2,
        "textStyle": {
          "underline": false,
          "fontSize": {
            "magnitude": 12,
            "unit": "PT"
          }
        }
      }
    },
    {
      "elements": [
        {
          "startIndex": 64,
          "endIndex": 78,
          "textRun": {
            "content": "Nested item 2\n",
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
        "direction": "LEFT_TO_RIGHT",
        "indentFirstLine": {
          "magnitude": 54,
          "unit": "PT"
        },
        "indentStart": {
          "magnitude": 72,
          "unit": "PT"
        }
      },
      "bullet": {
        "listId": "kix.ckyjcxkcrj5d",
        "nestingLevel": 1,
        "textStyle": {
          "underline": false,
          "fontSize": {
            "magnitude": 12,
            "unit": "PT"
          }
        }
      }
    },
    {
      "elements": [
        {
          "startIndex": 78,
          "endIndex": 84,
          "textRun": {
            "content": "Item 2",
            "textStyle": {
              "fontSize": {
                "magnitude": 12,
                "unit": "PT"
              }
            }
          }
        },
        {
          "startIndex": 84,
          "endIndex": 85,
          "textRun": {
            "content": "\n",
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
        "direction": "LEFT_TO_RIGHT",
        "indentFirstLine": {
          "magnitude": 18,
          "unit": "PT"
        },
        "indentStart": {
          "magnitude": 36,
          "unit": "PT"
        }
      },
      "bullet": {
        "listId": "kix.ckyjcxkcrj5d",
        "textStyle": {
          "underline": false,
          "fontSize": {
            "magnitude": 12,
            "unit": "PT"
          }
        }
      }
    }
  ];
  level = 0;
  startIndex = 0;
  listType = "ol" ;
  listStyle = [["undefined","undefined","undefined"],["DECIMAL","ALPHA","ROMAN"]];
  const tree = renderer
        .create(<RenderListTest listObjArr={listObjArr} level={level} startIndex={startIndex} listType={listType} listStyle={listStyle} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})