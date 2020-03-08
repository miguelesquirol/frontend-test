import React from 'react';
import classes from'./FilmDetails.css'


    const FilmsDetails = (props) => {
    console.log(props)
    const { title, year, imdb, poster, type } = props.location.state

      return (
             <div className={classes.FilmDetails}>

                              <div className={classes.LeftColumn}>
                                    <img src={poster} alt="{title}"/>
                               </div>
                               <div className={classes.RightColumn}>
                                                      <div className={classes.Type}>{type}</div>

                                                       <h1>{title}</h1>
                                                      <p>{year}</p>
                                                      <p><a href={'https://www.imdb.com/title/' + imdb} target="_blank">Imdb Link</a></p>

                                                      <div>
                                                           <h2>Details</h2>
                                                           <p>Nulla facilisi. Nullam venenatis, augue at scelerisque commodo, ipsum ipsum semper dui, euismod vehicula nibh eros at sem. Nam eu diam in eros gravida bibendum non quis justo. Fusce non lorem ex. Vivamus vitae velit semper, malesuada felis sit amet, dapibus lectus. Integer ac mi elit. Curabitur sit amet laoreet tortor, vel molestie augue. Fusce nec tempus urna, eu pellentesque ligula. Donec sit amet quam ut turpis tincidunt rhoncus eget ut lorem.</p> </div>
                                </div>
            </div>
      )
    };

    export default FilmsDetails


