import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import "@fontsource/zen-kaku-gothic-new/400.css";
import "@fontsource/zen-kaku-gothic-new/500.css";
import "@fontsource/zen-kaku-gothic-new/700.css";
import "@fontsource/zilla-slab/400.css";
import "@fontsource/zilla-slab/400-italic.css";
import "@fontsource/zilla-slab/700.css";
import "@fontsource/zilla-slab/700-italic.css";

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <main class="bg-gradient-to-br from-white to-slate-400 dark:bg-gradient-to-br dark:from-slate-900 dark:to-indigo-700 text-slate-800 dark:text-slate-50 min-h-screen m-0 p-0">
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </main>
  );
});
