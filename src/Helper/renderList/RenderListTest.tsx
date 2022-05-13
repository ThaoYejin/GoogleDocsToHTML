import { docs_v1 } from "googleapis";
import React from "react";
import { renderList } from "./renderList";

export interface RenderProps{
    listObjArr: docs_v1.Schema$Paragraph[], 
    level: number, 
    startIndex: number, 
    listType:string, 
    listStyle:string[][]
}

export const RenderListTest: React.FC<RenderProps> =({
    listObjArr,
    level,
    startIndex,
    listType,
    listStyle
}
)=>{
    var content = renderList(listObjArr,level,startIndex,listType,listStyle);
    var newi = content[1];
    return (
        <>
        {newi}
        {content[0]}
        </>
    )
}