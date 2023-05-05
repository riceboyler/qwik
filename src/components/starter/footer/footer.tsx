import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {

  return (
    <footer>
      <div class="container">
        <a href="https://www.riceboyler.com/" class={styles.anchor}>
          <span>Made with ♡ by riceboyler, &copy; and All Rights Reserved</span>
        </a>
      </div>
    </footer>
  );
});
