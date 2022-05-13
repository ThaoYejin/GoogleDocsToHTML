import { docs_v1 } from "googleapis";
import React, { CSSProperties } from "react";
import { Content } from "../Content/Content";
import { setBorder } from "../../Helper/setBorder/setBorder";


export interface TableProps {
    table: docs_v1.Schema$Table | undefined;
    doc: docs_v1.Schema$Document;
}

export const Table: React.FC<TableProps> = ({
    table,
    doc
}) => {
    var noOfColumn = table?.columns!;
    var noOfRow = table?.rows!;
    var contentOfTable: React.ReactNode[][];
    contentOfTable = new Array(noOfRow);
    var colspanDoc: number[][];
    var rowspanDoc: number[][];
    colspanDoc = new Array(noOfRow);
    rowspanDoc = new Array(noOfRow);
    for (var a = 0; a < contentOfTable.length; a++) {
        contentOfTable[a] = new Array(noOfColumn);
        colspanDoc[a] = new Array(noOfColumn);
        rowspanDoc[a] = new Array(noOfColumn);
    }
    var i = 0, j = 0;
    var content: React.ReactNode[];
    content = [];
    var contentOfColumn: React.ReactNode[];
    contentOfColumn = [];

    var styleInline: CSSProperties;
    styleInline = {};
    var style: docs_v1.Schema$ParagraphStyle | undefined;

    //Get the content, rowspan and colspan of each tableCell
    if (noOfColumn != undefined && noOfRow != undefined && table?.tableRows != undefined) {
        table.tableRows.forEach(function (tableRows) {
            tableRows.tableCells?.forEach(function (tableCells) {
                tableCells.content?.forEach(function (contentArrElement) {
                    contentArrElement.paragraph?.elements?.forEach(function (elementArr) {
                        if (elementArr.textRun?.content != "\n") {
                            //Get the content of the tableCell
                            contentOfTable[i][j] = (<Content doc={doc} body={tableCells.content}></Content>);

                            //Get the rowspan and colspan of the tableCell
                            if (tableCells.tableCellStyle?.columnSpan != undefined && tableCells.tableCellStyle.rowSpan != undefined) {
                                colspanDoc[i][j] = tableCells.tableCellStyle?.columnSpan;
                                rowspanDoc[i][j] = tableCells.tableCellStyle.rowSpan;
                            }
                        }
                    })
                })

                //Get the style of the content of the tableCell
                if (tableCells?.content?.length != undefined) {
                    style = tableCells?.content[tableCells.content.length - 1]?.paragraph?.paragraphStyle;
                }
                j++;
            })
            i++;
        })
    }

    //BorderTop
    if (style?.borderTop != undefined) {
        styleInline.borderTop = setBorder(style?.borderTop);
    }

    //BorderBottom
    if (style?.borderBottom != undefined) {
        styleInline.borderBottom = setBorder(style?.borderBottom);
    }

    //BorderLeft
    if (style?.borderLeft != undefined) {
        styleInline.borderLeft = setBorder(style?.borderLeft);
    }

    //BorderRight
    if (style?.borderRight != undefined) {
        styleInline.borderRight = setBorder(style?.borderRight);
    }

    //Set border-collapse to default collapse 
    styleInline.borderCollapse = "collapse";

    //Set the style for table 
    var x = 0, y = 0;
    contentOfTable.forEach(function (row) {
        row.forEach(function (column) {
            contentOfColumn.push(
                //Set colspan and rowspan cho td
                <td style={styleInline} colSpan={colspanDoc[x][y]} rowSpan={rowspanDoc[x][y]} >
                    {column}
                </td>
            );
            y++;
        })
        content.push(
            <tr>
                {contentOfColumn}
            </tr>
        );
        x++;
        contentOfColumn = [];
    })



    return (
        <table style={styleInline}>
            {content}
        </table>
    )
}