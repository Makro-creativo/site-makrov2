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
                        <div class="hovereffect shadow rounded">
                            <img :src="project.image" :alt="project.image" class="img-fluid">

                            <div class="overlay">
                                <h2>{{ project.title }}</h2>
                                <a :href="project.url" target="_blank" class="btn btn-outline-primary">Visitar proyecto</a>
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
                { title: 'Site', image: '', category: 'BRANDING' },
                { title: 'Second site', image: '', category: 'ECOMMERCE' },
                { title: 'Tortillería la esperanza', image: '', category: 'LANDING', url: 'https://laesperanzatortilleria.com/' }
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
        margin-top: 10rem !important;
    }

    .btn-outline-primary:hover {
        background-color: #FABB6E !important;
        color: #FFFFFF !important;
        border-color:#FABB6E !important;
    }


    .hovereffect {
        width:100%;
        height:100%;
        float:left;
        overflow:hidden;
        position:relative;
        text-align:center;
        cursor:default;
    }

    .hovereffect .overlay {
        width:100%;
        height:100%;
        position:absolute;
        overflow:hidden;
        top:0;
        left:0;
        opacity:0;
        background-color:rgba(0,0,0,0.5);
        -webkit-transition:all .4s ease-in-out;
        transition:all .4s ease-in-out
    }

    .hovereffect img {
        display:block;
        position:relative;
        -webkit-transition:all .4s linear;
        transition:all .4s linear;
    }

    .hovereffect h2 {
        text-transform:uppercase;
        color:#fff;
        text-align:center;
        position:relative;
        font-size:17px;
        background:#3A454E;
        -webkit-transform:translatey(-100px);
        -ms-transform:translatey(-100px);
        transform:translatey(-100px);
        -webkit-transition:all .2s ease-in-out;
        transition:all .2s ease-in-out;
        padding:10px;
    }

    .hovereffect:hover img {
        -ms-transform:scale(1.2);
        -webkit-transform:scale(1.2);
        transform:scale(1.2);
    }

    .hovereffect:hover .overlay {
        opacity:1;
        filter:alpha(opacity=100);
    }

    .hovereffect:hover h2,.hovereffect:hover {
        opacity:1;
        filter:alpha(opacity=100);
        -ms-transform:translatey(0);
        -webkit-transform:translatey(0);
        transform:translatey(0);
    }

    .hovereffect:hover {
        -webkit-transition-delay:.2s;
        transition-delay:.2s;
    }
</style>