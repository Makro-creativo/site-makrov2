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
                                    Nuestro Portafolio
                                </h1>
                                <div class="process-step-title-overlay">
                                     Nuestro Portafolio
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
            <span class="filter" :class="{ active: currentFilter === 'PÁGINAS WEB' }" @click="setFilterCategory('PÁGINAS WEB')">PÁGINAS WEB</span>
            <span class="filter" :class="{ active: currentFilter === 'MARCAS' }" @click="setFilterCategory('MARCAS')">MARCAS</span>
            <span class="filter" :class="{ active: currentFilter === 'ERP' }" @click="setFilterCategory('ERP')">ERP</span>
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

      <a href="https://api.whatsapp.com/send?phone=523327154184&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios." class="float" target="_blank">
        <i class="fab fa-whatsapp my-float"></i>
      </a>

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
                { title: 'KayCNC', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web-02.svg', category: 'PÁGINAS WEB', url: 'https://kaycnc.com/' },
                { title: 'Recargas de Extintores', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web-03.svg', category: 'PÁGINAS WEB', url: 'https://recargadeextintores.mx/' },
                { title: 'Roleh', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web-04.svg', category: 'ECOMMERCE', url: 'https://roleh.mx/' },
                { title: 'Corsa Distribuciones', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web-05.svg', category: 'PÁGINAS WEB', url: 'http://www.corsadistribuciones.com/' },
                { title: 'Kenji', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web-06.svg', category: 'PÁGINAS WEB', url: 'https://kenjisoluciones.com' },
                { title: 'Brecha 21', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web-07.svg', category: 'ECOMMERCE', url: 'https://brecha21.com/' },
                { title: 'Marca Méxicana', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web-08.svg', category: 'ECOMMERCE', url: 'https://marcasmexicanas.com.mx/' },
                { title: 'Ferretería Eben Ezer', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web-09.svg', category: 'ECOMMERCE', url: 'https://ferreteriaeben-ezer.com/' },
                { title: 'Remmex', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web-10.svg', category: 'ECOMMERCE', url: 'https://remmex.com.mx/' },
                { title: 'Grupo Montellano', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web-11.svg', category: 'PÁGINAS WEB', url: 'https://grupomontellano.com.mx/' },
                { title: 'lisports', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web-12.svg', category: 'ECOMMERCE', url: 'https://lisports.com.mx/' },
                { title: 'Metales Barajas', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web-13.svg', category: 'PÁGINAS WEB', url: 'http://metalesbarajas.mx/' },
                { title: 'Tortillería la Esperanza', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/la-esperanza.svg', category: 'LANDING', url: 'https://laesperanzatortilleria.com/' },
                { title: 'Orgullo Azul', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web_15.svg', category: 'PÁGINAS WEB', url: 'https://orgulloazul.com.mx/' },
                { title: 'Farmacia Nisi', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web_16.svg', category: 'ECOMMERCE', url: 'https://nisifarmaciaylaboratorio.com/' },
                { title: 'Yacht Club', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-02.svg', category: 'MARCAS' },
                { title: 'Elegance', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-03.svg', category: 'MARCAS' },
                { title: 'Tamales Jalisco', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-04.svg', category: 'MARCAS' },
                { title: 'Tacos el Amigo', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-05.svg', category: 'MARCAS' },
                { title: 'Marcas Méxicanas', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-06.svg', category: 'MARCAS' },
                { title: 'Frutas Castro', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-07.svg', category: 'MARCAS' },
                { title: 'Dominius', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-08.svg', category: 'MARCAS' },
                { title: 'Deli Bananas', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-09.svg', category: 'MARCAS' },
                { title: 'Chik Style Accesorios', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-10.svg', category: 'MARCAS' },
                { title: 'Luba Viajes', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-11.svg', category: 'MARCAS' },
                { title: 'Arbojal', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-12.svg', category: 'MARCAS' },
                { title: 'Tacos al Vapor, Amigo Beto', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-13.svg', category: 'MARCAS' },
                { title: 'Vida nueva', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-14.svg', category: 'MARCAS' },
                { title: 'Manos con Tradición', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-15.svg', category: 'MARCAS' },
                { title: 'Remmex', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-16.svg', category: 'MARCAS' },
                { title: 'Feyplos', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-17.svg', category: 'MARCAS' },
                { title: 'Black Jack Design', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-18.svg', category: 'MARCAS' },
                { title: 'Artejido', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/logos-marcas/logos-19.svg', category: 'MARCAS' },
                { title: 'Internet mx', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/internetmx.svg', category: 'PÁGINAS WEB', url: 'https://internetmx.com.mx/' },
                { title: 'Equiparsa', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web17.svg', category: 'PÁGINAS WEB', url: 'https://equiparsa.com/' },
                { title: 'Joyeriaaurum', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/potafolio_web/portfolio-images/portafolio_pagina_web18.svg', category: 'ECOMMERCE', url: 'https://joyeriaaurum.com/' },
                { title: 'BioAgrosel', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web_agrosel.jpg', category: 'PÁGINAS WEB', url: 'https://bioagrosel.com/' },
                { title: 'Página de Aviso sin conexión InternetMX', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web_noviembre-02.svg', category: 'PÁGINAS WEB', url: 'https://sin-conexion.internetmx.com.mx/' },
                { title: 'ERP Makro Creativo', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web_noviembre-03.svg', category: 'ERP', url: 'https://sismakro.makrocreativo.com/sismakro/' },
                { title: 'ERP InternetMX', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web_noviembre.svg', category: 'ERP', url: 'https://internetmxsis.internetmx.com.mx/' },
                { title: 'LexyMas', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_20.jpg', category: 'PÁGINAS WEB', url: 'http://www.lexymas.com.mx/' },
                { title: 'Agritec', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web_21.svg', category: 'PÁGINAS WEB', url: 'http://www.agritec.com.mx/' },
                { title: 'ERP Tortillería la Esperanza', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web_20-02.svg', category: 'ERP', url: 'https://tortilleriaesperanzasis.laesperanzatortilleria.com/esperanzasis/index.html' },
                { title: 'Guzvar', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/guzvar.svg', category: 'ECOMMERCE', url: 'https://www.guzvar.com/' },
                { title: 'Feyplos', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web_feyplos.svg', category: 'ECOMMERCE', url: 'https://feyplos.com/' },
                { title: 'Nutremi', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web_nutremi.svg', category: 'ECOMMERCE', url: 'http://www.nutremi.com/' },
                { title: 'ERP Medical Sys', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/inicio_sesion.svg', category: 'ERP', url: 'http://medicalsistem.makrocreativo.com/' },
                { title: 'Tienda Mercado Libre Guzvar', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/tienda_guzvar_portafolio_pagina_web.svg', category: 'ECOMMERCE', url: 'https://www.tienda.guzvar.com/' },
                { title: 'Tienda Mercado Libre Nutremi', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/portafolio_pagina_web_tienda_nutremi.svg', category: 'ECOMMERCE', url: 'https://www.tienda.nutremi.com/' },
                { title: 'ERP Erupción', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/erupcion_portafolio_pagina_web.svg', category: 'ERP', url: 'https://eruptionsprayer.com/' },
                { title: 'Aleina', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/aleina.svg', category: 'PÁGINAS WEB', url: 'https://www.aleina.com.mx/' },
                { title: 'Shofer', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/mishofer_pagina_web.svg', category: 'ERP', url: 'https://mishofer.com/' },
                { title: 'Muur', image: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/portfolio-images/murr_pagina_web.svg', category: 'PÁGINAS WEB', url: 'https://partesparamotormurr.com/' },
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
        min-height: 60vh;
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

    .float{
        position:fixed;
        width:60px;
        height:60px;
        bottom:40px;
        right:40px;
        background-color:#25d366;
        color:#FFF;
        border-radius:50px;
        text-align:center;
        font-size:30px;
        box-shadow: 2px 2px 3px #999;
        z-index:100;
    }

    .my-float{
        margin-top:16px;
    }
</style>