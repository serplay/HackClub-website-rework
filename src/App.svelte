<script lang="ts">
  import github from "./assets/icons/github.svg"
  import discord from "./assets/icons/discord.svg"
  import facebook from "./assets/icons/facebook.svg"
  import hackclub from "./assets/icons/hackclub.svg"
  import ThemeSw from "./lib/ThemeSwitch.svelte"
</script>

<main>
  <ThemeSw />

  <footer>
    <div class="bar"></div>
    <div class="footer-icons">
      <a href="https://www.facebook.com/LiceumPB" class="footer-link" style="margin: 0 25px;" target="_blank">
        <img src={facebook} class="theme-icon medium-rounded" alt="facebooklink"/>
      </a>
      <a href="https://hackclub.com" class="footer-link" style="margin: 0 25px;" target="_blank">
        <img src={hackclub} class="theme-icon medium-rounded" alt="hackclub organisation link"/>
      </a>
      <a href="https://github.com/ALOPB-Hack-Club" class="footer-link" style="margin: 0 25px;" target="_blank">
        <img src={github} class="theme-icon medium-rounded" alt="github organisation link"/>
      </a>
      <a href="https://discord.gg/yourinvitecode" class="footer-link" style="margin: 0 25px;" target="_blank">
        <img src={discord} class="theme-icon medium-rounded" alt="discord community link"/>
      </a>
    </div>
  </footer>
  
</main>
