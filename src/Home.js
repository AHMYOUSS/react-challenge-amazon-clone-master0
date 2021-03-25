import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/08/amazonservices/seller_success_stories/2021/02_ops-corp/ops-careers-editorial-1x._CB659556174_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Echo Show 8, Restez en contact avec l'aide d'Alexa, Tissu anthracite"
            price={79.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81q%2BiL3kIPL._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Étui en tissu protégeant de l'eau pour Kindle Paperwhite (10ème génération - modèle 2018), Noir anthracite "
            price={29.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/51hQpqkEQBL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Apple iPhone X 256Go Gris Sidéral"
            price={ 598.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51hKehpBWML._AC_SL1024_.jpg"
          />
          <Product
            id="23445930"
            title="ORIGADREAM Sculpture Papercraft Tête de Loup en Kit 3D à assembler soi-même, Papier cartonné épais 300g PRÉ-COUPÉ "
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81GEHy1zEqL._SY500_.jpg"
          />
          <Product
            id="3254354345"
            title="Téléphone Portable Incassable, Blackview BV4900 Pro Android 10 Smartphone Débloqué Etanche IP68 4G"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Téléviseur LED HKC 43F3 de 109 cm (43 pouces) (Full HD, triple tuner, CI +, HDMI, lecteur multimédia via USB 2.0)"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
