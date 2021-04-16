<template>
    <img
            class="loading-icon centered"
            src="../assets/loading-cubes.svg"
            v-if="isDownloading"
    />
    <div
            class="centered"
            v-if="isEmptyResult()">
        Ничего не найдено
    </div>

    <div class="table module">
        <div class="table-row">
            <div class="table-head "><strong>значимость</strong></div>
            <div class="table-head "><strong>имя варианта</strong></div>
            <div class="table-head "><strong>генотип</strong></div>
            <div class="table-head "><strong>запись варианта в номенклатуре HGVS</strong></div>
            <div class="table-head "><strong>внешние источники</strong></div>
        </div>
        <div class="table-row">
            <div class="filter-cell "><select class="box-decoration text-op " v-model="filters.significance">
                <option :value="null" disabled hidden>Выберите из списка ...</option>
                <option v-for="(significance, index) in significancesOptions" :value="significance" :key="index">
                    {{significance }}
                </option>
            </select>
            </div>
            <div class="filter-cell"><input class="input-decoration" v-model="filters.alleleName"
                                            placeholder="Введите имя варианта"/>
            </div>
            <div class="filter-cell"><select class="box-decoration text-op" v-model="filters.genotype">
                <option :value="null" disabled hidden>Выберите из списка ...</option>
                <option v-for="(genotype, index) in genotypesOptions" :value="genotype" :key="index">{{ genotype }}
                </option>
            </select></div>
            <div class="filter-cell"><input class="input-decoration" v-model="filters.hgvs"
                                            placeholder="Введите запись варианта в номенклатуре HGVS"/>
            </div>
            <div class="filter-cell">
                <button class="button-dec" @click="reset">Сбросить фильтры</button>
            </div>
        </div>

        <template v-for="(variant, index) in filtered" :key="index">
            <div class="table-row table-group" @click="toggle(index)">
                <div class="table-cell">{{ variant.significance }}</div>
                <div class="table-cell">{{ variant.alleleName }}</div>
                <div class="table-cell">{{ variant.genotype }}</div>
                <div class="table-cell">{{ variant.hgvs.g }}, {{ variant.hgvs.c }}, {{ variant.hgvs.p }}</div>
                <div class="table-cell">

                    <div class="details-colour">
                        <i class="arrow " :class="{down: activeRow === index, right:  activeRow !== index}"></i>Подробнее
                    </div>
                    <div class="wrapper" v-if="activeRow === index">
                        <ul v-for="(externalSource, indexES) in variant.externalSourceEntries" :key="indexES">
                            <li class="listEl "> ID : {{externalSource.id}}</li>
                            <li class="listEl">Ссылка : {{externalSource.link}}</li>
                            <li class="listEl">Наименование :{{externalSource.database.name}}</li>
                            <li class="listEl">Версия :{{externalSource.database.version}}</li>
                            <li class="listEl">Категория :{{externalSource.database.category}}</li>
                            <li class="listEl">Значимость : {{externalSource.significance}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "VariantsTable",
        data: () => ({
            activeRow: -1,
            significancesOptions: [
                "PATHOGENIC",
                "LIKELY_PATHOGENIC",
                "BENIGN",
                "UNDEFINED",
                "UNCERTAIN",
                "LIKELY_BENIGN",
            ],
            genotypesOptions: [
                "HETEROZYGOTE", "HOMOZYGOTE"
            ],
            filters: {
                significance: null,
                alleleName: null,
                genotype: null,
                hgvs: null,
            }
        }),
        computed: {
            ...mapGetters({
                currentVariants: 'currentVariants',
                isDownloading: 'isDownloading',
            }),
            filtered() {
                if (!this.currentVariants) {
                    return [];
                }
                return this.currentVariants
                    .filter(dataEvent => !this.filters.significance || dataEvent.significance === this.filters.significance)
                    .filter(dataEvent => !this.filters.alleleName ||
                        dataEvent.alleleName.toUpperCase().indexOf(this.filters.alleleName.toUpperCase()) > -1
                    )
                    .filter(dataEvent => !this.filters.genotype || dataEvent.genotype === this.filters.genotype)
                    .filter(dataEvent => !this.filters.hgvs ||
                        dataEvent.hgvs.g.toUpperCase().indexOf(this.filters.hgvs.toUpperCase()) > -1 ||
                        dataEvent.hgvs.c.toUpperCase().indexOf(this.filters.hgvs.toUpperCase()) > -1 ||
                        dataEvent.hgvs.p.toUpperCase().indexOf(this.filters.hgvs.toUpperCase()) > -1
                    );
            },

        },
        methods: {
            toggle(rowIndex) {
                if (this.activeRow === rowIndex) {
                    this.activeRow = -1;
                } else {
                    this.activeRow = rowIndex;
                }
            },
            reset() {
                this.filters.significance = null;
                this.filters.alleleName = null;
                this.filters.genotype = null;
                this.filters.hgvs = null;
            },
            isEmptyResult() {
                if (this.isDownloading) {
                    return false;
                } else {
                    return this.filtered.length === 0;
                }
            }
        },
    }

</script>

<style scoped>
    .table {
        display: table;
        width: 100%;
        border-collapse: collapse;
    }

    .table-row {
        display: table-row;
    }


    .table-cell, .table-head {
        display: table-cell;
        padding: 3px 10px;
        border: none;

    }

    .table-head {
        text-align: left;
        text-transform: uppercase;
        padding-top: 20px;
        color: rgba(85, 91, 96, .5);
    }

    .table-cell {
        padding: 25px 15px;
    }

    .table-group {
        border-top: 1px solid rgba(220, 220, 220, 1);
    }

    .module {
        margin-bottom: 2em;
        background: rgba(255, 255, 255, 1);
        color: rgba(37, 40, 42, 1);
        float: left;
        width: 100%;
        height: 100%;
        box-shadow: 0 5px 20px rgba(0, 0, 0, .5);
        border-radius: .5em;
    }

    .filter-cell {
        display: table-cell;
        padding: 3px 10px;
        text-align: left;
        text-transform: uppercase;
        color: rgba(85, 91, 96, .5);
        background-color: transparent;
        cursor: pointer;

    }

    .filter-cell::before {
        position: absolute;
        content: '\f063';
        font-size: 2em;
        color: #FFF;
        right: 20px;
        top: calc(50% - 0.5em);
    }

    .filter-cell::before {
        transform: rotateX(-180deg);
    }

    .box-decoration {
        border: none;
        padding-bottom: 10px;
        padding-top: 10px;
        outline: none
    }

    .input-decoration {
        text-transform: none;
        align-content: baseline;
        border-bottom-color: rgba(0, 0, 0, .42);
        font-size: 1rem;
        fill: #dbdbdb;
        size: letter;
        outline: none
    }

    .text-op {
        text-transform: none;
        align-content: baseline;
        border-bottom-color: rgba(0, 0, 0, .42);
        border-bottom: 1px solid;
        font-size: 1rem;
        fill: #dbdbdb;
        size: letter;
        outline: none
    }

    .details-colour {
        text-transform: uppercase;
        color: rgba(85, 91, 96, .5);
        outline: none;
    }

    .details-colour:focus {
        outline: none;
    }

    input {
        text-transform: lowercase;
        padding: 10px 0;
        border-width: 0 0 2px 0;
        width: 100%;
        margin-top: 15px;
        transition: border-color 0.3s;
    }

    input:focus,
    input[type=submit] {
        border: 0;
        alignment-baseline: bottom;
        background-color: white;
        color: black;
    }

    .button-dec {
        margin: 5px 0 5px 0;
        height: 40px;
        width: 180px;
        display: flex;
        justify-content: right;
        align-items: center;
        cursor: pointer;
        transition: all 0.25s ease;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        text-transform: uppercase;
        color: aliceblue;
        background-color: #09BE8B;
        border-color: white;
    }

    .button-dec:hover {
        filter: brightness(110%);
        transform: translate(-3px, -3px) scale(1.02);
    }

    details > summary {
        outline: none;
    }

    .loading-icon {
        width: 50px;
        filter: invert(100%);
        margin-top: 20px;
    }

    .centered {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 18px;
        font-weight: 500;
        opacity: 0.5;
        z-index: 9999;
    }

    .wrapper {
        position: center;
        text-transform: lowercase;
        color: #787878;
        width: 100%;
        border: none;
    }

    ul {
        margin: 0;
        padding: 1em;
    }

    ul li {
        list-style: none;
        display: flex;
    }

    ul li:before {

        padding-right: 0.5em;
    }

    ul li:before {
        font-weight: lighter;
        font-size: 2em;
    }

    ul li:after {

        font-weight: bold;
        font-size: 2em;
        padding-left: 0.5em;
        align-self: flex-end;
    }

    .arrow {
        border: solid rgba(85, 91, 96, .5);
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        margin-right: 5px;
    }

    .right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }

    .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }
</style>
