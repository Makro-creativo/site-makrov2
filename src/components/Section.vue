<template>
  <div id="how-are">
      <section class="section-how-are py-5">
          <div class="container">
              <div class="row py-6 pb-0">
                  <div class="d-flex col-lg-6">
                      <div class="align-self-center p-4">
                          <section class="section-process">
                            <div class="section-container">
                                <div class="process-steps-container container-medium with-padding">
                                    <div class="process-step-container process-step-1">
                                        <div class="process-step-title-container">
                                            <h1 class="process-step-title">
                                               Somos
                                            </h1>
                                            <div class="process-step-title-overlay">
                                                Somos
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </section>
                    
                          <hr class="hr-title-how-are">
                          <p class="text-muted mb-4">
                              Somos un equipo de creativos profesionales y apasionados por <br>
                              las ventas y el diseño. Y estamos comprometidos en hacer <br>
                              crecer tu negocio y posicionar tu marca.
                          </p>

                          <a class="btn btn-danger shadow lift me-1" @click="$router.push('marcas')">
                              <i class="icon ion-md-rocket mr-3 lead"></i>
                             Conoce nuestras marcas
                          </a>
                      </div>
                  </div>

                  <div class="col-lg-6">
                   <img src="../assets/img/fondo_figma.png" alt="Section imagen" class="img-fluid my-4">
                 </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
export default {
    name: 'Section'
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
        padding-right: 30px;
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

    .section-how-are {
        background-color: #FFFFFF;
    }

    .title-how-are {
        color: #000000;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
    }

    .btn-danger {
        background-color: #FABB6E !important;
        border-color: #FABB6E !important;
        padding: 1.2rem;
        border-radius: 20px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .hr-title-how-are {
        height: 10px;
        margin-left: 0%;
        margin-right: 50%;
        background-color:#F6971B;
    }
</style>