"use client"

import Image from "next/image"
import Link from "next/link"
import Button from "../Button/Button"
import { styled } from "styled-components"
import {FaWallet, FaRocket} from 'react-icons/fa'
import { Abril_Fatface } from "next/font/google"
import hover3d from '@/app/utils/hover'
import { useRef } from "react"
const abril = Abril_Fatface({
    subsets:["latin"],
    weight:["400"]
});



function Header() {
    const hero = useRef<HTMLDivElement>(null);
    const hoverHero = hover3d(hero, 
        {
        x:30,
        y:-40,
        z:30
    })
    const imageHover = hover3d(hero, {
        x: 20,
        y: -5,
        z: 11,
      });
    
  return (
    <HeaderStyled ref={hero}>
        <div>
            <nav>
                <div className="logo">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={36}
                        height={36}
                    />
                    <h2>Logo</h2>
                </div>
                <div className="input">
                    <input type="text" placeholder="Search"/>
                </div>
                <ul className="nav-items">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Auctions</Link>
                    </li>
                    <li>
                        <Link href="/">Marketplace</Link>
                    </li>
                    <li>
                        <Link href="/">About</Link>
                    </li>
                    <Button name="Connect Wallet" icon={<FaWallet/>}/>
                </ul>
            </nav>
            <div className="header-content">
                <div className="text-content">
                    <h3 className={abril.className}>Buy, Collect and Sell Extraordinary NFTs</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quisquam totam aliquid, possimus ipsam ex quo cum quaerat! Dolorum voluptas atque iusto soluta fugit minima officia amet eius accusantium quae, accusamus eveniet excepturi quasi possimus explicabo nisi, enim molestiae ab omnis officiis repellat commodi vel? Corrupti officia consectetur veniam nobis.
                    </p>
                    <div className="buttons">
                        <Button 
                            name="Get Started"
                            background="#f2994a"
                            color="#fff"
                            border="1px solid #f2994a"
                            icon={<FaRocket/>}
                        />
                        <Button name="Learn More" />
                    </div>
                </div>

                <div className="image-content">
                    <div className="image" style={{
                        transform:hoverHero.transform,
                    }}>
                        <Image
                            src="/images/monkey.png"
                            width={600}
                            height={600}
                            alt="hero"
                            style={{
                                transform: imageHover.transform,
                              }}
                        />
                    </div>
                </div>

            </div>
        </div>
    </HeaderStyled>
  )
}
const HeaderStyled = styled.header`
    nav{
        padding:0 4rem;
        min-height: 10vh;
        border-bottom: 1px solid var(--color-border);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo{
            display: flex;
            align-items: center;
            gap:1rem;
            cursor: pointer;
        }
        .input{
            flex:2;
            display: flex;
            justify-content: center;
            input{
                width: 55%;
                padding: 0.6rem 0.8rem;
                border-radius: 8px;
                background-color: #161616;
                border:1px solid var(--color-border);
                &::placeholder{
                    color:var(--color-border);
                    font-weight: 500;
                }
            }
        }

        .nav-items{
            display: flex;
            align-items: center;
            gap:2rem;
            li{
                transition: all 0.2s ease-in-out;

                &:hover{
                    color:white;
                    transform: scale(1.1);
                }
            }
        }   
    }
    .header-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap:4rem;
        min-height: calc(100vh - 10vh);
        padding:0 10rem 5rem 10rem;

        .text-content{
            > h3{
                font-size: clamp(2rem, 5vw, 5rem);
                color:#f2994a;
                transition: all 0.01s linear;
                padding-bottom: 1.5rem;
            }

            .buttons{
                display: flex;
                gap:1rem;
                margin-top:2.5rem;
            }
        }
        
        .image-content .image{
            padding:1rem;
            border-radius: 8px;
            background-color: var(--color-bg);
            border:1px solid var(--color-border);
        }
    }
`;

export default Header