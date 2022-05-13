import { docs_v1 } from "googleapis"
import { getColor } from "./getColor"

it('run correctly', ()=>{
    var rgbColor: docs_v1.Schema$RgbColor =  {
        "red": 1,
        "green": 0.6
      };
    expect(getColor(rgbColor)).toBe("rgb(255,153,0)")
})