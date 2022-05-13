import { docs_v1 } from "googleapis";

//Convert GoogleDoc color to CSS rbg color standard
export function getColor(rgbColor?: docs_v1.Schema$RgbColor) {
    var red: number | undefined, green: number | undefined, blue: number | undefined;
    red = (rgbColor?.red || 0) * 255;
    blue = (rgbColor?.blue || 0) * 255;
    green = (rgbColor?.green || 0) * 255;
    return (
        "rgb(" + red + "," + green + "," + blue + ")"
    )
}