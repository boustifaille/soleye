<script>
    import "../app.css"
</script>

<header>
    <div class="logo"></div>
    <nav>
        <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/">helloword</a></li>
            <li><a href="/">helloword</a></li>
        </ul>
    </nav>
</header>

<slot />

<style>
    header {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
    }

    nav {
        width: 50%;
        height: 100%;
    }

    ul {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>