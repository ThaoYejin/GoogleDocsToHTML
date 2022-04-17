import { docs_v1 } from "googleapis"

export function getListType(doc: docs_v1.Schema$Document, listId: string, glyphType: string[], glyphSymbol: string[]) {
    var body = doc.body?.content;
    var pObj: docs_v1.Schema$Paragraph[] = [];
    var glyphSymbol1, glyphType1: string | undefined;
    if (body != undefined) {
        for (var i = 0; i < body?.length!; i++) {
            if (body[i].paragraph?.bullet?.listId == listId) {
                while (body[i].paragraph?.paragraphStyle?.indentFirstLine?.magnitude == body[i + 1].paragraph?.paragraphStyle?.indentFirstLine?.magnitude) {
                    if (body[i].paragraph?.bullet?.nestingLevel == undefined) {
                        glyphType1 = glyphType[0];
                        glyphSymbol1 = glyphSymbol[0];
                    } else {
                        glyphType1 = glyphType[body[i].paragraph?.bullet?.nestingLevel!];
                        glyphSymbol1 = glyphSymbol[body[i].paragraph?.bullet?.nestingLevel!];
                    }
                }
            }
        }
        for (var a = 0; a < pObj.length; a++) {
            if (glyphType1 != undefined) {
                return glyphType1;
            } else {
                return glyphSymbol1;
            }
        }
    }
}