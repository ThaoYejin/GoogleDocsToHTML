import React from 'react';
import renderer from 'react-test-renderer';
import { Content } from './Content';
import * as doc from './ContentListTest.json';

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
      "endIndex": 6,
      "paragraph": {
        "elements": [
          {
            "startIndex": 1,
            "endIndex": 6,
            "textRun": {
              "content": "List\n",
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
      "startIndex": 6,
      "endIndex": 17,
      "paragraph": {
        "elements": [
          {
            "startIndex": 6,
            "endIndex": 17,
            "textRun": {
              "content": "First Item\n",
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
          "listId": "kix.tugej5q9sk2x",
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
    },
    {
      "startIndex": 17,
      "endIndex": 29,
      "paragraph": {
        "elements": [
          {
            "startIndex": 17,
            "endIndex": 29,
            "textRun": {
              "content": "Second Item\n",
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
          "listId": "kix.tugej5q9sk2x",
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
    },
    {
      "startIndex": 29,
      "endIndex": 30,
      "paragraph": {
        "elements": [
          {
            "startIndex": 29,
            "endIndex": 30,
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