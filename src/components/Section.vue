<template>
  <div id="how-are">
      <section class="section-how-are py-7">
          <div class="container">
              <div class="row py-6 pb-0">
                  <div class="d-flex col-lg-6">
                      <div class="align-self-center p-4">
                          <h2 class="display-4 font-weight-bold mb-4 title-how-are">
                              Quienes somos?
                          </h2>
                          <p class="text-muted mb-4">
                              Somos un equipo de creativos profesionales y apasionados por <br>
                              las ventas y el diseño. Y estamos comprometidos en hacer <br>
                              crecer tu negocio y posicionar tu marca.
                          </p>
                          <div class="btn btn-danger">
                              Ver nuestros productos
                              
                          </div>
                      </div>
                  </div>

                  <div class="col-lg-6">
                   <img src="../assets/img/section.svg" alt="Section imagen" class="img-fluid my-4 section-image">
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
    .section-how-are {
        background-color: #FFFFFF;
    }

    .py-7 {
        padding-top: 10rem;
        padding-bottom: 10rem;
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

    .section-image {
        color: transparent;
    }
</style>