<template>
  <div class="header">
    <nav class="navbar fixed-top navbar-dark bg-dark navbar-expand-md">
      <div class="container">
        <a class="navbar-brand" href="https://www.sharevalue.nl/">
          <img alt="shareValue" src="../assets/img/shareValueLogo.svg" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent" aria-controls="navContent" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse row g-0 align-items-md-end" id="navContent">
          <div class="col-5">
            <ul class="navbar-nav first-menu mr-auto">
              <li class="nav-item dropdown">
                <a class="nav-link nav-link-ltr dropdown-toggle" href="https://www.sharevalue.nl/expertises">Expertises</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="https://www.sharevalue.nl/expertises/azure">Azure</a>
                  <a class="dropdown-item" href="https://www.sharevalue.nl/expertises/dynamics-365">Dynamics 365</a>
                  <a class="dropdown-item" href="https://www.sharevalue.nl/expertises/front-end">Front-End</a>
                  <a class="dropdown-item" href="https://www.sharevalue.nl/expertises/dotnet">Microsoft .NET</a>
                  <a class="dropdown-item" href="https://www.sharevalue.nl/expertises/microsoft-365">Microsoft 365</a>
                </div>
              </li>
              <li class="nav-item active">
                <a class="nav-link nav-link-ltr" href="https://www.sharevalue.nl/klantcases">Klantcases</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-ltr" href="https://www.sharevalue.nl/updates">Updates</a>
              </li>
            </ul>
          </div>
          <div class="logo col-2">
            <a href="https://www.sharevalue.nl/" class="logo-link" title="ShareValue B.V.">
              <img alt="shareValue" src="../assets/img/shareValueLogo.svg" />
            </a>
          </div>
          <div class="col-5">
            <ul class="navbar-nav mr-auto second-menu d-flex justify-content-end">
              <li class="nav-item">
                <a class="nav-link nav-link-ltr" href="https://www.sharevalue.nl/over-ons">Over ons</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link nav-link-ltr dropdown-toggle" href="https://www.sharevalue.nl/word-onze-collega">Word onze collega</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="https://www.sharevalue.nl/word-onze-collega/vacatures">Vacatures</a>
                  <a class="dropdown-item" href="https://www.sharevalue.nl/word-onze-collega/memberships">Memberships</a>
                  <a class="dropdown-item" href="https://www.sharevalue.nl/word-onze-collega/collegas-aan-het-woord">Collega’s aan het woord</a>
                  <a class="dropdown-item" href="https://www.sharevalue.nl/word-onze-collega/stagelopen">Stage lopen</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-ltr" href="https://www.sharevalue.nl/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "TheNavbar",
};
</script>

<style lang="scss">
.container {
  max-width: 1280px !important;
  margin: 0 auto;
}

.logo,
.navbar-brand {
  img {
    width: 160px;
    height: 60px;
  }
}
.navbar {
  .nav-item {
    .dropdown-menu {
      display: none;
    }
    &:hover{
    .dropdown-menu {
      display: block;
    }
    }
    .dropdown-toggle {
      &::after{
        margin-left: 10px;
        margin-bottom: -3px;
      }
    }
  }
}

.nav-link:focus,
.nav-link:hover {
  color: #ee7623 !important;
}

.nav-link::before {
  transition: 300ms;
  height: 2px;
  content: "";
  position: absolute;
  background-color: #ee7623;
}

.nav-link-ltr::before {
  width: 0%;
  bottom: 5px;
}

.nav-link-ltr:hover::before {
  width: 90%;
}

.navbar-toggler:focus {
     box-shadow: none !important; 
}

@media all and (min-width: 1200px) {
  .navbar-collapse {
    padding: 0 2.5rem;
  }
  .navbar-collapse .first-menu li {
    margin-right: 2.8rem;
  }
  .navbar-collapse .second-menu li {
    margin-left: 2.8rem;
  }
}

@media all and (max-width: 767px) {
  .logo {
    display: none;
  }
  .navbar-collapse{
    flex-direction: column;
    align-items: unset !important;
  }
  .nav-link-ltr:hover::before {
  width: 40%;
}
}

@media all and (min-width: 768px) {
  .navbar-brand {
    display: none;
  }
  .navbar .nav-item .dropdown-toggle::after {
    content: none;
  }
}

@media all and (min-width: 992px) and (max-width: 1199px) {
  .navbar-collapse{
    .first-menu li {
    margin-right: 1.5rem;
     }
    .second-menu li {
    margin-left: 1.5rem;

  }
  }
}

</style>
