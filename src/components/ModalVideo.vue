<template>
  <div>
      <section>
          <div class="modal fade" id="video-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="embed-responsive embed-responsive-21by9" style="width: 100% !important;">
                        <iframe width="100%" height="670" class="embed-responsive-item" src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/Logo Makro Animado.mp4"></iframe>
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
    name: 'ModalVideo'
}
</script>

<style scoped>

</style>