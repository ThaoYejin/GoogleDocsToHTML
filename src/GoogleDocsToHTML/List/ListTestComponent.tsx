import { docs_v1 } from "googleapis";
import React from "react";
import { List } from "./List";

export interface ListTestComponentProps {
    doc: docs_v1.Schema$Document, 
    startIndex: number
}

export const ListTestComponent: React.FC<ListTestComponentProps> = ({
   doc,
   startIndex
}
) => {
    var content = List(doc, startIndex);
    var listLength = content[1];
    return (
        <>
            {listLength}
            {content[0]}
        </>
    )
}