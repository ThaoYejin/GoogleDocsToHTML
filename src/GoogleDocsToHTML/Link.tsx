import { docs_v1 } from "googleapis";
import React from "react";
import { TextRun } from "./TextRun";


export interface LinkProps {
    paragraphElement: docs_v1.Schema$ParagraphElement | undefined;
}

export const Link: React.FC<LinkProps> = ({
    paragraphElement
}) => {
    var url: string | undefined;
    if (paragraphElement?.textRun?.textStyle?.link != undefined) {
        url = paragraphElement?.textRun?.textStyle?.link.url;
    }

    return (
        <a href={url}>
            <TextRun element={paragraphElement}></TextRun>
        </a>
    )
}