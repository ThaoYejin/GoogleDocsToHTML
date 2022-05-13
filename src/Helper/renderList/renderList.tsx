import { docs_v1 } from "googleapis";
import React from "react";
import { TextRun } from "../../GoogleDocsToHTML/TextRun/TextRun";

export function renderList(listObjArr: docs_v1.Schema$Paragraph[], level: number, startIndex: number, listType:string, listStyle:string[][]): [React.ReactNode, number] {
 
    //Initialize content array
    var content: React.ReactNode[] = [];

    

    //Loop through listArray from startIndex
    var liContent;
    var i: number;
    var newi: number;
    var nestingLevel: number;
    for (var i = startIndex; i < listObjArr.length; i++) {
        if (listObjArr[i].bullet?.nestingLevel == undefined) {
            nestingLevel = 0;
        } else {
            nestingLevel = listObjArr[i].bullet?.nestingLevel!;
        }


        //If same nesting level -> push <li> tag to content
        if (nestingLevel == level) {
            liContent = <TextRun element={listObjArr![i].elements![0]}></TextRun>
            content.push(
                <li>
                    {liContent}
                </li>
            )
        }

        //If nesting level is smaller -> push closing tag (</ol> or </ul>) and return [content, i - 1]
        if (nestingLevel < level) {
            newi = i - 1;
            if (listType == "ul") {
                return [(
                    <ul>
                        {content}
                    </ul>
                ), newi]
            } else {
                return [(
                    <ol>
                        {content}
                    </ol>
                ), newi]
            }
        }

        //If nesting level is greater -> call renderList(listArray, level +1, i)
        else if(nestingLevel > level) {
            if (listStyle[0][i] != undefined) {
                listType = "ul";
            } else if (listStyle[1][i] != undefined) {
                listType = "ol";
            }
            var nestedList = renderList(listObjArr, level + 1, i, listType, listStyle);
            i = nestedList![1];
            content.push(nestedList[0]);
        }
    }

    newi = i - 1;
    if (listType == "ul") {
        return [(
            <ul>
                {content}
            </ul>
        ), newi]
    } else {
        return [(
            <ol>
                {content}
            </ol>
        ), newi]
    }
}
