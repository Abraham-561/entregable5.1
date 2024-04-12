import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "./style/PokedexDetailPage.css";
import StatsCards from "../components/HomePage/PokedexPage/StatsCards";

const PokeDatailPage = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [name]);

  console.log(pokemon);

  return (
    <>
    <div>
      <img className="poke__img1" src="public/header.png" alt="" />
    </div>
    <div className="poke__container">
      
      <div className="poke__img">
        <header className="poke__container-img">
          <img className="poke__img-pokemon"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>
      </div >
      <div className="poke__name">
      <h1 className="poke__order">#{pokemon?.order}</h1>
      <h2 className="poke__name1">{pokemon?.name}</h2>
      </div>
      
      <div className="container__alt-peso">
        <div className="poke__info1">
        <h3 className="poke__info-peso-altura">Altura:</h3>
        <span className="poke__span">{pokemon?.height}0cm</span>
        </div>
        <div className="poke__info2">
        <h3 className="poke__info-peso-altura">Peso:</h3>
        <span className="poke__span">{pokemon?.weight}kg</span>
        </div>
        
      </div>
      <div className="poke__container-type-habil">
        <div className="poke__bloc-type">
          <h3 className="poke__title">Tipo</h3>
          {pokemon?.types.map((type) => (
            <span className="poke__span-type" key={type.slot}> {type.type.name} </span>
          ))}
        </div>
        <div className="poke__bloc-habil">
          <h3 className="poke__title">habilidades</h3>
          {pokemon?.abilities.map((habil) => (
            <span className="poke__span-habil" key={habil.ability.url}> {habil.ability.name} </span>
          ))}
        </div>
      </div>

      <div>
        <h3>Stats</h3>
        {pokemon?.stats.map((stat, index) => (
          <StatsCards 
            key={index}
            stat={stat}
          />
        ))}
        
        
      </div>

      <div >
        <h3>movientos</h3>
        {pokemon?.moves.map((move, index) => (
          <span key={index}> {move.move.name} </span>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default PokeDatailPage;
