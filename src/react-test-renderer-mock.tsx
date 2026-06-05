// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { act } from 'react';

function domToJSON(node: Node): any {
    if (node.nodeType === Node.TEXT_NODE) {
        return node.nodeValue;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const type = element.tagName.toLowerCase();
        const props: any = {};
        
        // Copy all attributes
        for (let i = 0; i < element.attributes.length; i++) {
            const attr = element.attributes[i];
            if (attr.name === 'class') {
                props.className = attr.value;
            } else if (attr.name === 'style') {
                const styleObj: any = {};
                for (let j = 0; j < element.style.length; j++) {
                    const ruleName = element.style[j];
                    // Convert ruleName (kebab-case) to camelCase
                    const camelCaseRule = ruleName.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                    styleObj[camelCaseRule] = element.style.getPropertyValue(ruleName);
                }
                props.style = styleObj;
            } else {
                props[attr.name] = attr.value;
            }
        }
        
        const children: any[] = [];
        for (let i = 0; i < element.childNodes.length; i++) {
            const childJSON = domToJSON(element.childNodes[i]);
            if (childJSON !== null && childJSON !== undefined && childJSON !== "") {
                children.push(childJSON);
            }
        }
        
        return {
            type,
            props,
            children: children.length > 0 ? children : null
        };
    }
    return null;
}

const renderer = {
    create(element: React.ReactElement) {
        const container = document.createElement('div');
        const root = ReactDOMClient.createRoot(container);
        
        act(() => {
            root.render(element);
        });
        
        return {
            toJSON() {
                if (container.childNodes.length === 0) {
                    return null;
                }
                if (container.childNodes.length === 1) {
                    return domToJSON(container.childNodes[0]);
                }
                const result: any[] = [];
                container.childNodes.forEach(child => {
                    const json = domToJSON(child);
                    if (json !== null) {
                        result.push(json);
                    }
                });
                return result;
            },
            update(newElement: React.ReactElement) {
                act(() => {
                    root.render(newElement);
                });
            },
            unmount() {
                act(() => {
                    root.unmount();
                });
            }
        };
    }
};

export default renderer;
