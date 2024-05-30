'use client';

import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader.jsx";

export default function New(){
    const newGames = useGetDataByCategory(endpoints.games, "new");

    return(
        <main classname="main-inner">
            {newGames ? 
            (<CardsListSection id="new" title="Новинки" data={newGames}/>) :
            (<Preloader />)
            }
        </main>
    )
}