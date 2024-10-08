import React from "react";
import PropTypes from "prop-types";
import cliffBanner from "../assets/cliff-banner-cropped.webp";
import mountainBanner from "../assets/mountain-banner-cropped.webp";
import "../styles/components/Banner.scss";

//Bannière en 2 version, cliff et mountain
//cliff et mountain doit être spéficié lors de l'appel d'une bannière
//autrement un message d'erreur sera renvoyé.
//Laissé dans le code par sécurité.
function Banner({ version }) {
  if (!version || (version !== "cliff" && version !== "mountain")) {
    return (
      <div className="banner">
        <p>Erreur dans le choix de prop</p>
      </div>
    );
  }

  //Si version = "cliff" alors on utilise les donnés de cliffBanner, sinon c'est celle de mountainBanner
  const imageUrl = version === "cliff" ? cliffBanner : mountainBanner;
  const showText = version === "cliff";

  //Affiche la bannière + si version "cliff" alors affiche le h1
  return (
    <div className="banner">
      <img src={imageUrl} alt="Banner" className="banner__image" />
      <div className="banner__overlay"></div>
      {showText && (
        <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
      )}
    </div>
  );
}

//Définition du type de prop
//Il faut entrer "version ='cliff/mountain' pour afficher la bannière appropriée"
Banner.propTypes = {
  version: PropTypes.oneOf(["cliff", "mountain"]).isRequired,
};

export default Banner;
