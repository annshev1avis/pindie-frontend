'use client';
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader.jsx";

export default function Popular(){
    const games = useGetDataByCategory(endpoints.games, "popular");
    return(
        <main classname="main-inner">
            {games ? (
                <CardsListSection id="popular" title="Популярные" data={games}/>    
            ) : (
                <Preloader />
            )}
        </main>
    )
}