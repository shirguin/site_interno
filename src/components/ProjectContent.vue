<template>
    <div class="projects center">
        <ProjectComp v-for="project in paginatedData" :key="project.id" :project="project" :changeLike="CHANGE_LIKE" />

        <div class="projects__pagination">
            <button class="projects__pagination__button" @click="prevPage" :disabled="pageNumber == 0"> Previous</button>
            <button class="projects__pagination__button" @click="nextPage"
                :disabled="pageNumber == pageCount - 1">Next</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ProjectComp from './ProjectComp.vue';
export default {
    name: 'ProjectContent',
    components: {
        ProjectComp
    },
    data() {
        return {
            pageNumber: 0,
            size: 2,
        };
    },

    computed: {
        ...mapGetters(['getProjects', 'getProjectFilterTag', 'getProjectFilterFlag']),

        projectsFilterList: function () {
            if (this.getProjectFilterFlag) {
                return this.getProjects.filter((project) => project.project_tag === this.getProjectFilterFlag);
            } else {
                return this.getProjects;
            }
        },

        pageCount() {
            return Math.ceil(this.projectsFilterList.length / this.size)
        },

        paginatedData() {
            const start = this.pageNumber * this.size;
            const end = start + this.size;
            return this.projectsFilterList.slice(start, end);
        }
    },
    methods: {
        ...mapMutations(['CHANGE_LIKE']),

        nextPage() {
            this.pageNumber++;
        },

        prevPage() {
            this.pageNumber--;
        }
    },

};
</script>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.projects {
    width: 1300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    &__pagination {
        display: flex;
        justify-content: center;
        gap: 50px;

        &__button {
            height: 52px;
            width: 70px;
            color: #292F36;
            font-family: Jost;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
            text-transform: capitalize;
            border: 1px solid #CDA274;
            border-radius: 15px;
            margin-top: 61px;
            background-color: #fff;
        }

        &__button:hover {
            background-color: #CDA274;
            color: #fff;
        }
    }

}
</style>