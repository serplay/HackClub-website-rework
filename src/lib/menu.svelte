<script>
    import menu from '../assets/icons/menu.svg'
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
        if (menuOpen) {
            document.getElementById("menu").classList.add("open");
        } else {
            document.getElementById("menu").classList.remove("open");
        }
  }
</script>

<button on:click={toggleMenu} style="width: 50px; height: 50px; border-radius: 10px"id="menu-button"><img src={ menu } class="theme-icon small-circular" style="" alt="menu icon"></button>
