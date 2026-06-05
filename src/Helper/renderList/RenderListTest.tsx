import { docs_v1 } from "googleapis";
import React from "react";
import { renderList } from "./renderList";

export interface RenderProps{
    listObjArr: docs_v1.Schema$Paragraph[], 
    level: number, 
    startIndex: number, 
    listType:string, 
    listStyle:string[][],
    doc?: docs_v1.Schema$Document
}

export const RenderListTest: React.FC<RenderProps> =({
    listObjArr,
    level,
    startIndex,
    listType,
    listStyle,
    doc
}
)=>{
    var content = renderList(listObjArr,level,startIndex,listType,listStyle, doc || ({} as docs_v1.Schema$Document));
    var newi = content[1];
    return (
        <>
        {newi}
        {content[0]}
        </>
    )
}