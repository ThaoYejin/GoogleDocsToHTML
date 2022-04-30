import { docs_v1 } from "googleapis";
import React from "react";
import { TextRun } from "../TextRun/TextRun";


export interface LinkProps {
    paragraphElement: docs_v1.Schema$ParagraphElement | undefined;
}

export const Link: React.FC<LinkProps> = ({
    paragraphElement
}) => {
    var url: string | undefined;

    //Get the URL of the link
    if (paragraphElement?.textRun?.textStyle?.link != undefined) {
        url = paragraphElement?.textRun?.textStyle?.link.url!;
    }

    return (
        <a href={url}>
            <TextRun element={paragraphElement}></TextRun>
        </a>
    )
}