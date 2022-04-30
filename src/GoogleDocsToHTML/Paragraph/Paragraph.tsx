import React from "react";
import { docs_v1 } from "googleapis";
import { TextRun } from "../TextRun/TextRun";
import { Image } from "../Image/Image";
import { Link } from "../Link/Link";


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
        }
        if (element.textRun?.textStyle?.link != undefined) {
            content.push(
                <Link paragraphElement={element}></Link>
            )
        } 
        if (element.inlineObjectElement == undefined && element.textRun?.textStyle?.link == undefined) {
            content?.push(
                <TextRun key={index} element={element}></TextRun>
            )
        }
    })
    return (
        <p>
            {content}
        </p>
    );
}