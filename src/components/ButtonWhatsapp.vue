<template>
  <div>
      <!-- Sección de floating boton de whatsapp -->
     <a href="https://api.whatsapp.com/send?phone=523310746053&text=Hola, %20Quiero%20más%20información" target="_blank" class="btn-floating">
         <span style="font-size: 1.5em;">
            <i class="fab fa-whatsapp float-my"></i>
         </span>
     </a>
     <!-- Termina sección de floating boton de whatsapp -->

  </div>
</template>

<script>
export default {
    name: 'ButtonWhatsapp'
}
</script>

<style scoped>
    .btn-floating {
        position: fixed;
        width: 60px;
        height: 60px;
        right: 40px;
        background-color: #0C9;
        color: #FFF;
        border-radius: 50px;
        text-align: center;
        box-shadow: 2px 2px 3px #999;
    }
</style>