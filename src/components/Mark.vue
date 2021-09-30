<template>
  <div>
      <section class="py-7"> 
        <div class="hero-marks">
          <div class="d-flex justify-content-center">
            <h2 class="title-marks mt-6 mr-3 display-5">Estas son las <span class="marks-title">Marcas</span> que confian en nosotros!</h2>
          </div>

          <div class="d-flex justify-content-center mt-4">
            <button class="btn btn-primary">
              Ver todas nuestras marcas
            </button>
          </div>
        </div>

        
        <div class="p-5">
          <h2 class="text-center text-dark display-4 title-marks">Nuestras Marcas!</h2>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Mark'
}
</script>

<style scoped>
  .py-7 {
    padding-top: 8rem;
    padding-bottom: 10rem;
  }

  .hero-marks {
    background-image: url('https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/marcas-3.jpeg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 90vh;
  }

  .title-marks {
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  .mt-6 {
    margin-top: 10rem;
  }

  .marks-title {
    color: #F49422;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

  .btn-primary {
    color: #000;
    background-color: #FFFFFF;
    border-color: #FFFFFF;
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 15%), 0 1px 1px rgb(23 31 56 / 8%) !important;
    border-radius: 1rem;
    transition: all .2s ease;
    font-size: 1rem;
    padding: .8rem;
  }

  .title-marks {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }
</style>