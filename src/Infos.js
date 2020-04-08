import React from "react";
class Infos extends React.Component {
  render = () => {
    return (
      <div className="Infos">
        <p>
          <span className="Infos--name">Date de sortie</span>
          <span className="Infos--bold">11 Novembre 2011</span> (1h 46min)
        </p>
        <p>
          <span className="Infos--name">De</span>
          <span className="Infos--link">Steven Soderbergh</span>
        </p>
        <p>
          <span className="Infos--name">Avec</span>
          <span className="Infos--link"> Marion Cotillard</span>
          <span className="Infos--link">, Matt Damon</span>
          <span className="Infos--link">, Laurence Fishburne</span>
        </p>
        <p>
          <span className="Infos--name">Nationalités</span>
          <span className="Infos--link">Américain, Émirati</span>
        </p>
      </div>
    );
  };
}
export default Infos;
