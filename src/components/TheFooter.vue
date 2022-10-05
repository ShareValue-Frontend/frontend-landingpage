<template>
  <div class="footer">
    <div class="container">
      <div class="row footer-top">
        <div class="col-md-6 col-lg-3 mb-4">
          <h3 class="dark-text mb-4">Meer weten?</h3>
          <h5><a href="https://www.sharevalue.nl/contact"> We horen graag van je!</a></h5>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 ">
          <p class="dark-text fw-bold mb-2">Neem contact op</p>
          <p class="mb-0">
            <a href="tel:+31 182 516 468">
              <i class="fa fa-phone"></i>
              +31 182 516 468
            </a>
          </p>
          <p class="mb-0">
            <a href="mailto:info@sharevalue.nl">
              <i class="fa fa-envelope"></i>
              info@sharevalue.nl
            </a>
          </p>
        </div>
        <div class="col-md-6 col-lg-3 mb-4">
          <p class="dark-text fw-bold mb-2">Kom bij ons langs</p>
          <p class="mb-0">ShareValue B.V.</p>
          <p class="mb-0">Kampenringweg 45A</p>
          <p class="mb-0">2803PE Gouda</p>
        </div>
        <div class="col-md-6 col-lg-3 mb-4">
          <p class="dark-text fw-bold mb-2">Volg ons</p>
          <a href="https://www.linkedin.com/company/sharevaluenl/mycompany/">
            <i class="fa fa-linkedin-square"></i>
          </a>
          <a href="https://twitter.com/ShareValueNL">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/sharevaluenl">
            <i class="fa fa-facebook-square"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="second-footer">
    <div class="container">
      <div class="row footer-bottom">
        <div class="col-lg-6 col-md-4 text-sm-center text-md-start">
          <p>© ShareValue 2022</p>
        </div>
        <div class="col-lg-6 col-md-8 d-flex justify-content-sm-center justify-content-md-end">
          <a href="https://www.sharevalue.nl/algemene-leveringsvoorwaarden">Algemene leveringsvoorwaarden</a>
          <a href="https://www.sharevalue.nl/disclaimer">Disclaimer</a>
          <a href="https://www.sharevalue.nl/algemeen/privacyverklaring">Privacyverklaring</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
	name: 'TheFooter'
})
</script>

<style lang="scss">
.footer {
	background-color: #393d3f;
	color: #fff;
}

.second-footer {
	background-color: #24282a;
	color: #fff;
}

.footer-top {
	padding: 2.5rem;
}

.footer-bottom {
  padding: 1rem 2.5rem;
  font-size: 14px;
     a {
     color: #fff;
     margin-left: 1rem;
     &:hover{
      text-decoration: none;
      color: #8ca2b3;
    }
}
}

p {
  margin-bottom: 0;
   a {
     text-decoration: none;
     color: #fff;
     transition: color 0.2s ease-in;
     font-size: 14px;
     }
}

h5 a {
  font-size: 18px;
  color: #fff;
  text-decoration: none;
    &:hover{
     color: #8ca2b3;
      text-decoration: underline;
    }
    &:focus{
      color: #d6620b;
      text-decoration: underline;
    }
}

p a:hover,
.fa-linkedin-square:hover,
.fa-twitter:hover,
.fa-facebook-square:hover {
	color: #8ca2b3;
	transition: color 0.2s ease-in;
}

.dark-text {
	color: #8ca2b3;
}

.fa-envelope {
	font-size: 12px;
	margin-right: 10px;
}

.fa-phone {
	margin-right: 10px;
}

.fa-linkedin-square,
.fa-twitter,
.fa-facebook-square {
	font-size: 36px;
	color: #fff;
	margin-right: 1rem;
}

@media all and (max-width: 992px) {
	.footer-top {
		text-align: center;
	}
}
</style>
