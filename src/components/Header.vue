<template>
  <div id="home">
      <section class="section-header py-7 d-flex">
          <div class="container align-self-center">
              <div class="row">
                  <div class="col-lg-7 d-flex">
                      <div class="align-self-center">
                          <div>
                            <h1 class="display-4 title text-dark font-weight-bold mb-3 effect_machin">
                              Impulso para <span class="text-orange">crecer.                    </span><span class="cursor">&#160;</span>
                            </h1>
                          </div>
                          
                          <p class="text-muted mb-4">
                              Creación de Marcas Arquitectura de Marca Re-branding <br> Actualización y renovación de Marcas Registro de Marca.
                          </p>
                          <hr class="hr-title">

                          <button type="button" class="btn btn-dark mt-4 shadow lift me-1" data-bs-toggle="modal" data-bs-target="#video-modal">
                             <i class="icon ion-md-play lead mr-3"></i>
                              Ve nuestro video
                          </button>
                          
                      </div>
                  </div>
                
                  <div class="col-lg-5">
                    <img src="../assets/img/header-image.svg" alt="Header image" class="img-fluid mb-3">
                  </div>
              </div>
          </div>

          <div id="video">
              <ModalVideo />
          </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FDF3E5" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,106.7C672,64,768,32,864,42.7C960,53,1056,107,1152,106.7C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
</template>

<script>
import ModalVideo from './ModalVideo.vue'

export default {
    name: 'Header',
    components: {
        ModalVideo,
    }
}
</script>

<style scoped>
    .title {
        line-height: 58px;
    }
    
    .effect_machin {
        float: left;
        position: relative;
    }

    .effect_machin .cursor {
        position: absolute;
        right: 0;
        width: 0;
        background-color: #FFFFFF;
        border-left: 1px solid #000;

        animation: machine 5s infinite alternate steps(63);
    }

    @keyframes machine {
        from {
            width: 100%;
        }

        to {
            width: 0;
        }
    }

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
        border-radius: 50px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .hr-title {
        height: 10px;
        margin-left: 0%;
        margin-right: 50%;
        background-color:#F6971B;
    }

    .ion-md-videocam {
        font-size: 20px;
    }
</style>