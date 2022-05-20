import { docs_v1 } from "googleapis";
import React from "react";
import { Content } from "./Content/Content";

export interface GoogleDocsToHTMLProps {
    doc: docs_v1.Schema$Document;
}

//Convert GoogleDoc to HTML
export const GoogleDocsToHTML: React.FC<GoogleDocsToHTMLProps> = ({
    doc
}) => {
    var body = doc?.body?.content;

    return (
        <>
            <Content doc={doc} body={body}></Content>
        </>
    )
}