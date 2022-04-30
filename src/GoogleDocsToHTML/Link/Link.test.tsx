import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from './Link';

it('renders correctly', () => {
    var paragraphElement = {
        "startIndex": 1,
        "endIndex": 7,
        "textRun": {
            "content": "Google",
            "textStyle": {
                "underline": true,
                "foregroundColor": {
                    "color": {
                        "rgbColor": {
                            "red": 0.06666667,
                            "green": 0.33333334,
                            "blue": 0.8
                        }
                    }
                },
                "link": {
                    "url": "https://www.google.com/"
                }
            }
        }
    };

    const tree = renderer
        .create(<Link paragraphElement={paragraphElement} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})