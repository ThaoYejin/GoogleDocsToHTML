import { docs_v1 } from "googleapis";
import React from "react";
import { TextRun } from "../GoogleDocsToHTML/TextRun";

export function displayList(doc: docs_v1.Schema$Document, listId: string) {
    var body = doc.body?.content;
    var pObj: docs_v1.Schema$Paragraph[] = [];
    var content: React.ReactNode[] = [];
    var magnitude: number;
    if (body != undefined) {
        for (var i = 0; i < body?.length!; i++) {
            if (body[i].paragraph?.bullet?.listId == listId) {
                magnitude = body[i].paragraph?.paragraphStyle?.indentFirstLine?.magnitude!;
                while ( magnitude == body[i + 1].paragraph?.paragraphStyle?.indentFirstLine?.magnitude) {
                    pObj.push(body[i].paragraph!);
                }
            }
        }
        for (var a = 0; a < pObj.length; a++) {
                pObj[a].elements?.forEach(function(text){
                    content.push(
                        <li>
                            <TextRun element={text}></TextRun>
                        </li>
                    )
                })
            }
        }

    return content;
}
