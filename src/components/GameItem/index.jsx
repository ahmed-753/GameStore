import React from 'react';
import './style.css'
import GameCover from "../../components/GameItem";

const GameItem = ({game}) => {
    return (
        <div className='card'>

                    <div className='card__info'>
                        <img className='card__img' src={game.image} alt={game.title}/>
                        <GameCover/>
                        <h3 className='card__title'>{game.title}</h3>
                        <div className='card__cards'>
                            {
                                game.genres.map((genre) =>   <p className='card__genre' key={Math.random()}>{genre}</p>)
                            }
                        </div >
                        <div className='card__som'>
                            <p className='card__price'>{game.price} руб.</p>
                            <button className='card__btn'>В корзину</button>
                        </div>
                    </div>

        </div>
    );
};

export default GameItem;