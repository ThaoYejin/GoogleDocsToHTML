import { docs_v1 } from "googleapis"
import { getListType } from "./getListType";
import * as glyphTypeDoc from "./glyphTypeDoc.json";

it('run correctly', ()=>{
    var nestingLevel: docs_v1.Schema$NestingLevel[], listId: string;
    nestingLevel = [
        {
          "bulletAlignment": "START",
          "glyphType": "DECIMAL"
        },
        {
          "bulletAlignment": "START",
          "glyphType": "ALPHA"
        },
        {
          "bulletAlignment": "END",
          "glyphType": "ROMAN",
        }
      ];
      listId = "kix.o7d8nfdiq1f";
      expect(getListType(nestingLevel,listId,glyphTypeDoc)).toStrictEqual([[undefined,undefined,undefined],["DECIMAL","ALPHA","ROMAN"]]);
})