import React from "react";
import { docs_v1 } from "googleapis";
import { TextRun } from "./TextRun";


export interface PTagProps {
    paraObj?: docs_v1.Schema$Paragraph;
}

export const PTag: React.FC<PTagProps> = ({
    paraObj
}) => {
    return (
        <p>
            <TextRun paragraph={paraObj}></TextRun>
        </p>
    );
}