<template>
  <div id="precios">
      <section class="section-price p-5 ">
          <div class="container">
              <div class="row justify-content-center mb-4 mb-lg-6 text-white">
                  <div class="col-12 col-lg-9 text-center">
                      <h2 class="fw-light mb-4 title">Elija el plan adecuado para su negocio</h2>
                      <h3 class="text-center mb-4 fw-light">Nuestros <span class="price-text">Precios</span></h3>
                  </div>
              </div>

              <div class="row">
                  <div class="col-12 col-lg-6 col-xl-4 mb-5 mb-lg-0">
                    <div class="card shadow-lg p-5 border-gray-300 rounded-md mb-3 px-2 text-center">
                        <div class="card-header border-0 bg-white p-3">
                            <h2 class="h3 text-primary mb-4">Plan Inicial</h2>

                            <span class="d-block">
                                <span class="display-2 text-dark fw-bold">
                                    <span class="align-top font-medium">$</span>
                                    19
                                </span>

                                <span class="d-block text-gray font-small">
                                    / Por més
                                </span>
                            </span>
                        </div>

                        <div class="card-body">
                            <ul class="list-unstyled mb-4">
                                <li class="list-item pb-3">
                                    <strong>1</strong>
                                    Dominio gratis
                                </li>

                                <li class="list-item pb-3">
                                    Spacio de almacenamiento
                                    <strong>5GB</strong>
                                </li>

                                <li class="list-item pb-3">
                                    <strong>100k</strong>
                                    Visitante mensuales
                                </li>

                                <li class="list-item pb-3">Sitio de ensayo con un clic</li>
                                <li class="list-item pb-3">Asistente de motor de búsqueda</li>
                                <li class="list-item pb-3">Soporte comunitario</li>

                                <div class="d-grid">
                                    <a href="#" class="btn btn-primary">Seleccionar Plan Inicial</a>
                                </div>
                            </ul>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-lg-6 col-xl-4 mb-5 mb-lg-0">
                     <div class="card shadow-lg p-5 border-gray-300 rounded-md mb-3 px-2 text-center">
                        <div class="card-header border-0 bg-white p-3">
                            <h2 class="h3 text-primary mb-4">Plan Estándar</h2>

                            <span class="d-block">
                                <span class="display-2 text-tertiary fw-bold">
                                    <span class="align-top font-medium">$</span>
                                    49
                                </span>

                                <span class="d-block text-gray font-small">
                                    / Por més
                                </span>
                            </span>
                        </div>

                        <div class="card-body">
                            <ul class="list-unstyled mb-4">
                                <li class="list-item pb-3">
                                    <strong>5</strong>
                                    Dominio gratis
                                </li>

                                <li class="list-item pb-3">
                                    Spacio de almacenamiento
                                    <strong>15GB</strong>
                                </li>

                                <li class="list-item pb-3">
                                    <strong>400k</strong>
                                    Visitante mensuales
                                </li>

                                <li class="list-item pb-3">Sitio de ensayo con un clic</li>
                                <li class="list-item pb-3">Asistente de motor de búsqueda</li>
                                <li class="list-item pb-3">Soporte comunitario</li>

                                <div class="d-grid">
                                    <a href="#" class="btn btn-secondary">Seleccionar Plan Estandar</a>
                                </div>
                            </ul>
                        </div>
                    </div>
                  </div>

                  <div class="col-12 col-lg-6 col-xl-4 mb-5 mb-lg-0">
                      <div class="card shadow-lg p-5 border-gray-300 rounded-md mb-3 px-2 text-center">
                        <div class="card-header border-0 bg-white p-3">
                            <h2 class="h3 text-primary mb-4">Plan Pro</h2>

                            <span class="d-block">
                                <span class="display-2 text-dark fw-bold">
                                    <span class="align-top font-medium">$</span>
                                    199
                                </span>

                                <span class="d-block text-gray font-small">
                                    / Por més
                                </span>
                            </span>
                        </div>

                        <div class="card-body">
                            <ul class="list-unstyled mb-4">
                                <li class="list-item pb-3">
                                    <strong>10</strong>
                                    Dominio gratis
                                </li>

                                <li class="list-item pb-3">
                                    Spacio de almacenamiento
                                    <strong>Ilimitado</strong>
                                </li>

                                <li class="list-item pb-3">
                                    <strong>10M</strong>
                                    Visitante mensuales
                                </li>

                                <li class="list-item pb-3">Sitio de ensayo con un clic</li>
                                <li class="list-item pb-3">Asistente de motor de búsqueda</li>
                                <li class="list-item pb-3">Soporte comunitario</li>

                                <div class="d-grid">
                                    <a href="#" class="btn btn-primary">Seleccionar Plan Pro</a>
                                </div>
                            </ul>
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
    name: 'Precing'
}
</script>

<style scoped>
    .section-price {
        background-color: #2E2D41;
    }

    .title {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .text-primary {
        color: #242e4c!important;
    }

    .align-top {
        vertical-align: top !important;
    }

    .font-medium {
        font-size: 1.25rem;
        font-weight: 300;
    }

    .fw-bold {
        font-weight: 600 !important;
    }

    .btn-primary {
        color: #fff;
        background-color: #242e4c;
        border-color: #242e4c;
        box-shadow: inset 0 1px 0 rgb(255 255 255 / 15%), 0 1px 1px rgb(23 31 56 / 8%) !important;
        border-radius: 1rem;
        transition: all .2s ease;
        font-size: 1rem;
        padding: .8rem;
    }

    .btn-secondary {
        color: #fff;
        background-color: #F6971B;
        border-color: #F6971B;
        box-shadow: inset 0 1px 0 rgb(255 255 255 / 15%), 0 1px 1px rgb(23 31 56 / 8%) !important;
        border-radius: 1rem;
        transition: all .2s ease;
        font-size: 1rem;
        padding: .8rem;
    }

    .price-text {
        color: #F6971B;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        font-size: 1.2em;
    }

    .text-tertiary {
        color: #F6971B;
    }

    .card {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
    }
</style>