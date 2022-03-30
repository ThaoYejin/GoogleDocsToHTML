
import { docs_v1 } from "googleapis";
import React from "react";


export interface TextRunProps {
    paragraph?: docs_v1.Schema$Paragraph;
}

export const TextRun: React.FC<TextRunProps> = ({
    paragraph
}) => {
    var elements = paragraph?.elements;
    var content: (string | undefined)[];
    content = [];
    elements?.forEach(function (value) {
        content.push(value?.textRun?.content);
    })
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