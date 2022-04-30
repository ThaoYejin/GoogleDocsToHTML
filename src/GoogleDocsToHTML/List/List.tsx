import { docs_v1 } from "googleapis";
import React from "react";
import { getListType } from "../../Helper/getListType";
import { renderList } from "../../Helper/renderList";

export function List(doc: docs_v1.Schema$Document, startIndex: number): [React.ReactNode, number] {
    var listObjArr: docs_v1.Schema$Paragraph[] = [];

    //Get all the paragraph Object with the same listID
    var bodyContent = doc.body?.content;
    var listID: string | undefined | null;
    var paraObj: docs_v1.Schema$Paragraph;

    paraObj = bodyContent![startIndex].paragraph!;
    listID = paraObj.bullet?.listId!;

    for (var i = startIndex; i < bodyContent?.length!; i++) {
        paraObj = bodyContent![i].paragraph!;

        if (paraObj?.bullet?.listId == listID) {
            listObjArr.push(paraObj);
        }
    }

    //Get nestingLevels of the listId
    var listID = listObjArr[0].bullet?.listId;
    var lists = doc.lists;
    var nestingLevels: docs_v1.Schema$NestingLevel[] | undefined = [];
    if (lists != undefined && listID != undefined) {
        nestingLevels = lists[listID].listProperties?.nestingLevels;
    }

    //Check if it's <ol> or <ul>
    var listType: string;
    var listStyle = getListType(nestingLevels!, listID!, doc);
    if (listStyle[0][0] != undefined) {//glyphSymbol != undefined
        listType = "ul";
    } else {//glyphType != undefined
        listType = "ol";
    }

    var content = renderList(listObjArr, 0, 0, listType, listStyle);

    return [content[0], listObjArr.length];
}