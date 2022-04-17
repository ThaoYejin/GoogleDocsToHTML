import { docs_v1 } from "googleapis";
import React from "react";
import { displayList } from "../Helper/displayList";
import { getListType } from "../Helper/getListType";

export interface ListProps {
    paraObj: docs_v1.Schema$Paragraph;
    doc: docs_v1.Schema$Document;
}

export const List: React.FC<ListProps> = ({
    paraObj,
    doc
}) => {
    var listId: string | undefined, lists, nestingLevels: docs_v1.Schema$NestingLevel[] | undefined;
    var glyphFormat: (string | undefined)[] = [];
    var glyphType: string[] | undefined = [];
    var glyphSymbol: string[] | undefined = [];
    nestingLevels = [];
    //Check if it's a list 
    if (paraObj.bullet != undefined) {
        //Get the ID of the list
        listId = paraObj.bullet.listId;

        // if (listId != undefined) {
        //     //Get the nestingLevel of the item
        //     var nestLevel: number;
        //     if (paraObj.bullet.nestingLevel == undefined) {
        //         nestLevel = 0;
        //     } else if (paraObj.bullet.nestingLevel != undefined) {
        //         nestLevel = paraObj.bullet.nestingLevel;
        //     }
    }

    lists = doc.lists;

    //Get nestingLevels style of the listId
    if (lists != undefined && listId != undefined) {
        nestingLevels = lists[listId].listProperties?.nestingLevels;

        //Get glyphType, glyphSymbol and glyphFormat of the listId
        nestingLevels?.forEach(function (level) {
            glyphFormat.push(level.glyphFormat);
            glyphType?.push(level.glyphType!);
            glyphSymbol?.push(level.glyphSymbol!);
        })
    }

    //Loop through the paragraphs
    var contentLi: React.ReactNode[] = [];
    var glyphType1: string | undefined;
    contentLi = displayList(doc, listId!);
    glyphType1 = getListType(doc,listId!,glyphSymbol,glyphType)

    return(
        <ol list-style-type={glyphType1}>
            {contentLi}
        </ol>
    )

}










    // var body = doc?.body?.content;
    // var content: React.ReactNode[] | undefined;
    // var listID: (string | undefined)[] | undefined;
    // if (listID != undefined) {
    //     body?.forEach(function (value) {
    //         if (value?.paragraph?.bullet != undefined) {
    //             return listID?.push(value.paragraph.bullet.listId);
    //         }
    //     })
    //     var list = doc?.lists;
    //     
    //     var result: React.ReactNode[] | undefined;
    //     function defineGlyphType(ID: string | undefined) {
    //         if (ID != undefined && list != undefined) {
    //             var nestingLevels = list[ID]?.listProperties?.nestingLevels;
    //             nestingLevels?.forEach(function (nestLev) {
    //                 glyphFormat.push(nestLev?.glyphFormat);
    //                 glyphSymbol.push(nestLev?.glyphSymbol);
    //             })
    //             // if (nestingLevels?.length != undefined) {
    //             //     for (var i = 0; i < nestingLevels.length; i++) {
    //             body?.map(function (value) {
    //                 var pObj = value.paragraph;
    //                 var pID = pObj?.bullet?.listId;
    //                 var pNestLev;
    //                 var pGlyphFormat;
    //                 var pGlyphSymbol;
    //                 if (pID == ID) {
    //                     if (pObj?.bullet?.nestingLevel == undefined && nestingLevels != undefined) {
    //                         pNestLev = nestingLevels[0];
    //                         pGlyphFormat = glyphFormat[0];
    //                         pGlyphSymbol = glyphFormat[0];
    //                     } else {
    //                         pNestLev = pObj?.bullet?.nestingLevel;
    //                         if (pNestLev != undefined) {
    //                             pGlyphFormat = glyphFormat[pNestLev];
    //                             pGlyphSymbol = glyphSymbol[pNestLev];
    //                         }
    //                     }
    //                     while (pObj?.bullet != undefined) {
    //                         if (pGlyphSymbol != "DECIMAL" && pGlyphSymbol != "ALPHA" && pGlyphSymbol != "ROMAN") {
    //                             result?.push(<ul>
    //                                 <li><TextRun paragraph={pObj}></TextRun></li>
    //                             </ul>);
    //                         } else {
    //                             result?.push(
    //                                 <ol>
    //                                     <li><TextRun paragraph={pObj}></TextRun></li>
    //                                 </ol>
    //                             )
    //                         }
    //                         // }
    //                     } return result;
    //                 }
    //             }
    //     }
    //     }

    //     if (listID != undefined) {
    //         for (var i = 0; i < listID.length; i++) {
    //             if (listID[i] != undefined) {
    //                 content = defineGlyphType(listID[i]);
    //             }
    //         }
    //     };
    // }

