
import { docs_v1 } from "googleapis";
import React, { CSSProperties } from "react";
import { getColor } from "../Helper/getColor";
import { Link } from "./Link";


export interface TextRunProps {
    element: docs_v1.Schema$ParagraphElement | undefined;
}

export const TextRun: React.FC<TextRunProps> = ({
    element
}) => {
    var content: (string | undefined)[];
    content = [];
    //Get the content of the TextRun
    if (element?.textRun?.content != undefined) {
        content.push(element?.textRun?.content);
    }

    //Add the content to a string to display
    var contentReturn = "";
    content.forEach(function (value) {
        contentReturn += value;
    })

    //CSS Styling
    var textStyle = element?.textRun?.textStyle;
    var styleInline: CSSProperties;
    styleInline = {};
    //Bold
    if (textStyle?.bold) {
        styleInline.fontWeight = "bold";
    }
    //Italic
    if (textStyle?.italic) {
        styleInline.fontStyle = "italic";
    }
    //Underline
    if (textStyle?.underline) {
        styleInline.textDecoration = "underline";
    }
    //Color
    if (textStyle?.foregroundColor?.color != undefined) {
        styleInline.color = getColor(textStyle?.foregroundColor?.color.rgbColor);
    }
    //Font family
    var font: string | undefined;
    var fontWeight: number | undefined;
    if (textStyle?.weightedFontFamily?.fontFamily != undefined) {
        font = textStyle?.weightedFontFamily?.fontFamily;
        fontWeight = textStyle?.weightedFontFamily?.weight;
        styleInline.fontFamily = font;
        styleInline.fontWeight = fontWeight;
    }
    //Background color
    if (textStyle?.backgroundColor?.color != undefined) {
        styleInline.backgroundColor = getColor(textStyle?.backgroundColor?.color.rgbColor);
    }
    //Font size
    var magnitude: number | undefined;
    var unit: string | undefined;
    if (textStyle?.fontSize != undefined) {
        magnitude = textStyle.fontSize.magnitude;
        unit = textStyle.fontSize.unit;
        if (magnitude != undefined) {
            styleInline.fontSize = magnitude;
        } else {
            styleInline.fontSize = unit;
        }
    }

    return (
        <span style={styleInline}>
            {contentReturn}
        </span>
    );
}