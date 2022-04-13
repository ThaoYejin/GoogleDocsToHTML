
import { docs_v1 } from "googleapis";
import React, { CSSProperties } from "react";
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
    var red: number | undefined, green: number | undefined, blue: number | undefined;
    if (textStyle?.foregroundColor?.color != undefined) {
        red = (textStyle.foregroundColor.color.rgbColor?.red || 0) * 255;
        blue = (textStyle.foregroundColor.color.rgbColor?.blue || 0) * 255;
        green = (textStyle.foregroundColor.color.rgbColor?.green || 0) * 255;
        styleInline.color = "rgb(" + red + "," + green + "," + blue + ")";
    }
    //Font family
    var font : string | undefined;
    var fontWeight : number | undefined; 
    if (textStyle?.weightedFontFamily?.fontFamily != undefined){
        font = textStyle?.weightedFontFamily?.fontFamily;
        fontWeight = textStyle?.weightedFontFamily?.weight;
        styleInline.fontFamily = font;
        styleInline.fontWeight = fontWeight;
    }
    //Background color
    var redBC: number | undefined, greenBC: number | undefined, blueBC: number | undefined;
    if(textStyle?.backgroundColor?.color != undefined){
        redBC = (textStyle.backgroundColor.color.rgbColor?.red || 0)*255;
        blueBC = (textStyle.backgroundColor.color.rgbColor?.blue || 0)*255;
        greenBC = (textStyle.backgroundColor.color.rgbColor?.green || 0)*255;
        styleInline.backgroundColor = "rgb(" + redBC + "," + greenBC + "," + blueBC + ")";
    }
    //Font size
    var magnitude: number | undefined;
    var unit: string | undefined;
    if(textStyle?.fontSize != undefined){
        magnitude = textStyle.fontSize.magnitude;
        unit = textStyle.fontSize.unit;
        if(magnitude != undefined){
            styleInline.fontSize = magnitude;
        } else{
            styleInline.fontSize = unit;
        }
    }

    return (
        <span style={styleInline}>
            {contentReturn}
        </span>
    );
}