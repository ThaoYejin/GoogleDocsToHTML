import { docs_v1 } from "googleapis";
import React from "react";
import { Heading } from "./Heading";
import { List } from "./List";
import { Paragraph } from "./Paragraph";
import { Table } from "./Table";
export interface ContentProps {
    doc: docs_v1.Schema$Document;
    body?: docs_v1.Schema$StructuralElement[];
}

export const Content: React.FC<ContentProps> = ({
    doc,
    body
}) => {
    var content: React.ReactNode[];
    content = [];
    for (var i = 0; i < body?.length!; i++) {
        var pObj = body![i].paragraph;

        //Display Heading
        if (pObj?.paragraphStyle?.namedStyleType?.indexOf("HEADING") != -1) {
            content?.push(
                <Heading paraObj={pObj}></Heading>
            )
        }

        //Display paragraph
        if (pObj?.paragraphStyle?.namedStyleType?.indexOf("HEADING") == -1 && body![i].table == undefined && pObj.bullet == undefined) {
            content?.push(<Paragraph paraObj={pObj} doc={doc}></Paragraph>)
        }

        //Display table
        if (body![i].table != undefined) {
            content.push(<Table doc={doc} table={body![i].table}></Table>)
        }

        //Display list
        if (body![i].paragraph?.bullet != undefined) {
           
            var list = List(doc, i);
            content.push(list[0]);
            i = i + list[1] - 1;
        }
        
    }

    return (
        <>
            {content}
        </>
    )
}