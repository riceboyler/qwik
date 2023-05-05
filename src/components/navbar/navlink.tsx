import { Slot, component$ } from "@builder.io/qwik";

type NavLinkProps = {
  href: string;
  target?: '_blank';
};

export default component$<NavLinkProps>(({ href, target }) => {
  // const textStyle = {
  //   filter: "drop-shadow(2px 2px 6px #1a2c9c);"
  // };
  return (
    <a class="text-2xl font-extrabold text-yellow-200 hover:text-orange-500 hover:underline underline-offset-3 p-1 drop-shadow-md shadow-blue-600" href={href} target={target ?? ''} rel={target === '_blank' ? 'noopener noreferrer' : ''}>
      <Slot />
    </a>
  );
});