import { component$, useStore } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import {
  getContent,
  RenderContent,
  getBuilderSearchParams,
  type RegisteredComponent
} from '@builder.io/sdk-qwik';

import { BUILDER_API_KEY, pageModelKeys } from '../../config';

export const MyFunComponent = component$((props: { text: string; }) => {
  const state = useStore({
    count: 0
  });

  return (
    <div>
      <h3>{props?.text.toUpperCase()}</h3>
      <p>{state.count}</p>
      <button onClick$={() => state.count++}>Click me</button>
    </div>
  );
});


export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: MyFunComponent,
    name: 'MyFunComponent',
    inputs: [
      {
        name: 'text',
        type: 'string',
        defaultValue: 'Hello world'
      }
    ]
  }
];

export const useBuilderContent = routeLoader$(async ({ url, error }) => {
  const isPreviewing = url.searchParams.has('builder.preview');

  const builderContent = await getContent({
    model: pageModelKeys.page,
    apiKey: BUILDER_API_KEY,
    options: getBuilderSearchParams(url.searchParams),
    userAttributes: {
      urlPath: url.pathname
    }
  });

  if (!builderContent && !isPreviewing) {
    throw error(404, 'Page not found...');
  }

  return builderContent;
});

export default component$(() => {
  const content = useBuilderContent();

  return (
    <RenderContent
      model={pageModelKeys.page}
      content={content.value}
      apiKey={BUILDER_API_KEY}
      customComponents={CUSTOM_COMPONENTS}
    />
  );
});