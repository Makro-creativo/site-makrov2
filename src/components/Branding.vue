<template>
  <div id="branding">
      <section class="branding-section py-5">
          <h2 class="text-center display-4 mb-4 font-weight-bold title-branding">Branding</h2>
          <hr>

          <div class="container">
              <div class="row">
                  <div class="email d-flex justify-content-start">
                      <div class="card mb-3 card-email shadow-lg p-3 mb-5 bg-body rounded">
                          <div class="row g-0">
                              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                                  <img src="../assets/img/MAKREC-1.png" alt="Imagen de makro" class="img-fluid img-email">
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
                                  <img src="../assets/img/MAKREC-2.png" alt="Cursos Makro" class="img-fluid img-course">
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
              </div>
          </div>
      </section>
  </div>
</template>

<script>
export default {

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
        height: 150px;
    }

    .card-email {
        width: 600px !important;
        border-radius: 10px !important;
        border-color: transparent !important;
    }

    .card-course {
        width: 600px !important;
        border-radius: 10px !important;
        border-color: transparent !important;
    }

    .img-course {
        width: 100px;
        height: 200px;
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
</style>