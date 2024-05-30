'use client';
import { getGamesByCategory } from "../data/data-utils"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader.jsx";

export default function Runners(){
    const games = useGetDataByCategory(endpoints.games, "runner");

    return(
        <main classname="main-inner">
            {games ? (
                <CardsListSection id="runners" title="Ранеры" data={games}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}