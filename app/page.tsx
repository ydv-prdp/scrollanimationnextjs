'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header/Header'
import { styled } from 'styled-components'
import SectionLayout from './components/SectionLayout'
import Card from "./components/Card";
import { cards } from "./utils/cards";
import Fullpage from './components/Fullpage'

export default function Home() {
  return (
    <>
      <Header/>
      <MainStyled>
        <SectionLayout>
        <div className="cards">
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
        </SectionLayout>
        <Fullpage/>
      </MainStyled>
    </>
  )
}


const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;
  .cards {
    /* position: absolute; */
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }
  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;