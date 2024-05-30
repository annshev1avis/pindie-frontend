'use client';

import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader.jsx";

export default function Pixel(){
    const games = useGetDataByCategory(endpoints.games, "pixel");

    return(
        <main classname="main-inner">
            {games ? (
                <CardsListSection id="pixel" title="Пиксельные" data={games}/>    
            ) : (
                <Preloader />
            )}
        </main>
    )
}