
import { docs_v1 } from "googleapis";
import React from "react";
import { HTag } from "./HTag";

export interface GoogleDocsToHTMLProps {
    doc: docs_v1.Schema$Document;
}

export const GoogleDocsToHTML: React.FC<GoogleDocsToHTMLProps> = ({
    doc
}) => {
    var body = doc?.body?.content;
    var content: React.ReactNode[] | undefined;
    content = body?.map(function (value) {
        var pObj = value.paragraph;
        if (pObj?.paragraphStyle?.namedStyleType?.indexOf("HEADING") != -1) {
            return (
                <HTag paraObj={pObj}></HTag>
            )
        }
    })
    return (
        <>
            {content}
        </>
    )
}