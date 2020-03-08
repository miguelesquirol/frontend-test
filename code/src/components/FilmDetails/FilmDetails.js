import React from 'react';
import ReactDOM from 'react-dom';
import FilmDetails from '../FilmDetails/FilmDetails'
import { Route, Link } from 'react-router-dom'



    const FilmsDetails = (props) => {
    console.log(props)
    const { params } = props.match
    const { title, year, imdb, poster, type } = props.location.state

      return (
             <div>
                                                       <h1>{title}</h1>
                                                      <p>{year}</p>
                                                      <p>{type}</p>
                                                      <p><a href={'https://www.imdb.com/title/' + imdb} target="_blank">Imdb Link</a></p>
                                                      <img src={poster}/>

                                                      <div>
                                                           <h2>Details</h2>
                                                           <p>Nulla facilisi. Nullam venenatis, augue at scelerisque commodo, ipsum ipsum semper dui, euismod vehicula nibh eros at sem. Nam eu diam in eros gravida bibendum non quis justo. Fusce non lorem ex. Vivamus vitae velit semper, malesuada felis sit amet, dapibus lectus. Integer ac mi elit. Curabitur sit amet laoreet tortor, vel molestie augue. Fusce nec tempus urna, eu pellentesque ligula. Donec sit amet quam ut turpis tincidunt rhoncus eget ut lorem.</p> </div>

            </div>
      )
    };

    export default FilmsDetails


