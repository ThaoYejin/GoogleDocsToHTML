import { docs_v1 } from "googleapis"
import { getListType } from "./getListType";
import * as glyphSymbolDoc from "./glyphSymbolDoc.json";

it('run correctly', ()=>{
    var nestingLevel: docs_v1.Schema$NestingLevel[], listId: string;
    nestingLevel = [
        {
            "glyphSymbol": "●",
          },
          {
            "glyphSymbol": "○",
          },
          {
            "glyphSymbol": "■",
          }
      ];
      listId = "kix.6qj0blbiu597";
      expect(getListType(nestingLevel,listId,glyphSymbolDoc)).toStrictEqual([["●","○","■"],[undefined,undefined,undefined]]);
})