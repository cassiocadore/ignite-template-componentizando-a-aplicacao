import { useGenres } from "../hooks/useGenres";
import { Button } from "./Button";



export function SideBar() {
  const {genres, selectedGenreId} = useGenres();
  const { selectGenreId } = useGenres();

  function handleClickButton(id: number) {
    selectGenreId(id);
  }
  

  return (
  <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}



