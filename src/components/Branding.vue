<template>
  <div id="branding">
      <section class="branding-section py-5">
          <h2 class="text-center display-4 mb-4 font-weight-bold title-branding">Branding</h2>
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
                                      Diagnóstico de Marca y Empresa
                                  </h5>
                                  <hr class="hr-card">
                                  <p class="card-text text-muted">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing Lorem ipsum dolor sit amet,
                                      consectetur adipiscing Lorem ipsum dolor sit 
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
                                      Cursos Mercadoctecnia
                                      esencial para emprendedores
                                  </h5>
                                  <hr class="hr-card">
                                  <p class="card-text text-muted">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing Lorem ipsum dolor sit amet,
                                      consectetur adipiscing Lorem ipsum dolor sit
                                      amet, consectetur adipiscing
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
                                      Planeación y Proyección Efectiva
                                  </h5>
                                  <hr class="hr-card">
                                  <p class="card-text text-muted">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing Lorem ipsum dolor sit amet,
                                      consectetur adipiscing Lorem ipsum dolor sit
                                      amet, consectetur adipiscing
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
                                      Cursos Community Manager
                                  </h5>
                                  <hr class="hr-card">
                                  <p class="card-text">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing
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
        background: url('../assets/img/MAKREC_01.svg');
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
        background: url('../assets/img/MAKREC-02.svg');
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
        background: url('../assets/img/MAKREC-03.svg');
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
        background: url('../assets/img/MAKREC-04.svg');
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
</style>