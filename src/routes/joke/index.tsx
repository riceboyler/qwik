import { component$, useSignal, useStylesScoped$, useTask$ } from "@builder.io/qwik";
import { routeLoader$, routeAction$, Form, server$ } from "@builder.io/qwik-city";

import STYLES from './index.css?inline';

export const useJokeVoteAction = routeAction$((props) => {
  console.log('Vote', props);
});

export const useDadJoke = routeLoader$(async () => {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: { Accept: 'application/json' }
  });

  return (await response.json()) as {
    id: string;
    status: number;
    joke: string;
  };
});

export default component$(() => {
  const isFavoriteSignal = useSignal(false);
  const dadJokeSignal = useDadJoke();
  const favoriteJokeAction = useJokeVoteAction();
  useStylesScoped$(STYLES);

  useTask$(({ track }) => {
    track(() => isFavoriteSignal.value);
    console.log('Favorite (isomorphic)', isFavoriteSignal.value);
    server$(() => {
      console.log('Favorite (server)', isFavoriteSignal.value);
    })();
  });

  return (
    <section class="section bright center">
      <p>{dadJokeSignal.value.joke}</p>
      <Form action={favoriteJokeAction}>
        <input type="hidden" name="jokeId" value={dadJokeSignal.value.id} />
        <button name="vote" value="up">👍</button>
        <button name="vote" value="down">👎</button>
      </Form>
      <br />
      <button onClick$={() => {
        isFavoriteSignal.value = !isFavoriteSignal.value;
      }}>
        {isFavoriteSignal.value ? '❤️' : '🤍'}
      </button>
    </section>
  );
});