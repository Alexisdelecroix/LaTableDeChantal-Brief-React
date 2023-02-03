import "./formulaireStyle.css";
import Mymap from "../formulaire/Maps";

export default function Plat() {
  return (
    <section className="conteneurContact">
      <aside>
        <h3>Nos coordonnées</h3>
        <p>Adresse : 297 rue Chau. Fernaud Forest, 59200 Tourcoing</p>
        <p>Téléphone : 03 20 23 84 65</p>

        <Mymap />
      </aside>

      <form className="conteneurForm" action="">
        <h2>Formulaire de contact</h2>
                  <div className="position">
            <label htmlFor="prenom">
              Prénom:<span>*</span>
            </label>
            <label htmlFor="nom">
              Nom:<span>*</span>
            </label>
          </div>
          <div className="position">
            <input
              type="text"
              name="prenom"
              id="prenom"
              pattern="[A-Za-z]+"
              title="Le prénom ne peut contenir que des lettres."
              placeholder="Jenna"
              required
            ></input>
            <input
              type="text"
              name="nom"
              id="nom"
              pattern="[A-Za-z]+"
              title="Le nom ne peut contenir que des lettres."
              placeholder="Grande"
              required
            ></input>
          </div>
          <div className="position">
            <label htmlFor="email">
              Email :<span>*</span>
            </label>
            <label htmlFor="title">
              Sujet :<span>*</span>
            </label>
          </div>
          <div className="position">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Jenna@gmail.fr"
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Votre titre"
              required
            />
          </div>
          <div className="positionArea">
            <label htmlFor="message">Votre message :</label> <br />
            <textarea type="text" name="message" rows="15" cols="70" />
          </div>
            <input id="button" type="submit" />
        <div className="animation">
        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_iyocvb9g.json"  background="transparent"  speed="1" loop  autoplay></lottie-player>
          <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_1dfplvlq.json"  background="transparent"  speed="1" loop  autoplay></lottie-player>
          <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_0cwwprun.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player></div>
      </form>
    </section>
  );
}
