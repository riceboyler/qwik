import { $, component$, useSignal } from '@builder.io/qwik';
import { Image, type ImageTransformerProps, useImageProvider } from 'qwik-image';
import Navlink from '../../navbar/navlink';

export default component$(() => {
  const imageTransformer$ = $(
    ({ src, width, height }: ImageTransformerProps): string => {
      return `https://cdn.builder.io/api/v1/${src}?height=${height}&width=${width}&format=webp`;
    }
  );
  const isOpen = useSignal(false);

  useImageProvider({
    resolutions: [640],
    imageTransformer$,
  });

  return (
    <header class="flex flex-row m-6 p-4 bg-[#1a2c9c] to-70% bg-[url(https://cdn.builder.io/api/v1/image/assets%2Fd2369962936643af9a46dfd27ff07939%2F2ced439b08dc464e9c80324982f18300?format=webp)] bg-right-bottom bg-no-repeat bg-contain rounded-md">
      <div class="flex sm:items-start lg:items-center content-between w-full">
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
        <nav class="flex sm:flex-col lg:flex-row w-4/6 sm:items-end sm:justify-center">
          <div class="cursor-pointer lg:hidden block" onClick$={() => isOpen.value = !isOpen.value}>
            {isOpen.value === true ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 cursor-pointer lg:hidden block">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
              </svg>)}
          </div>
          <div class={`${isOpen.value === true ? '' : 'sm:hidden'} lg:flex flex sm:flex-col lg:flex-row sm:items-end lg:items-center justify-start lg:py-4 lg:px-4 bg-inherit lg:mr-7 lg:gap-12`}>
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
          </div>
        </nav>
      </div>
    </header>
  );
});
