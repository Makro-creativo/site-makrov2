<template>
  <div>
      <section class="branding-section py-5" id="branding">
          <section class="section-process">
            <div class="section-container d-flex justify-content-center">
                <div class="process-steps-container container-medium with-padding">
                    <div class="process-step-container process-step-1">
                        <div class="process-step-title-container text-center">
                            <h1 class="process-step-title text-center">
                                Ayudamos a tu negocio con:
                            </h1>
                            <div class="process-step-title-overlay">
                                Ayudamos a tu negocio con:
                            </div>
                    </div>
                </div>
                                               
                </div>
            </div>
          </section>
          <hr class="mt-4">

          <div class="container">
              <div class="row">
                  <div class="email d-flex justify-content-start">
                      <div class="card mb-3 card-email shadow-lg p-3 mb-5 bg-body rounded">
                          <div class="row g-0">
                              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                                  <div class="blob_1"></div>
                              </div>

                              <div class="col-md-8 col-sm-12 col-lg-8 col-xl-8 col-xxl-8">
                                  <h5 class="card-title">
                                      Branding
                                  </h5>
                                  <hr class="hr-card">
                                  <p class="card-text text-muted">
                                      El activo intangible más valioso que tienen las empresas es: SU MARCA Creamos marcas atractivas,
                                      memorables y estratégicas.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="section-course d-flex justify-content-end">
                      <div class="card mb-3 card-course shadow-lg p-3 mb-5 bg-body rounded">
                          <div class="row g-0">
                              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                                  <div class="blob_2"></div>
                              </div>

                              <div class="col-md-8 col-sm-12 col-lg-8 col-xl-8 col-xxl-8">
                                  <h5 class="card-title">
                                      Registro de marca
                                  </h5>
                                  <hr class="hr-card">
                                  <p class="card-text text-muted">
                                      Asesoría. Tramite y Gestión para el registro de tu marca ante el IMP (Instituto Méxicano de la Propiedad Industrial)
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="course-community d-flex justify-content-start">
                      <div class="card mb-3 card-planation shadow-lg p-3 mb-5 bg-body rounded">
                          <div class="row g-0">
                              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                                  <div class="blob_3"></div>
                              </div>

                              <div class="col-md-8 col-sm-12 col-lg-8 col-xl-8 col-xxl-8">
                                  <h5 class="card-title">
                                      Desarrollo de Sistemas de Software
                                  </h5>
                                  <hr class="hr-card">
                                  <p class="card-text text-muted">
                                      Desarrollamos software a la Medida, Aplicaciones de Escritorio, Aplicaciones Web, ERP y CMR.
                                      Los ERP (Planificación de Recursos Empresariales) son una herramienta que ayuda a 
                                      las empresas a optimizar recursos.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="course-community d-flex justify-content-end">
                      <div class="card card-course-community shadow-lg p-3 mb-5 bg-body rounded">
                          <div class="row g-0">
                              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                                  <div class="blob_4"></div>
                              </div>

                              <div class="col-md-8 col-sm-12 col-lg-8 col-xl-8-col-xxl-8">
                                  <h5 class="card-title">
                                      Mercadotecnia Digital
                                  </h5>
                                  <hr class="hr-card">
                                  <p class="card-text">
                                      Manejo estratégico de Redes Sociales Posicionamiento en Buscadores
                                      Estratégias de Venta Online
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="design-web d-flex justify-content-start">
                      <div class="card card-course-community shadow-lg p-3 mb-5 bg-body rounded">
                          <div class="row g-0">
                              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                                  <div class="blob_5"></div>
                              </div>

                              <div class="col-md-8 col-sm-12 col-lg-8 col-xl-8-col-xxl-8">
                                  <h5 class="card-title">
                                      Consultoría Empresariales
                                  </h5>
                                  <hr class="hr-card">
                                  <p class="card-text">
                                    Diagnóstico y revisión de Procesos Empresariales.
                                    Desarrollo del Capital Humano (Cursos y Capacitaciones)
                                    Coach en Liderazgo
                                  </p>

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
    name: 'Branding',
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
        font-size: 65px;
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


    .branding-section {
        background-color:#FFFFFF;
    }

    .title-branding {
        color: #000000;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    }

    hr {
        height: 5px;
        margin-left: 50%;
        width: 15%;
        background-color: #F6971B;
        font-weight: bold;
    }

    .img-email {
        width: 100px;
        height: auto;
    }

    .card-email {
        width: 800px !important;
        border-radius: 10px !important;
        border-color: transparent !important;
    }

    .card-course {
        width: 800px !important;
        border-radius: 10px !important;
        border-color: transparent !important;
    }

    .img-course {
        width: 100px;
        height: auto;
    }

    .card-title {
        color: #FCCE96 !important;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    }

    .hr-card {
        height: 5px;
        margin-left: 0%;
        width: 50%;
        background-color:#F6971B;
        font-weight: bold;
    }

    .card-text {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .img-planation {
        width: 100px;
        height: auto;
    }

    .card-planation {
        width: 800px !important;
        border-radius: 10px !important;
        border-color: transparent !important;
    }

    .card-course-community {
        width: 800px !important;
        border-radius: 10px !important;
        border-color: transparent !important;
    }

    .img-community {
        width: 100px;
        height: auto
    }

    .blob_1 {
        width: 200px;
        height: 200px;
        background: url('../assets/img/iconos_makro_400x400.svg');
        background-size: cover;
        animation: animate 5s linear infinite;
        background-color:#FABB6E;
    }

    @keyframes animate {
        0%, 100% {
            border-radius: 64% 36% 27% 73% / 55% 58% 42% 45%;
        }

        25% {
            border-radius: 73% 27% 26% 38% / 73% 36% 64% 27%;
        }

        50% {
            border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%;
        }

        75% {
            border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
        }
    }

    .blob_2 {
        width: 200px;
        height: 200px;
        background: url('../assets/img/iconos_makro_400x400-02.svg');
        background-size: cover;
        animation: animate 5s linear infinite;
        background-color: #AADD78;
    }

    @keyframes animate {
        0%, 100% {
            border-radius: 64% 36% 27% 73% / 55% 58% 42% 45%;
        }

        25% {
            border-radius: 73% 27% 26% 38% / 73% 36% 64% 27%;
        }

        50% {
            border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%;
        }

        75% {
            border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
        }
    }

    .blob_3 {
        width: 200px;
        height: 200px;
        background: url('../assets/img/iconos_makro_400x400-03.svg');
        background-size: cover;
        animation: animate 5s linear infinite;
        background-color: #67ADE7;
    }

    @keyframes animate {
        0%, 100% {
            border-radius: 64% 36% 27% 73% / 55% 58% 42% 45%;
        }

        25% {
            border-radius: 73% 27% 26% 38% / 73% 36% 64% 27%;
        }

        50% {
            border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%;
        }

        75% {
            border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
        }
    }

    .blob_4 {
        width: 200px;
        height: 200px;
        background: url('../assets/img/iconos_makro_400x400-04.svg');
        background-size: cover;
        animation: animate 5s linear infinite;
        background-color: #EA95E6;
    }

    @keyframes animate {
        0%, 100% {
            border-radius: 64% 36% 27% 73% / 55% 58% 42% 45%;
        }

        25% {
            border-radius: 73% 27% 26% 38% / 73% 36% 64% 27%;
        }

        50% {
            border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%;
        }

        75% {
            border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
        }
    }

    .blob_5 {
        width: 200px;
        height: 200px;
        background: url('../assets/img/iconos_makro_400x400-05.svg');
        background-size: cover;
        animation: animate 5s linear infinite;
        background-color: #F89898;
    }

    @keyframes animate {
        0%, 100% {
            border-radius: 64% 36% 27% 73% / 55% 58% 42% 45%;
        }

        25% {
            border-radius: 73% 27% 26% 38% / 73% 36% 64% 27%;
        }

        50% {
            border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%;
        }

        75% {
            border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
        }
    }

    .blob_6 {
        width: 200px;
        height: 200px;
        background: url('../assets/img/iconos_makro_400x400-06.svg');
        background-size: cover;
        animation: animate 5s linear infinite;
        background-color: #BC8BE8;
    }

    @keyframes animate {
        0%, 100% {
            border-radius: 64% 36% 27% 73% / 55% 58% 42% 45%;
        }

        25% {
            border-radius: 73% 27% 26% 38% / 73% 36% 64% 27%;
        }

        50% {
            border-radius: 28% 72% 44% 56% / 49% 40% 60% 51%;
        }

        75% {
            border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
        }
    }
</style>