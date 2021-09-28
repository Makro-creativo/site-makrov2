<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-2 fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/img/logo_makro_creativo_web_color.svg" alt="" width="120" height="100">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="icon ion-md-menu"></i>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Inicio</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/nosotros">Nosotros</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/branding">Branding</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/servicios">Servicios</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="btn btn-outline-primary" to="/contacto">Contacto</router-link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .bg-light {
        background-color: #FFFFFF !important;
        font-family: 'Poppins', sans-serif;
    }

    .nav-link {
        color: #000000 !important;
        font-size: 1.2em;
        font-weight: 400;
        padding: .8rem 1rem !important;
        font-family: 'Poppins', sans-serif;
    }

    .btn-outline-primary {
        border-color: #FABB6E !important;
        color: #FABB6E;
        border-radius: 20px;
        padding: .6rem 1rem !important;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    }

    .btn-outline-primary:hover {
        background-color: #FABB6E !important;
        color: #FFFFFF;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    }

    .navbar-toggler {
        font-size: 40px;
        border: transparent !important;
    }

    button.navbar-toggler:focus {
        outline: none;    
    }
</style>