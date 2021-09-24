<template>
  <div id="header">
      <section class="section-header py-7 d-flex">
          <div class="container align-self-center">
              <div class="row">
                  <div class="col-lg-7 d-flex">
                      <div class="align-self-center">
                          <h1 class="display-4 text-dark font-weight-bold mb-3 typewriter line-text">
                              Impulso para <span class="text-orange">crecer.</span>
                          </h1>
                          <p class="text-muted mb-4">
                              Creación de Marcas Arquitectura de Marca Re-branding <br> Actualización y renovación de Marcas Registro de Marca.
                          </p>
                          <div class="btn btn-dark mt-4">Nuestro portafolio</div>
                      </div>
                  </div>

                  <div class="col-lg-5">
                    <img src="../assets/img/header-image.svg" alt="Header image" class="img-fluid mb-3">
                  </div>
              </div>
          </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FDF3E5" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,106.7C672,64,768,32,864,42.7C960,53,1056,107,1152,106.7C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .py-7 {
        padding-top: 10rem;
        padding-bottom: 1rem;
    }

    .section-header {
        background-color: #FFFFFF;
    }

    .section-header h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
    }

    .text-orange {
        font-family: 'Poppins', sans-serif;
        color: #FABB6E;
        font-weight: bold;
    }

    .btn-dark {
        background-color: #FABB6E !important;
        border-color: #FABB6E !important;
        padding: 1rem;
        border-radius: 15px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .typewriter {
      animation: typewriter 4s steps(36) 1s 1 normal both,
      blinkTextCursor 500ms steps(36) infinite normal;
    }

    @keyframes typewriter {
      from {
            width: 0;
      }
      to {
            width: 16em;
      }
    }

    @keyframes blinkTextCursor {
      from {
            border-right-color: rgba(255, 255, 255, 0.75);
      }
      to {
            border-right-color: transparent;
      }
   }       

   .line-text {
      width: 16em;
      border-right: 2px solid rgba(255, 255, 255, 0.75);
      white-space: nowrap;
      overflow: hidden;transform: translateY(-50%);
   }
</style>