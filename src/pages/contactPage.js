import Header from "../components/Header";
const ContactPage = {
  render() {
    document.getElementById('app').innerHTML = `
      ${Header.render()}
      <section class="container">
        <h1>Work</h1>
        <p>This is the contact page content.</p>
      </section>
    `;

    Header.handleScroll();
  }
};

export default ContactPage;
