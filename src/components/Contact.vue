<template>
  <div id="contact">
      <section class="contact-section p-5">
          <div class="container">
              <div class="row g-0">
                  <div class="col-md-10 col-sm-12 col-lg-10 col-xl-10 col-xxl-10 mx-auto">
                      <div class="card shadow-lg p-5 mb-5 bg-body rounded">
                          <div class="row">
                              <div class="col-md-7 col-sm-12 col-lg-7 col-xl-7 col-xxl-7">
                                  <h2 class="mb-4 title-contact">Somos el impacto que tú marca necesita!</h2>
                                  <hr class="hr-card">

                                  <p class="text-muted">
                                      <img src="../assets/img/phonelink-ring.gif" alt="Télefono empresaria" class="img-fluid phone">
                                      +52 33 2715 4184
                                  </p>

                                  <p class="text-muted">
                                    <img src="../assets/img/location.gif" alt="Dirección" class="img-fluid addres">
                                     Avenida los Arcos #937
                                  </p>

                                  <p class="text-muted">
                                      <img src="../assets/img/send_email.gif" alt="Correo electronico" class="img-fluid email">
                                      hola@makrocreativo.com
                                  </p>

                                  <p class="text-muted">
                                      <img src="../assets/img/city.gif" alt="Ciudad" class="img-fluid city">
                                      Jalisco, México.
                                  </p>

                                  <ul class="list-group list-group-horizontal">
                                      <li class="list-group-item">
                                          <a href="#">
                                            <i class="icon ion-logo-facebook"></i>
                                          </a>
                                      </li>

                                      <li class="list-group-item">
                                          <a href="#">
                                            <i class="icon ion-logo-twitter"></i>
                                          </a>
                                      </li>

                                      <li class="list-group-item">
                                        <a href="#">
                                            <i class="icon ion-logo-instagram"></i>
                                        </a>
                                      </li>

                                      <li class="list-group-item">
                                          <a href="#">
                                            <i class="icon ion-logo-whatsapp"></i>
                                          </a>
                                      </li>
                                  </ul>

                                  <a href="#" class="btn btn-outline-primary btn-lg mt-4 shadow">Reserva una consulta</a>
                              </div>

                              <div class="col-md-5 col-sm-12 col-lg-5 col-xl-5 col-xxl-5">
                                  <h3 class="mb-4 subtitle-form d-flex justify-content-center mt-3">También puedes contactarnos desde aquí</h3>

                                  <form action="">
                                      <div class="form-group">
                                          <input type="text" class="form-control" placeholder="Nombre">
                                      </div>

                                      <div class="form-group mt-4">
                                          <input type="email" class="form-control" placeholder="Correo electronico">
                                      </div>

                                      <div class="form-group mt-4">
                                          <input type="text" class="form-control" placeholder="Tema de la consulta">
                                      </div>

                                      <div class="form-group mt-4">
                                          <textarea cols="10" rows="7" class="form-control" placeholder="Mensaje"></textarea>
                                      </div>

                                      <div class="d-grid gap-2">
                                          <input type="submit" value="Enviar" class="btn btn-secondary mt-2 shadow">
                                      </div>
                                  </form>
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
    name: 'Contact'
}
</script>

<style scoped>
    .contact-section {
        background-color: #FFFFFF;
    }

    .card {
        border: transparent !important;
        border-top: 5px solid #FABB6E !important;
        border-bottom-right-radius: 20px !important;
        border-bottom-left-radius: 20px !important;
        border-top-left-radius: 20px !important;
        border-top-right-radius: 20px !important;
    }

    .title-contact {
        font-family: 'Poppins', sans-serif;
        font-size: 2.5em;
        font-weight: 400;
    }

    .hr-card {
        height: 5px;
        margin-left: 0%;
        width: 50%;
        background-color:#F6971B;
        font-weight: bold;
    }

    .phone {
        width: 50px;
        height: 50px;
    }

    .addres {
        width: 50px;
        height: 50px;
    }

    .email {
        width: 50px;
        height: 50px;
    }

    .city {
        width: 50px;
        height: 50px;
    }

    .btn-outline-primary {
        border-color:#FABB6E !important;
        color: #FABB6E !important;
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .btn-outline-primary:hover {
        background-color: #FABB6E !important;
        color: #FFFFFF !important;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .subtitle-form {
        font-size: 1.1em;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .btn-secondary {
        background-color: #FABB6E !important;
        border: transparent !important;
        border-radius: 10px;
        padding: .8rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .form-control {
        padding: 15px;
        border-radius: 10px !important;
        border: 2px solid #E6E6E6 !important;
        outline: none !important;
        font-family: 'Poppins', sans-serif;
        font-size: .9em;
        color: #E6E6E6 !important;
    }

    .ion-logo-facebook {
        font-size: 1.5em;
        color: #FAC27C;
    }

    .ion-logo-twitter {
        font-size: 1.5em;
        color: #FAC27C;
    }

    .ion-logo-instagram {
        font-size: 1.5em;
        color: #FAC27C;
    }

    .ion-logo-whatsapp {
        font-size: 1.5em;
        color: #FAC27C;
    }

    .list-group-item {
        border: transparent !important;
    }
</style>