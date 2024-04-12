import PokeCard from "./PokeCard"
import './style/ListPokemons.css'


const ListPokemons = ({ pokemons }) => {
  return (
    <div className="list__pokemons">
        {
            pokemons?.map( pokeInfo => (
              <PokeCard
                    key={pokeInfo.url}
                    pokeInfo={pokeInfo}

              />  
            ))
        }
    </div>
  )
}

export default ListPokemons