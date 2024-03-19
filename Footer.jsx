import React from "react";

class Footer extends React.Component {
  render() {
    return (
    <footer id="contactForm">
      <h2>Kontakta oss</h2>
      <form action="#" method="post">
        <input type="text" id="name" name="name" placeholder="Namn" required/>

        <input type="email" id="email" name="email" placeholder="E-post" required/>

        <textarea id="message" name="message" rows="4" placeholder="Meddelande"></textarea>

        <button type="submit" onClick={() => alert('Ditt meddelande har skickats!')}>Skicka</button>
      </form>
      <table className="footer-table">
        <thead>
          <tr>
            <th>Öppettider</th>
            <th>Sociala medier</th>
            <th>Adress</th>
            <th>Snabblänkar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Måndag-fredag: 9:00-18:00</td>
            <td><i className="fa-brands fa-facebook"></i></td>
            <td>Brogatan 3, Halmstad</td>
            <td><a href="omOss.html">Om oss</a></td>
          </tr>
          <tr>
            <td>Lördag-söndag: 10:00-16:00</td>
            <td><i className="fa-brands fa-instagram"></i></td>
            <td></td>
            <td><a href="franchise.html">Franchise</a></td>
          </tr>
          <tr>
            <td></td>
            <td><i className="fa-brands fa-tiktok"></i></td>
            <td></td>
            <td><a href="inlämning.html">Inlämning</a></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><a href="butiker.html">Butiker</a></td>
          </tr>
        </tbody>
      </table>
    </footer>
    );
  }
}

export default Footer;
