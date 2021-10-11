<template>
  <div>
      <section class=""> 
        <div class="hero-marks p-7">
          <div class="text-center">
            <section class="section-process">
                <div class="section-container d-flex justify-content-center">
                    <div class="process-steps-container container-medium with-padding">
                        <div class="process-step-container process-step-1">
                            <div class="process-step-title-container text-center">
                                <h1 class="process-step-title text-center mt-7">
                                    Marcas que confian en Nosotros
                                </h1>
                                <div class="process-step-title-overlay">
                                    Marcas que confian en Nosotros
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
          </div>
        </div>
      

        <div>
          <ImagesMarks />
        </div>

      </section>

      <Footer />
  </div>
</template>

<script>
import ImagesMarks from './ImagesMarks.vue'
import Footer from './Footer.vue'

export default {
  name: 'Mark',
  components: {
    ImagesMarks,
    Footer,
  }
}
</script>

<style scoped>
  .subtitle-marks {
    background-color: #2E2D41;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  .text-marks {
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 2.5rem;
  }

  .hero-marks {
    background-color: #2E2D41;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 65vh;
    border-bottom-right-radius: 100% 50%;
    
  }

  .mt-7 {
    margin-top: 9rem !important;
  }

  .title-marks {
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  .p-7 {
    margin-top: 6rem;
    margin-bottom: 10rem;
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
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  .title-marks {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

  .section-process {
        --gradient-color-1: #F6971B;
        --gradient-color-2: #2E2D41;
        --gradient-color-3: #f13813;
        --gradient-color-4: #c9c9c9;
    }

    .section-process .process-steps-container .process-step-container .process-step-title-container {
        margin-top: -16px;
        position: relative;
    }

    .section-process .process-steps-container .process-step-container .process-step-title-container .process-step-title, .section-process .process-steps-container .process-step-container .process-step-title-container .process-step-title-overlay {
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 60px;
        font-weight: 900;
        line-height: 1.2em;
        letter-spacing: -4px;
    }

    .section-process .process-steps-container .process-step-container .process-step-title-container .process-step-title-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    .section-process .process-steps-container .process-step-container.process-step-1 .process-step-title-overlay {
        background-image: linear-gradient(90deg, var(--gradient-color-1), var(--gradient-color-2));
        animation: animated-gradient-title-1 8s infinite;
    }

    .section-process .process-steps-container .process-step-container.process-step-2 .process-step-title-overlay {
        background-image: linear-gradient(90deg, var(--gradient-color-2), var(--gradient-color-3));
        animation: animated-gradient-title-2 8s infinite;
    }

    .section-process .process-steps-container .process-step-container.process-step-3 .process-step-title-overlay {
        background-image: linear-gradient(90deg, var(--gradient-color-3), var(--gradient-color-1));
        animation: animated-gradient-title-3 8s infinite;
    }

    @keyframes animated-gradient-title-1 {
        0%, 16.667%, 100% {
            opacity: 1;
        }
        33.333%, 83.333% {
            opacity: 0;
        }
    }

    @keyframes animated-gradient-title-2 {
        0%, 16.667%, 66.667%, 100% {
            opacity: 0;
        }
        33.333%, 50% {
            opacity: 1;
        }
    }

    @keyframes animated-gradient-title-3 {
        0%, 50%, 100% {
            opacity: 0;
        }
        66.667%, 83.333% {
            opacity: 1;
        }
    }

    h1 {
      color: #FFFFFF !important;
    }
</style>