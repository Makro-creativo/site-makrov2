<template>
  <div>
      <section class="projects-section p-7">
        <div class="section-descriptions">
            <section class="section-process">
                <div class="section-container d-flex justify-content-center">
                    <div class="process-steps-container container-medium with-padding">
                        <div class="process-step-container process-step-1">
                            <div class="process-step-title-container text-center">
                                <h1 class="process-step-title text-center mt-6">
                                    Nuestro Portafolio Web
                                </h1>
                                <div class="process-step-title-overlay">
                                     Nuestro Portafolio Web
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>

        <div class="d-flex justify-content-center p-5">
            <span class="filter" :class="{ active: currentFilter === 'TODO' }" @click="setFilterCategory('TODO')">TODO</span>
            <span class="filter" :class="{ active: currentFilter === 'ECOMMERCE' }" @click="setFilterCategory('ECOMMERCE')">ECOMMERCE</span>
            <span class="filter" :class="{ active: currentFilter === 'LANDING' }" @click="setFilterCategory('LANDING')">LANDING</span>
        </div>

        <div class="container">
            <div class="row">
                <div v-for="project in projects" :key="project.title" class="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 mt-4">
                    <div class="project" v-if="currentFilter === project.category || currentFilter === 'TODO'">
                        <div class="hovereffect shadow rounded">
                            <img :src="project.image" :alt="project.image" class="img-fluid shadow rounded">

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

      <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue'

export default {
    name: 'Projects',
    components: {
        Footer,
    },

    data() {
        return {
            currentFilter: 'TODO',
            projects: [
                { title: 'KayCNC', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web-02.svg', category: 'LANDING', url: 'https://kaycnc.com/' },
                { title: 'Recargas de Extintores', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web-03.svg', category: 'LANDING', url: 'https://recargadeextintores.mx/' },
                { title: 'Roleh', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web-04.svg', category: 'ECOMMERCE', url: 'https://roleh.mx/' },
                { title: 'Corsa Distribuciones', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web-05.svg', category: 'LANDING', url: 'http://www.corsadistribuciones.com/' },
                { title: 'Kenji', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web-06.svg', category: 'LANDING', url: 'https://kenjisoluciones.com' },
                { title: 'Brecha 21', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web-07.svg', category: 'ECOMMERCE', url: 'https://brecha21.com/' },
                { title: 'Marca Méxicana', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web-08.svg', category: 'ECOMMERCE', url: 'https://marcasmexicanas.com.mx/' },
                { title: 'Ferretería Eben Ezer', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web-09.svg', category: 'ECOMMERCE', url: 'https://ferreteriaeben-ezer.com/' },
                { title: 'Remmex', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web-10.svg', category: 'ECOMMERCE', url: 'https://remmex.com.mx/' },
                { title: 'Grupo Montellano', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web-11.svg', category: 'LANDING', url: 'https://grupomontellano.com/' },
                { title: 'lisports', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web-12.svg', category: 'ECOMMERCE', url: 'https://lisports.com.mx/' },
                { title: 'Metales Barajas', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web-13.svg', category: 'LANDING', url: 'http://metalesbarajas.mx/' },
                { title: 'Tortillería la Esperanza', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web-14.svg', category: 'LANDING', url: 'https://laesperanzatortilleria.com/' },
                { title: 'Orgullo Azul', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web_15.svg', category: 'LANDING', url: 'https://orgulloazul.com.mx/' }
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
    .section-process {
        --gradient-color-1: #F6971B;
        --gradient-color-2: #2E2D41;
        --gradient-color-3: #f13813;
        --gradient-color-4: #c9c9c9;
    }

    .section-process .process-steps-container .process-step-container .process-step-title-container {
        margin-top: -16px;
        position: relative;
    }

    .section-process .process-steps-container .process-step-container .process-step-title-container .process-step-title, .section-process .process-steps-container .process-step-container .process-step-title-container .process-step-title-overlay {
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 80px;
        font-weight: 900;
        line-height: 1.2em;
        letter-spacing: -4px;
    }

    .section-process .process-steps-container .process-step-container .process-step-title-container .process-step-title-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    .section-process .process-steps-container .process-step-container.process-step-1 .process-step-title-overlay {
        background-image: linear-gradient(90deg, var(--gradient-color-1), var(--gradient-color-2));
        animation: animated-gradient-title-1 8s infinite;
    }

    .section-process .process-steps-container .process-step-container.process-step-2 .process-step-title-overlay {
        background-image: linear-gradient(90deg, var(--gradient-color-2), var(--gradient-color-3));
        animation: animated-gradient-title-2 8s infinite;
    }

    .section-process .process-steps-container .process-step-container.process-step-3 .process-step-title-overlay {
        background-image: linear-gradient(90deg, var(--gradient-color-3), var(--gradient-color-1));
        animation: animated-gradient-title-3 8s infinite;
    }

    @keyframes animated-gradient-title-1 {
        0%, 16.667%, 100% {
            opacity: 1;
        }
        33.333%, 83.333% {
            opacity: 0;
        }
    }

    @keyframes animated-gradient-title-2 {
        0%, 16.667%, 66.667%, 100% {
            opacity: 0;
        }
        33.333%, 50% {
            opacity: 1;
        }
    }

    @keyframes animated-gradient-title-3 {
        0%, 50%, 100% {
            opacity: 0;
        }
        66.667%, 83.333% {
            opacity: 1;
        }
    }

    .p-7 {
        padding-top: 8rem;
        padding-bottom: 10rem;
    }

    .projects-section {
        background-color: #FFFFFF;
    }

    .description-makro {
        font-size: 1.5em;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: #FFFFFF;
    }

    .title-portfolio {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        color: #FFFFFF;
    }

    .column {
        margin: 0 auto;
        display: table;
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

    .section-descriptions {
        background-color: #2E2D41;
        width: 100%;
        height: 80vh;
    }

    .logo-makro {
        width: 200px;
        height: 200px;
    }

    h1 {
        color: #FFFFFF !important;
    }

    .mt-6 {
        margin-top: 10rem !important;
    }
</style>