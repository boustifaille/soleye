<script>
    import "../app.css"
    import imgSettings from "$lib/assets/gear-solid.svg"
    import logo from "$lib/assets/logo.svg"
</script>

<header>
    <div class="logo">
        <div>Soleye</div>
        <img src={logo} alt="" width="50px">
    </div>
    <nav>
        <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/">helloword</a></li>
            <li><a href="/">helloword</a></li>
        </ul>
    </nav>
    <div class="settings">
        <img src={imgSettings} alt="settings" width="30px" />
    </div>
</header>

<slot />

<style>

    .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 2rem;
    }

    .settings img {
        filter: invert(1);
    }

    header {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        padding: 15px 20px 0 20px;
    }

    nav {
        display: none;
        width: 80%;
        height: 100%;
    }

    ul {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    ul a {
        color: white;
    }
</style>