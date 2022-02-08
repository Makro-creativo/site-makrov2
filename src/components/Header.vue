<template>
  <div id="home" class="filter-blur">
      <section class="section-header py-7 d-flex">
          <div class="container align-self-center">
              <div class="row">
                  <div class="col-lg-7 d-flex">
                      <div class="align-self-center">
                          <section class="section-process">
                            <div class="section-container">
                                <div class="process-steps-container container-medium with-padding">
                                    <div class="process-step-container process-step-1">
                                        <div class="process-step-title-container">
                                            <h1 class="process-step-title">
                                                Impulso para crecer.
                                            </h1>

                                            <div class="process-step-title-overlay">
                                                Impulso para crecer.
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </section>
                          
                          <p class="text-muted mt-4">
                              Somos el impacto que tú negocio necesita.
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
        margin: 0;
        line-height: 1.2em;
        letter-spacing: -4px;
    }

    .section-process .process-steps-container .process-step-container .process-step-title-container .process-step-title-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: auto;
        padding-right: 0px;
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

    .title {
        line-height: 58px;
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