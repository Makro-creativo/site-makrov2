<template>
  <div>
      <section class="contact-section py-5">
          <h2 class="display-4 text-center mb-4 font-weight-bold title-services">Nuestros Servicios</h2>

          <div class="container">
              <div class="row g-0">
                  <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-stretch">
                      <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                          <img src="../assets/img/ecommerce-icon.gif" alt="Ecommerce servicios" class="img-fluid card-img-top image-ecommerce">
                          <div class="card-body">
                              <p class="card-text">
                                  Haga crecer su empresa de comercio electrónico y permítanos ayudarlo a atraer y convertir a más clientes.
                              </p>
                          </div>
                      </div>
                  </div>

                  <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-stretch">
                    <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                        <img src="../assets/img/design-web.gif" alt="Diseño web" class="img-fluid card-img-top image-design">

                        <div class="card-body">
                            <p class="card-text">
                                Desarrollo y diseño Web a la medida, en Makro Creativo diseñamos Sitios Web 
                                para tú negocio, desde Landing page, sitios ecommerce y ERP. Ven y te cotizamos.
                            </p>
                        </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-stretch">
                      <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                          <img src="../assets/img/video_conference.gif" alt="Video conferencias" class="img-fluid card-img-top image-conference">

                          <div class="card-bdy">
                              <p class="card-text">
                                  Desarrollamos talleres para los empresarios que van empezando para generarles una 
                                  mejor estrategía de Marketing y de ventas en linea.
                              </p>
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
    name: 'Contact'
}
</script>

<style scoped>
    .contact-section {
        background-color: #FFFFFF;
    }

    .title-services {
        color: #000000;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        line-height: 58px;
    }

    .card {
        border: transparent !important;
    }

    .image-ecommerce {
        width: 200px !important;
        height: 200px !important;
    }

    .image-design {
        width: 200px !important;
        height: 200px !important;
    }

    .image-conference {
        width: 200px !important;
        height: 200px !important;
    }
</style>>