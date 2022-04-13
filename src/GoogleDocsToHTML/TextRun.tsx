
import { docs_v1 } from "googleapis";
import React, { CSSProperties } from "react";


export interface TextRunProps {
    element: docs_v1.Schema$ParagraphElement | undefined;
}

export const TextRun: React.FC<TextRunProps> = ({
    element
}) => {
    var content: (string | undefined)[];
    content = [];
    if (element?.textRun?.content != undefined) {
        content.push(element?.textRun?.content);
    }

    var contentReturn = "";
    content.forEach(function (value) {
        contentReturn += value;
    })

    var textStyle = element?.textRun?.textStyle;
    var styleInline: CSSProperties;
    styleInline = {};
    if (textStyle?.bold) {
        styleInline.fontWeight = "bold";
    }
    if (textStyle?.italic) {
        styleInline.fontStyle = "italic";
    }
    if (textStyle?.underline) {
        styleInline.textDecoration = "underline";
    }
    var red: number | undefined, green: number | undefined, blue: number | undefined;
    if (textStyle?.foregroundColor?.color != undefined) {
        red = (textStyle.foregroundColor.color.rgbColor?.red || 0) * 255;
        blue = (textStyle.foregroundColor.color.rgbColor?.blue || 0) * 255;
        green = (textStyle.foregroundColor.color.rgbColor?.green || 0) * 255;
        console.log(styleInline.color = "rgb(" + red + "," + green + "," + blue + ")");
    }
    return (
        <span style={styleInline}>
            {contentReturn}
        </span>
    );
}