import { $, component$ } from '@builder.io/qwik';
import { Image, type ImageTransformerProps, useImageProvider } from 'qwik-image';

export default component$(() => {
  const imageTransformer$ = $(
    ({ src, width, height }: ImageTransformerProps): string => {
      return `https://cdn.builder.io/api/v1/${src}?height=${height}&width=${width}&format=webp&fit=fill`;
    }
  );

  useImageProvider({
    resolutions: [640],
    imageTransformer$,
  });

  return (
    <header class="flex flex-row min-w-5xl m-6">
      <div class="flex items-center content-between w-full">
        <div>
          <a href="/" title="home" class="flex flex-row content-between items-center gap-2">
            <Image
              class="rounded-full"
              src="image/assets%2Fd2369962936643af9a46dfd27ff07939%2Fef7f9c5b9e4f48288fb2b8e7e69c63dd"
              layout="constrained"
              width={72}
              height={72}
              objectFit="fill"
              alt="riceboyler Bitmoji"
              placeholder="#FFF"
            />
            <h3 class="text-3xl font-sans">
              riceboyler
            </h3>
          </a>
        </div>
        <nav class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-slate-800 dark:text-slate-50 bg-inherit">
          <ul>
            <li>
              <a href="/resume">
                Resume/CV
              </a>
            </li>
            <li>
              <a href="portfolio">
                Porfolio
              </a>
            </li>
            <li>
              <a href="/cars">
                Car History
              </a>
            </li>
            <li>
              <a href="/blog">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});
