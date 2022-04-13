import { docs_v1 } from "googleapis";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
export interface GoogleDocsToHTMLProps {
    doc: docs_v1.Schema$Document;
}

export const GoogleDocsToHTML: React.FC<GoogleDocsToHTMLProps> = ({
    doc
}) => {
    var body = doc?.body?.content;
    var content: React.ReactNode[];
    content = [];
    body?.forEach(function (value, index) {
        var pObj = value.paragraph;
        if (pObj?.paragraphStyle?.namedStyleType?.indexOf("HEADING") != -1) {
            content?.push(
                <Heading key={index} paraObj={pObj}></Heading>
            )
        }

        if (pObj?.paragraphStyle?.namedStyleType?.indexOf("HEADING") == -1 && value.table == undefined && pObj.bullet == undefined) {
            content?.push(<Paragraph key={index} paraObj={pObj} doc={doc}></Paragraph>)
        }
    })
    return (
        <>
            {content}
        </>
    )
}