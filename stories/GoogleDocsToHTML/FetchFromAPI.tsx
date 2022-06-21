import React, { useState } from 'react';

import { ComponentStory } from '@storybook/react';
import { GoogleDocsToHTML } from "../../src/GoogleDocsToHTML/GoogleDocsToHTML";

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GoogleDocsToHTML> = (args) => {
  const [url, setURL] = useState("");

  const textChange = (e: any) => {
    setURL(e.target.value);
  }

  const [docJson, setDocDataState] = useState({});
  const [loading, setLoadingState] = useState(false);
  const getAPI = async () => {
    setLoadingState(true);
    var response = await fetch(url);
    var docData = await response.json();
    setDocDataState(docData);
    setLoadingState(false);
  }

  var loadingHtml = <></>;

  if (loading) {
    loadingHtml = (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <input type="text" value={url} onChange={textChange}></input>
      <button onClick={getAPI}>Get Json</button>
      {loadingHtml}
      <GoogleDocsToHTML doc={docJson} />
    </>
  );
};

export const FetchFromAPI = Template.bind({});
