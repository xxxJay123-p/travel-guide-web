class travelFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!--=========================== Footer ==============================-->
    <footer class="footer section">
      <div class="footer__container container grid">
        <div class="footer__content grid">
          <div class="footer__data">
            <h3 class="footer__title">Travel.com</h3>
            <p class="footer__description">
              Travel you choose the <br />
              destination, we offer you the <br />
              experience.
            </p>
            <div>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="footer__social"
              >
                <i class="ri-facebook-box-fill"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                class="footer__social"
              >
                <i class="ri-twitter-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="footer__social"
              >
                <i class="ri-instagram-fill"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                class="footer__social"
              >
                <i class="ri-youtube-fill"></i>
              </a>
            </div>
          </div>

          <div class="footer__data">
            <h3 class="footer__subtitle">About</h3>
            <ul>
              <li class="footer__item">
                <a href="" class="footer__link">About Us</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__link">New & Blog</a>
              </li>
            </ul>
          </div>

          <div class="footer__data">
            <h3 class="footer__subtitle">Company</h3>
            <ul>
              <li class="footer__item">
                <a href="" class="footer__link">Team</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__link">Become a member</a>
              </li>
            </ul>
          </div>

          <div class="footer__data">
            <h3 class="footer__subtitle">Support</h3>
            <ul>
              <li class="footer__item">
                <a href="" class="footer__link">FAQs</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__link">Support Center</a>
              </li>
              <li class="footer__item">
                <a href="" class="footer__link">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- <section class="lang__cont">
          
        </section> -->
        <!-- <div class="lang-button-wrapper">
          <button class="button lang-btn">Language &nbsp; ▼</button>
          <div class="dropdown-content">
            <a id="top" href="#">Keep source formatting</a>
            <a id="middle" href="#">Merge formatting</a>
            <a id="bottom" href="#">Keep text only</a>
          </div>
        </div> -->

        <div class="footer__rights">
          <p class="footer__copy">&#169; 2024 JayCheng. All rigths reserved.</p>
          <div class="footer__terms">
            <a href="#" class="footer__terms-link">Terms & Agreements</a>
            <a href="#" class="footer__terms-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `;
  }
}

customElements.define("travel-footer", travelFooter);