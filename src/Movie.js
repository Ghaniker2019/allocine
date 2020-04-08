import React from "react";
import image from "./images/contagionImg.jpg";

import Infos from "./Infos";
class Movie extends React.Component {
  render = () => {
    return (
      <div className="Movie">
        <h1>Contagion</h1>
        <div className="Movie--center">
          <div className="Movie--columns">
            <div className="Movie--poster">
              <img src={image} alt="movie poster" />
            </div>
            <div>
              <Infos />
            </div>
          </div>
          <h2>Synopsis et détails</h2>
          <div className="Movie--synopsis">
            <p>
              Une pandémie dévastatrice explose à l’échelle du globe… Au Centre
              de Prévention et de Contrôle des Maladies, des équipes se
              mobilisent pour tenter de décrypter le génome du mystérieux virus,
              qui ne cesse de muter. Le Sous-Directeur Cheever, confronté à un
              vent de panique collective, est obligé d’exposer la vie d’une
              jeune et courageuse doctoresse. Tandis que les grands groupes
              pharmaceutiques se livrent une bataille acharnée pour la mise au
              point d’un vaccin, le Dr. Leonora Orantes, de l’OMS, s’efforce de
              remonter aux sources du fléau. Les cas mortels se multiplient,
              jusqu’à mettre en péril les fondements de la société, et un
              blogueur militant suscite une panique aussi dangereuse que le
              virus en déclarant qu’on "cache la vérité" à la population…
            </p>
          </div>
        </div>
      </div>
    );
  };
}
export default Movie;
