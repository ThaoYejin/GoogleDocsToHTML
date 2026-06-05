import { Meta } from '@storybook/react';
import { FetchFromAPI as ExternalFetchFromAPI } from "./FetchFromAPI";
import { StaticJson as ExternalStaticJson } from "./StaticJson";
import { GoogleDocsToHTML } from "../../src/GoogleDocsToHTML/GoogleDocsToHTML";

const meta: Meta<typeof GoogleDocsToHTML> = {
  title: 'GoogleDocsToHTML',
  component: GoogleDocsToHTML,
};

export default meta;

export const StaticJson = ExternalStaticJson;
export const FetchFromAPI = ExternalFetchFromAPI;
