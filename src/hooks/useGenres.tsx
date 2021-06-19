import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface Genres {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

interface GenresContextData{
    genres: Genres[];
    selectedGenreId: number;
    selectGenreId: (id: number) => void;
}

interface GenresProviderProps{
    children: ReactNode;
}

const GenresContext = createContext<GenresContextData>(
    {} as GenresContextData
);





export function GenresProvider({children}: GenresProviderProps){
    const [genres, setGenres] = useState<Genres[]>([]);
    const [selectedGenreId, setSelectedGenreId] = useState(1);
    

    console.log(genres);
    useEffect(() => {
        api.get<Genres[]>('genres').then(response => {
          setGenres(response.data);
        });
      }, []);


      function selectGenreId(id: number){       
        setSelectedGenreId(id);
    } 

      
      


    return(
        <GenresContext.Provider value = {{genres, selectGenreId, selectedGenreId}}>
            {children}
        </GenresContext.Provider>
    );
}





export function useGenres(){
    const context = useContext(GenresContext);

    return context;
}

