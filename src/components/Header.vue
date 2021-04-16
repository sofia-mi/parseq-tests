<template>
    <div id="app-container" data-v-app="">
        <div id="app">
            <div class="toolbar flex">
                <span class="ml-1"><router-link to="/" class="home-link">Parseq Tests</router-link></span>
                <nav class="nav">
                    <router-link to="/runs" class="nav-link">Запуски</router-link>
                    <router-link to="/analyses" class="nav-link">Анализы</router-link>
                </nav>
                <a href="/dataUpload" class="ml-auto" style="text-decoration: none;">
                    <button class="md-btn-contained"
                            style="color: white; text-decoration: none; background-color: var(--mountain-meadow);">
                        Загрузить данные
                    </button>
                </a>
                <div class="user-menu mh-1" tabindex="-1">
                    <button class="user-menu--btn flex" style="padding: 0.5rem 0.8rem;">
                        <span class="ellipsis" style="flex-grow: 0; padding: 0.5rem;">aslepchenkov</span>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    export default {
        name: 'Header',
        props: {
            msg: String
        }
    }
</script>


<style scoped>
    :root {
        --primary-color: hsla(202, 91%, 13%, 1);
        --secondary-color: hsla(198, 48%, 63%, 1);
        --dark-sky-blue: hsla(198, 48%, 63%, 1);
        --steel-teal: hsla(187, 29%, 44%, 1);
        --mountain-meadow: hsla(163, 91%, 39%, 1);
        --princeton-orange: hsla(26, 84%, 55%, 1);
        --light-green: hsl(123, 43%, 59%);
    }

    * {
        padding: 0;
        margin: 0;
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.6;
    }

    input,
    button,
    select,
    textarea {
        font: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        --mountain-meadow: hsla(163, 91%, 39%, 1);

    }

    button:disabled {
        cursor: not-allowed;
    }

    .flex {
        display: flex;
        align-items: center;
    }

    .toolbar {
        background-color: var(--primary-color);
        color: white;
        --primary-color: hsla(202, 91%, 13%, 1);
    }

    .md-btn-contained {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 6.4em;
        min-height: 2.6em;
        padding: 0 1.1em;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.0892857143em;
        border-radius: 4px;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }

    .ml-auto {
        margin-left: auto;
    }

    .nav {
        margin-left: 3rem;
    }

    .nav-link {
        padding: 1rem;
        color: white;
        text-transform: uppercase;
        text-underline: none;
    }

    .mh-1 {
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .ml-1 {
        margin-left: 1rem;
    }

    .mr-2 {
        margin-right: 2rem;
    }

    .home-link {
        color: white;
        text-decoration: none;
    }
</style>
