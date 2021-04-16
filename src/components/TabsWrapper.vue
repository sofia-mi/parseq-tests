<template>
    <div class="tabs-component2">
        <tabs>
            <tab name="Генетические варианты">
                <VariantsTable/>
            </tab>
        </tabs>
    </div>
</template>

<script>
    import {Tab, Tabs} from 'vue3-tabs-component';
    import VariantsTable from "./VariantsTable";

    export default {
        name: "TabsWrapper",
        components: {
            VariantsTable,
            Tabs,
            Tab
        },
    }
</script>

<style scoped>
    .tabs-component2 {
        -webkit-overflow-scrolling: touch;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        flex-direction: row;
        font-size: 1.2rem;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        overflow: hidden;
        overflow-x: auto;
        padding: 0;
    }

    >>> .tabs-component-tabs {
        padding: 0;
        margin-bottom: 1.5rem;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-bottom: 1px solid #dbdbdb;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        flex-grow: 1;
        flex-shrink: 0;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        list-style: none;
        line-height: 2;
        border-bottom: 1px solid #dbdbdb;
    }

    >>> .tabs-component-tab-a {
        padding: .5em 1em;
        border-bottom: 1px solid #dbdbdb;
        color: #4a4a4a;
        margin-bottom: -1px;

        cursor: pointer;
        text-decoration: none;
        -webkit-transition: none 86ms ease-out;
        transition: none 86ms ease-out;
    }

    >>> .is-active {
        border-bottom-color: #00d1b2;
        color: #00d1b2;
    }
</style>
