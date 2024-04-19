<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import github from "super-tiny-icons/images/svg/github.svg"
  import ThemeSw from "./lib/ThemeSwitch.svelte"
</script>

<main>
  <ThemeSw />
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
  <footer>
    <div class="footer-container">
      <a href="https://www.facebook.com/yourpage" class="footer-link" target="_blank">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://hackclub.com" class="footer-link" target="_blank">
        <i class="fas fa-globe"></i>
      </a>
      <a href="https://github.com/ALOPB-Hack-Club" class="footer-link" target="_blank">
        <img src={github} class="medium-rounded" alt="github organisation link"/>
      </a>
      <a href="https://discord.gg/yourinvitecode" class="footer-link" target="_blank">
        <i class="fab fa-discord"></i>
      </a>
    </div>
  </footer>
  
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
