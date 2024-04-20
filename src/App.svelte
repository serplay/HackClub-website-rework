<script lang="ts">
  import github from "./assets/icons/github.svg"
  import discord from "./assets/icons/discord.svg"
  import facebook from "./assets/icons/facebook.svg"
  import hackclub from "./assets/icons/hackclub.svg"
  import ThemeSw from "./lib/ThemeSwitch.svelte"
  import Menu from "./lib/menu.svelte"
  import ALOPB from "./assets/icons/ALOPB-vector.svg"
</script>

<main>
  <header>
        <div class="menu-icon">
          <Menu />
        </div>
        <div class="logo-container">
          <a href="." class="logo-link">
            <img src={ ALOPB } class="logo-icon medium-rounded" alt="Logo">
          </a>
        </div>
      <ThemeSw />
  </header>
  <nav class="menu" id="menu">
    Dokumentacja
    Eventy
    Plany na przyszłość
    Jakiś shit
    Uhhh
    Idk
  </nav>
  <div class="bar"></div>
  <div>
    <h1>
      MAIN PAGE IDK COS TU BEDZIE, NAPEWNO SCHEDULE EVENTÓW AKA HACKATONÓw
    </h1>
  </div>
  
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
