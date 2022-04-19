import { docs_v1 } from "googleapis"

export function getListType(nestingLevel: docs_v1.Schema$NestingLevel[], listId: string, doc: docs_v1.Schema$Document) {
   
    var lists = doc.lists;
    var glyphType: string[] | undefined = [];
    var glyphSymbol: string[] | undefined = [];

    if (lists != undefined && listId != undefined) {
         //Get glyphType, glyphSymbol and glyphFormat of the listId
         nestingLevel?.forEach(function (level) {
            glyphType?.push(level.glyphType!);
            glyphSymbol?.push(level.glyphSymbol!);
        })
    }

    return[glyphSymbol, glyphType];
}