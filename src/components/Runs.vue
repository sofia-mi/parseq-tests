<template>
    <div class="analysis-container">
        <div class="metadata">
            <router-link to="/runs/1">CPTKH6</router-link>
            <span class="mh-1 mr-2">23.11.2020</span>
            <h4>Test sample 01</h4><span class="ml-1 mr-2">S1</span>
            <div class="flex mr-2">
                <div class="tooltip-container"><span class="mh-1">TEST v1</span></div>
                <div class="badge lot-badge lot-badge--succeeded">1210-0</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Test',
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

    .metadata {
        display: flex;
        align-items: center;
        padding: 1.5rem 2rem;
    }
</style>
