import { $, component$ } from '@builder.io/qwik';
import { Image, type ImageTransformerProps, useImageProvider } from 'qwik-image';
import Navlink from '../../navbar/navlink';

export default component$(() => {
  const imageTransformer$ = $(
    ({ src, width, height }: ImageTransformerProps): string => {
      return `https://cdn.builder.io/api/v1/${src}?height=${height}&width=${width}&format=webp`;
    }
  );

  useImageProvider({
    resolutions: [640],
    imageTransformer$,
  });

  return (
    <header class="flex flex-row m-6 p-4 bg-[#1a2c9c] to-70% bg-[url(https://cdn.builder.io/api/v1/image/assets%2Fd2369962936643af9a46dfd27ff07939%2Fe024277a1c1442678e97c315ce7df2c2?format=webp)] bg-right-bottom bg-no-repeat bg-contain rounded-md">
      <div class="flex items-center content-between w-full">
        <div class="w-2/6">
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
            <h3 class="text-3xl font-extrabold font-sans dark:text-orange-500 tracking-wide">
              riceboyler
            </h3>
          </a>
        </div>
        <nav class="flex items-center justify-start w-4/6 py-4 px-4 bg-inherit mr-7 gap-12">
          <Navlink href="/resume">
            Resume/CV
          </Navlink>
          <Navlink href="portfolio">
            Porfolio
          </Navlink>
          <Navlink href="/cars">
            Cars
          </Navlink>
          <Navlink href="/blog">
            Blog
          </Navlink>
        </nav>
      </div>
    </header>
  );
});
