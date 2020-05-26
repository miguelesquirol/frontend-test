import React from 'react';
import { Link } from 'react-router-dom'
import classes from './games.css'

const Games = (props) => {

  return (


    <div>

      {props.filmlist ? props.filmlist.map(film => {
          return (

            <div key={`games-${film.id}`} >
              <Link to={{
                pathname: '/Games/' + film.id + '',
                state: {
                  title: film.display_name,
                  id: film.id,
                  steam_appid: film.steam_appid
                }
              }}              >
                <h2>{film.display_name} </h2>

              </Link>


            </div>
          )
        })
        : null}

    </div>
  )
};

export default Games