'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner.jsx"
import { Promo } from "./components/Promo/Promo.jsx"
import { CardsListSection } from "./components/CardsListSection/CardsListSection";

import { useGetDataByCategory } from "./api/api-hooks";
import { endpoints } from "./api/config";

import { Preloader } from "./components/Preloader/Preloader.jsx";


export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");
    return(
        <main className="main">
          <Banner/>
            {popularGames ? (
                <CardsListSection id="popular" title="Популярные" data={popularGames} type="slider"/>    
            ) : (
                <Preloader />
            )}
            {newGames ? (
                <CardsListSection id="new" title="Новые" data={newGames} type="slider"/>    
            ) : (
                <Preloader />
            )}
          <Promo/>
        </main>
    )
}