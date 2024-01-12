document.getElementById("navbar").innerHTML = `

<!-- navbar  -->
<nav>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <!-- logo -->
      <div
        id="navbar_logo"
        class="col-sm-5 col-md-6 text-start justify-content-start"
      >
      <a id="logo_link" href="../index.html">
      <p>모든</p>
      </a>
    
      </div>
      <!-- nav toggle -->
      <div id="navbar_toggle" class="col-sm-5 col-md-6 text-end justify-content-end">
      <!-- contact us -->
      <button id="contact_us">
      <p>Contact us</p>
      </button>

      <!-- navbar toggle -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i id="navbar_toggler_icon" class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </div>
</nav>

<!-- navbar collapse content container -->
<div class="collapse" id="navbarToggleExternalContent">
  <div class="p-4">

    <!-- navbar footer -->
    <div id="navbar_links" class="container">
    <div class="row">
    
    <a href="#">
    <div class="col-sm-6">
    <h2>Our Work</h2>
    </div>
    </a>

    <a href="../../views/about.html">
    <div class="col-sm-6">
    <h2>About US</h2>
    </div>
    </a>

    </div>


    </div>

    <!-- navbar footer -->
    <div id="navbar_footer" class="container">
      <div class="row justify-content-center">
        
        <!-- our offices -->
        <div id="our_offices" class="col-sm-6">


          <div class="container">
          <div class="row">
          <h6>Our Offices</h6>
            <div class="col-sm-6">
              <h6>lorem</h6>
              <p>123 Main Road, Location,</p>
              <p>Cape Town, 1234</p>
              <p>fake@gmail.com</p>
              <p>+27 (0)123456789</p>
            </div>
            <div class="col-sm-6">
              <h6>lorem</h6>
              <p>123 Main Road, Location,</p>
              <p>Cape Town, 1234</p>
              <p>fake@gmail.com</p>
              <p>+27 (0)123456789</p>
            </div>
          </div>
        </div>

        </div>

        <!-- follow us -->
        <div class="col-sm-6">
          <h6>Follow us</h6>
          <i id="follow_us_icons" class="fa-brands fa-linkedin-in"></i>
          <i id="follow_us_icons" class="fa-brands fa-instagram"></i>
          <i id="follow_us_icons" class="fa-brands fa-twitter"></i>
          <i id="follow_us_icons" class="fa-brands fa-pinterest"></i>
          <i id="follow_us_icons" class="fa-brands fa-facebook"></i>
          <i id="follow_us_icons" class="fa-brands fa-youtube"></i>
        </div>

      </div>
    </div>


  </div>
</div>



`;