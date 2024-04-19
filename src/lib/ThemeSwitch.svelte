<script>
    import theme_icon from '../assets/theme_but.svg'
    function themeSwith() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
    }
</script>


<button on:click={themeSwith} id="theme-toggle" style="position: absolute; top: 10px; right: 10px;"><img src={ theme_icon } class="theme-icon small-circular" alt="theme icon"></button>