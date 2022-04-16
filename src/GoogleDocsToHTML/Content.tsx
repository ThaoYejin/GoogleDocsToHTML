import { docs_v1 } from "googleapis";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { Table } from "./Table";
export interface ContentProps {
    doc: docs_v1.Schema$Document;
    body? : docs_v1.Schema$StructuralElement[];
}

export const Content: React.FC<ContentProps> = ({
    doc,
    body
}) => {
    var content: React.ReactNode[];
    content = [];
    body?.forEach(function (value, index) {
        var pObj = value.paragraph;

        //Display Heading
        if (pObj?.paragraphStyle?.namedStyleType?.indexOf("HEADING") != -1) {
            content?.push(
                <Heading key={index} paraObj={pObj}></Heading>
            )
        }

        //Display paragraph
        if (pObj?.paragraphStyle?.namedStyleType?.indexOf("HEADING") == -1 && value.table == undefined && pObj.bullet == undefined) {
            content?.push(<Paragraph key={index} paraObj={pObj} doc={doc}></Paragraph>)
        }

        //Display table
        if(value.table != undefined){
            content.push(<Table doc={doc} table={value.table}></Table>)
        }
    })
    return (
        <>
            {content}
        </>
    )
}