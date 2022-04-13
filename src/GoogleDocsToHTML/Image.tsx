import { docs_v1 } from "googleapis";
import React from "react";

export interface ImageProps {
    element: docs_v1.Schema$ParagraphElement | undefined;
    doc: docs_v1.Schema$Document;
}

export const Image: React.FC<ImageProps> = ({
    element,
    doc
}) => {
    var inlineObjID: (string | undefined);
    inlineObjID = element?.inlineObjectElement?.inlineObjectId;
    var inlineObj = doc?.inlineObjects;
    var source: (string | undefined);

    if (inlineObjID != undefined && inlineObj != undefined) {
        source = inlineObj[inlineObjID].inlineObjectProperties?.embeddedObject?.imageProperties?.contentUri;
        return (
            <img src={source} />
        )
    }

    return (
        <></>
    )
}