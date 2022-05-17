import { docs_v1 } from "googleapis";
import { setBorder } from "./setBorder";

it('setBorder magnitude and dashstyle run correctly', ()=>{
    var borderObj: docs_v1.Schema$ParagraphBorder;
    borderObj = {
        "color": {
          "color": {
            "rgbColor": {}
          }
        },
        "width": {
          "magnitude": 3,
          "unit": "PT"
        },
        "dashStyle": "SOLID"
      };
      expect(setBorder(borderObj)).toBe("3 SOLID rgb(0,0,0)");
})

it('setBorder unit run correctly', ()=>{
    var borderObj: docs_v1.Schema$ParagraphBorder;
    borderObj = {
        "color": {
          "color": {
            "rgbColor": {}
          }
        },
        "width": {
          "unit": "PT"
        },
        "dashStyle": "SOLID"
      };
      expect(setBorder(borderObj)).toBe("1px SOLID rgb(0,0,0)");
})

it('setBorder unit (not "PT") run correctly', ()=>{
    var borderObj: docs_v1.Schema$ParagraphBorder;
    borderObj = {
        "color": {
          "color": {
            "rgbColor": {}
          }
        },
        "width": {
          "unit": "3PT"
        },
        "dashStyle": "SOLID"
      };
      expect(setBorder(borderObj)).toBe("3PT SOLID rgb(0,0,0)");
})

//Make sure the function get called