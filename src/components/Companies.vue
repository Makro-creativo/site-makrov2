<template>
  <div>
      <section class="section-companies"> 
          <div class="section-process">
            <div class="section-container d-flex justify-content-center">
                <div class="process-steps-container container-medium with-padding">
                    <div class="process-step-container process-step-1">
                        <div class="process-step-title-container text-center">
                            <h1 class="process-step-title text-center p-5">
                                Empresas que cofian en nosotros
                            </h1>
                            <div class="process-step-title-overlay p-5">
                                Empresas que cofian en nosotros
                            </div>
                    </div>
                </div>
                                               
                </div>
            </div>
          </div>

       <div class="content-slider">
<div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200_remake.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
		<div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200_remake-02.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
		<div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200-03.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
		<div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200-04.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
		<div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200-05.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
		<div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200-06.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
		<div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200-07.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
		<div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200-08.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
        <div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200-09.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
        <div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200-01.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
        <div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200-02.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
        <div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200-03.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
        <div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200-04.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
		<div class="slide">
			<img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/logos-empresas/iconos_200x200-05.svg" alt="Logos empresas" class="img-fluid rounded shadow-lg">
		</div>
	</div>
</div>

</div>
          
      </section>
  </div>
</template>

<script>
export default {
    name: 'Companies'
}
</script>

<style scoped>
    .section-companies {
        background-color: #FFFFFF;
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
        font-size: 65px;
        font-weight: 900;
        margin: 0;
        line-height: 1.2em;
        letter-spacing: -4px;
    }

    .section-process .process-steps-container .process-step-container .process-step-title-container .process-step-title-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: auto;
        padding-right: 0px;
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

    /* Slider styles */
    .content-slider {
        align-items: center;
        background: #ffff;
        display: flex;
        min-height: 50vh;
        justify-content: center;
    }

    @-webkit-keyframes scroll {
        0% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
        }
        100% {
            -webkit-transform: translateX(calc(-250px * 7));
                    transform: translateX(calc(-250px * 7));
        }
    }

    @keyframes scroll {
        0% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
        }
        100% {
            -webkit-transform: translateX(calc(-250px * 7));
                    transform: translateX(calc(-250px * 7));
        }
    }

    /* Styles slider */

    .slider {
        background: white;
        /*box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);*/
        min-height: 400px;
        margin: auto;
        overflow: hidden;
        position: relative;
        width: 95%;
    }

    .slider::before, .slider::after {
        background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
        content: "";
        height: 100px;
        position: absolute;
        width: 200px;
        z-index: 2;
    }

    .slider::after {
        right: 0;
        top: 0;
        -webkit-transform: rotateZ(180deg);
        transform: rotateZ(180deg);
    }

    .slider::before {
        left: 0;
        top: 0;
    }

    .slider .slide-track {
        -webkit-animation: scroll 40s linear infinite;
        animation: scroll 40s linear infinite;
        display: flex;
        width: calc(250px * 14);
    }

    .slider .slide {
        height: 50px;
        width: 250px;
    }

    .slide img{
        margin-right: 10px;
        border-radius: 15px !important;
    }

</style>