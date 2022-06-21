import { ComponentMeta } from '@storybook/react';
import { FetchFromAPI as ExternalFetchFromAPI } from "./FetchFromAPI";
import { StaticJson as ExternalStaticJson } from "./StaticJson";
import { GoogleDocsToHTML } from "../../src/GoogleDocsToHTML/GoogleDocsToHTML";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'GoogleDocsToHTML',
  component: GoogleDocsToHTML,
  // More on argTypes: https://storybook.js.rg/docs/react/api/argtypes
} as ComponentMeta<typeof GoogleDocsToHTML>;

export const StaticJson = ExternalStaticJson;
export const FetchFromAPI = ExternalFetchFromAPI;
