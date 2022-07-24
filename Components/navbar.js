let navbar=()=>{
    return ` <div id="navbar">
    <div class="left">
      <img
        src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"
      />
      <ul>
        <li>
          More Travel<i class="fa fa-arrow-down"></i>

          <div class="sub-left">
            <ul>
              <li>
                <a href="#"><i class="fa fa-building"></i> Stays</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-plane"></i> Flights</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-car"></i> Cars</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-briefcase"></i> Packages</a>
              </li>
              <li><a href="#">Holiday activities</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">Groups&Meatings</a></li>
              <li><a href="#">Mobile</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li>
          <a href="#"><i class="fa fa-globe"></i> English</a>
        </li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Tips</a></li>
        <li>
          <a href="#"><i class="fa fa-bell fa-2x"></i></a>
        </li>
        <li>
          <a href="#">Sign-in</a>
        </li>
      </ul>
    </div>
  </div>`;
};
let compfirst=()=>{
    return `  <img id="compfirst_img" src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg" alt="">
    <div id="compfirst-1">
        <h2>Our app takes you further</h2>
        <p>When you book on the app you can save up to 20% on select hotels while earning double the points with every booking. With these app deals you'll save even more on trips, and that means you can take more trips, and manage it all on the go.</p>
    <h4>Text yourself a download link for easy access</h4>
    <input id="code-input" type="number" placeholder="Country Code">
    <input id="phone-input" type="number" placeholder="Phone Number">
    <button id="appbutton">Get The App</button>
    <p>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p>
    </div>
    <div id="compfirst-2">
<img id="imgqr" src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/27_QR_FOOTER_HP.png" alt="">
<br>
<h4 style="margin-left: 30px;">Scan The QR Code</h4>
    </div>
`;
};
let complast=()=>{
    return ` <h2>Explore a world of travel with Expedia</h2>
    <h3>Discover new places and experiences</h3>`;
};
let footer=()=>{
    return `  <div id="footer-1">
    <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="">
</div>
<div id="footer-2">
    <h5>Company</h5>
    <p>About Us</p>
    <p>Jobs</p>
    <p>List Your Property</p>
    <p>Partnerships</p>
</div>
<div id="footer-3">
    <h4>Explore</h4>
    <p>India Travel Guide</p>
    <p>Hotels In India</p>
    <p>Hotel Rentals In India</p>
    <p>Hotel Packages In India</p>
    <p>Domestic Flights</p>
    <p>Car Hire In India</p>
    <p>All Accomodations Types</p>
    <p>Travel Blog</p>
</div>
<div id="footer-4">
    <h4>Policies</h4>
    <p>Privacy Statement</p>
    <p>Terms Of Use</p>
    <p>Vrbo terms and conditions</p>
</div>
<div id="footer-5">
    <h4>Help</h4>
    <p>Support</p>
    <p>Change or cancel your booking</p>
    <p>Refund Process and timeliness</p>
    <p>Book a flight using an airline credit</p>
    <p>International travel documents</p>

</div>`;
};
let footerlast=()=>{
    return `  <img id="footer-last-img" src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" alt="">
    <p id="footer-last-p">© 2022 Expedia, Inc., an Expedia Group company / Expedia Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc.</p>`
};


export {navbar,compfirst,complast,footer,footerlast};