<script>
    function themeSwith() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
    };
</script>

<button on:click={themeSwith} id="theme-toggle" style="position: absolute; top: 10px; right: 10px;">Toggle Theme</button>