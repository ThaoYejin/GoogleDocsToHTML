import React from "react";
import { docs_v1 } from "googleapis";
import { TextRun } from "./TextRun";
import { Image } from "./Image";


export interface PTagProps {
    paraObj?: docs_v1.Schema$Paragraph;
    doc: docs_v1.Schema$Document;
}

export const Paragraph: React.FC<PTagProps> = ({
    paraObj,
    doc
}) => {
    var content: React.ReactNode[];
    content = [];
    var pObjElement = paraObj?.elements;
    pObjElement?.forEach(function (element, index) {
        if (element.inlineObjectElement != undefined) {
            content?.push(
                <Image key={index} doc={doc} element={element} ></Image>
            )
        } else if (element.inlineObjectElement == undefined) {
            content?.push(
                <p key={index}>
                    <TextRun element={element}></TextRun>
                </p>
            )
        }
    })
    return (
        <>
            {content}
        </>
    );
}