import { component$, Slot } from '@builder.io/qwik';
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
    <section class="bg-gradient-to-br from-white to-slate-400 dark:bg-gradient-to-b dark:from-focusBlue dark:to-indigo-900 text-slate-800 dark:text-slate-50 min-h-screen max-w-7xl place-self-center mx-auto my-0 p-4">
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </section>
  );
});
