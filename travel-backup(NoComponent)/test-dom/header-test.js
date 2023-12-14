// const hearderTemplate = document.createElement("header-template");

// hearderTemplate.innerHTML = `
// `;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <h1>Meme Generator</h1>
    </header>
    `;
  }
}

customElements.define("header-test", Header);
