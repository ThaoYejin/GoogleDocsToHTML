
import { docs_v1 } from "googleapis";
import React from "react";


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
    return (
        <>
            {contentReturn}
        </>
    );
}