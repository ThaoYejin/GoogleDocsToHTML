
import { docs_v1 } from "googleapis";
import React from "react";
import { TextRun } from "./TextRun";


export interface HTagProps {
    paraObj?: docs_v1.Schema$Paragraph;
}

export const Heading: React.FC<HTagProps> = ({
    paraObj
}) => {
    var hType = paraObj?.paragraphStyle?.namedStyleType;
    var content:React.ReactNode[] = [];
    paraObj?.elements?.forEach(function(element, index){
       content.push( <TextRun key={index} element={element}></TextRun>);
    })
     

    if (hType == "HEADING_1") {
        return (
            <h1>
                {content}
            </h1>
        )
    } else if (hType == "HEADING_2") {
        return (
            <h2>
                {content}
            </h2>
        )
    } else if (hType == "HEADING_3") {
        return (
            <h3>
                {content}
            </h3>
        )
    } else if (hType == "HEADING_4") {
        return (
            <h4>
                {content}
            </h4>
        )
    } else if (hType == "HEADING_5") {
        return (
            <h5>
                {content}
            </h5>
        )
    } else return (
        <h6>
            {content}
        </h6>
    );
}