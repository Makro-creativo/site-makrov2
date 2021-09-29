<template>
  <div>
      <section class="projects-section py-7">
        <p class="text-muted text-center description-makro">
            Hola! Nosotros somos Makro Creativo
        </p>
        <div class="column">
            <h1 class="display-4 title-portfolio">Nuestro portafolio Web! .<span>&#160;</span> </h1>
        </div>

        <div class="d-flex justify-content-center p-5">
            <span class="filter" :class="{ active: currentFilter === 'TODO' }" @click="setFilterCategory('TODO')">TODO</span>
            <span class="filter" :class="{ active: currentFilter === 'BRANDING' }" @click="setFilterCategory('BRANDING')">BRANDING</span>
            <span class="filter" :class="{ active: currentFilter === 'ECOMMERCE' }" @click="setFilterCategory('ECOMMERCE')">ECOMMERCE</span>
            <span class="filter" :class="{ active: currentFilter === 'LANDING' }" @click="setFilterCategory('LANDING')">LANDING</span>
        </div>

        <div class="container">
            <div class="row">
                <div v-for="project in projects" :key="project.title" class="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 mt-4">
                    <div class="project" v-if="currentFilter === project.category || currentFilter === 'TODO'">
                        <div class="card shadow rounded">
                            <img :src="project.image" :alt="project.image" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title text-muted">
                                    {{ project.title }}
                                </h5>

                                <button class="btn btn-outline-primary">
                                    Ver proyecto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
    name: 'Projects',

    data() {
        return {
            currentFilter: 'TODO',
            projects: [
                { title: 'Site', image: 'https://images.unsplash.com/photo-1537791283348-23f76009bf60?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', category: 'BRANDING' },
                { title: 'Second site', image: 'https://images.unsplash.com/photo-1537791283348-23f76009bf60?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', category: 'ECOMMERCE' },
                { title: 'Other site', image: 'https://images.unsplash.com/photo-1537791283348-23f76009bf60?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', category: 'LANDING' }
            ],
        }
    },

    methods: {
        setFilterCategory(filter) {
            this.currentFilter = filter;
        }
    }
}
</script>

<style scoped>
    .py-7 {
        padding-top: 10rem;
        padding-bottom: 10rem;
    }

    .projects-section {
        background-color: #FFFFFF;
    }

    .description-makro {
        font-size: 1.5em;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .title-portfolio {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
    }

    .column {
        margin: 0 auto;
        display: table;
    }

    h1 {
        float: left;
        position: relative;
    }

    h1 span {
        position: absolute;
        right: 0;
        width: 0;
        background-color: #FFFFFF;
        border-left: 5px solid #000;

        animation: machine 5s infinite alternate steps(25);
    }

    @keyframes machine {
        from {
            width: 100%;
        }

        to {
            width: 0;
        }
    }

    .filter {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        padding: 6px 6px;
        cursor:pointer;
        border-radius: 6px;
        transition: all 0.35s;
    }

    .filter.active {
        box-shadow:0px 2px 4px 4px #00000026;
    }

    .filter:hover {
        background:lightgray;
    } 

    .project {
        transition: all .35s ease-in-out;
    }

    .card-title {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1em;
        text-transform: uppercase;
    }

    .btn-outline-primary {
        border-color:#FABB6E !important;
        color: #FABB6E !important;
        border-radius: 5px !important;
    }

    .btn-outline-primary:hover {
        background-color: #FABB6E !important;
        color: #FFFFFF !important;
    }
</style>