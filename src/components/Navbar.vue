<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-2 fixed-top">
        <div class="container">
            <a class="navbar-brand" href="/">
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
                        <a href="#how-are" class="nav-link">Nosotros</a>
                    </li>

                    <li class="nav-item">
                        <a href="#branding" class="nav-link">Branding</a>
                    </li>

                    <li class="nav-item">
                        <a href="#services" class="nav-link">Servicios</a>
                    </li>

                    <li class="nav-item">
                        <a href="#precios" class="nav-link">Precios</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>

                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <router-link class="dropdown-item" to="/portfolio">Portafolio</router-link>
                            </li>

                            <li>
                                <router-link class="dropdown-item" to="/marcas">Nuestras Marcas</router-link>
                            </li>

                            <li>
                                <hr class="dropdown-divider">
                            </li>

                            <li>
                                <a href="https://sismakro.makrocreativo.com/sismakro/" target="_blank" class="dropdown-item">Conoce Nuestros ERP</a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a href="#contact" class="btn btn-outline-primary">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style scoped>
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