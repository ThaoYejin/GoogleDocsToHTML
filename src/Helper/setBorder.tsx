import { docs_v1 } from "googleapis";
import { getColor } from "./getColor";

//Convert GoogleDoc Table border setting to CSS border setting
export function setBorder(borderObj: docs_v1.Schema$ParagraphBorder) {
    var borderStyle: string | undefined;
    if (borderObj.width?.magnitude != undefined) {
        borderStyle = borderObj.width?.magnitude.toString();
    } else {
        if (borderObj.width?.unit == "PT") {
            borderStyle = "1px";
        } else {
            borderStyle = borderObj.width?.unit?.toString();
        }
    }
    borderStyle += " " + borderObj.dashStyle;
    if (borderObj.color != undefined) {
        borderStyle += " " + getColor(borderObj.color.color?.rgbColor!);
    }
    return borderStyle;
}