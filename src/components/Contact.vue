<template>
  <div id="contact">
      <section class="contact-section p-5">
          <div class="container">
              <div class="row g-0">
                  <div class="col-md-10 col-sm-12 col-lg-10 col-xl-10 col-xxl-10 mx-auto">
                      <div class="card shadow-lg p-5 mb-5 bg-body rounded">
                          <div class="row">
                              <div class="col-md-7 col-sm-12 col-lg-7 col-xl-7 col-xxl-7">
                                  <h2 class="mb-4 title-contact text-sm-start text-md-start text-lg-start text-xl-start">Somos el impacto que tu marca necesita</h2>
                                  <hr class="hr-card">

                                  <p class="text-muted">
                                      <img src="../assets/img/phonelink-ring.gif" alt="Télefono empresaria" class="img-fluid phone">
                                      33 3149 8145
                                  </p>

                                  <p class="text-muted">
                                      <img src="https://img.icons8.com/ios-filled/50/000000/whatsapp--v4.png" class="img-fluid whatsapp-web mr-6">
                                      33 2715 4184
                                  </p>


                                  <p class="text-muted">
                                    <img src="../assets/img/location.gif" alt="Dirección" class="img-fluid addres">
                                     Col. Jardines del Bosque Guadalajara Jalisco
                                  </p>

                                  <p class="text-muted">
                                      <img src="../assets/img/send_email.gif" alt="Correo electronico" class="img-fluid email">
                                      hola@makrocreativo.com
                                  </p>

                                  <p class="text-muted">
                                      <img src="../assets/img/city.gif" alt="Ciudad" class="img-fluid city">
                                      www.makrocreativo.com
                                  </p>

                                  <ul class="list-group list-group-horizontal">
                                      <li class="list-group-item">
                                          <a href="https://www.facebook.com/makrocreativo" target="_blank">
                                            <i class="icon ion-logo-facebook"></i>
                                          </a>
                                      </li>

                                      <li class="list-group-item">
                                        <a href="https://www.instagram.com/makro_creativo/?utm_medium=copy_link" target="_blank">
                                            <i class="icon ion-logo-instagram"></i>
                                        </a>
                                      </li>

                                      <li class="list-group-item">
                                          <a href="https://api.whatsapp.com/send?phone=523327154184&text=Hola, %20Necesito%20más%20información" target="_blank">
                                            <i class="icon ion-logo-whatsapp"></i>
                                          </a>
                                      </li>
                                  </ul>

                                  <a href="#" class="btn btn-outline-primary btn-lg mt-4 shadow">Reserva una consulta</a>
                              </div>

                              <div class="col-md-5 col-sm-12 col-lg-5 col-xl-5 col-xxl-5">
                                  <h3 class="mb-4 subtitle-form d-flex justify-content-center mt-4 text-lg-center text-sm-center text-md-center">También puedes contactarnos desde aquí</h3>

                                  <form @submit.prevent="submitForm" class="p-2">
                                      <div class="form-group">
                                          <input v-model="form.name" type="text" class="form-control" placeholder="Nombre" required>
                                      </div>

                                      <div class="form-group mt-4">
                                          <input v-model="form.email" type="email" class="form-control" placeholder="Correo electronico" required>
                                      </div>

                                      <div class="form-group mt-4">
                                          <input v-model="form.consulting" type="text" class="form-control" placeholder="Tema de la consulta" required>
                                      </div>

                                      <div class="form-group mt-4">
                                          <textarea v-model="form.message" cols="10" rows="7" class="form-control" placeholder="Mensaje" required></textarea>
                                      </div>

                                      <div class="d-grid gap-2 mt-4">
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

    <a href="https://api.whatsapp.com/send?phone=523327154184&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios." class="float" target="_blank">
        <i class="fab fa-whatsapp my-float"></i>
    </a>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Contact',

    data() {
        return {
            form: {
                name: '',
                email: '',
                consulting: '',
                message: '',
            }
        }
    },

    methods: {
        submitForm() {
            axios.post('http://localhost:3000/api/send-email', this.form)
                .then(response => {
                    if(response) {
                        console.log(response);
                    }
                })
                .catch(error => {
                    console.error(error);
                })

                this.form = '';
        }
    }
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

    .mr-6 {
        margin-right: 15px;
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

    .whatsapp-web {
        width: 35px;
        height: 35px;
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


    .float{
        position:fixed;
        width:60px;
        height:60px;
        bottom:40px;
        right:40px;
        background-color:#25d366;
        color:#FFF;
        border-radius:50px;
        text-align:center;
        font-size:30px;
        box-shadow: 2px 2px 3px #999;
        z-index:100;
    }

    .my-float{
        margin-top:16px;
    }
</style>