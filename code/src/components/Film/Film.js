import React from 'react';
import ReactDOM from 'react-dom';
import FilmDetails from '../FilmDetails/FilmDetails'
import { Route, Link } from 'react-router-dom'

    const Films = (props) => {

      return (


             <div>
                       <h1>{props.title}</h1>
                       <p>{props.year}</p>
                       <p>{props.type}</p>
                       <p>{props.type}</p>
                       <p><a href={'https://www.imdb.com/title/' + props.imdb} target="_blank">Imdb Link</a></p>
                       <img src={props.poster}/>


<Link to={{
  pathname: '/films/' + props.imdb +'',
  state: {
    title: props.title,
    year: props.year,
    type: props.type,
    imdb: props.imdb,
    poster: props.poster


  }
    }}>Details</Link>


            </div>
      )
    };

    export default Films