'use client';
import { getGamesByCategory } from "../data/data-utils"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader.jsx";

export default function TDS(){
    const games = useGetDataByCategory(endpoints.games, "TDS");

    return(
        <main classname="main-inner">
            {games ? (
                <CardsListSection id="tds" title="TDS" data={games}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}