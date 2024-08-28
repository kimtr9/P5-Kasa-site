import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../data/data.json"
import backgroundImgHome from '../images/background-pic-home.png'

               
export default function Home() {
    const cards = data.map(item => {
        return(
            <Card 
                key={item.id}
                id={item.id}
                cover={item.cover}
                title={item.title}
            />
        )
    })

    return (
        <div className="home__page"> 
          <Banner
              backgroundImg={backgroundImgHome}
              text='Chez vous, partout et ailleurs'
          />
          <section className="cards__section">
             {cards}
          </section>
        </div>
    )
}