<template>
    <footer id="footer" class="bg-dark text-white">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <h3>About Us</h3>
            <p>Welcome to GALATASARAY! We are dedicated to providing the best experience for our fans and customers.</p>
          </div>
          <div class="col-md-3">
            <h3>Connect With Us</h3>
            <a href="https://www.facebook.com/Galatasaray/" class="social-link">Facebook</a>
            <a href="https://www.youtube.com/@Galatasaray" class="social-link">Youtube</a>
            <a href="https://www.instagram.com/galatasaray/" class="social-link">Instagram</a>
          </div>
          <div class="col-md-3">
            <h3>Contact Us</h3>
            <p>Email: info@galatasaray.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div class="col-md-3">
            <h3>Upcoming games</h3>
            <p>Galatasaray vs Fenebahce / 21-01-2024 19:00</p>
            <p>Besiktas vs Galatasaray / 07-02-2024 20:00</p>
            <p>Galatasaray vs Trabzonspor / 14-02-2024 19:00</p>
          </div>
          <div class="col-md-12">
            <hr>
            <p class="text-center">© 2024 GALATASARAY</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
#footer div{
    background-color: #b30000;
    color: white;
    padding: 15px;
}

#footer h3 {
    color: #ffffff;
}

#footer p {
    color: #ffffff;
}

#footer .social-link {
    display: block;
    color: #ffffff;
    margin-bottom: 10px;
    text-decoration: none;
}
#footer .social-link svg{
    width: 25px;
    height: 25px;
    margin-right: 5px;
}

#footer .social-link:hover {
    color: #0084ff;
}

#footer hr {
    border-color: #ffffff;
}



  </style>
  