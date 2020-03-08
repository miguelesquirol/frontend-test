import React from 'react';
import { Link } from 'react-router-dom'
import classes from './Film.css'

    const Films = (props) => {

      return (



                        <Link to={{
                          pathname: '/films/' + props.imdb +'',
                          state: {
                            title: props.title,
                            year: props.year,
                            type: props.type,
                            imdb: props.imdb,
                            poster: props.poster
                          } }}
                          >             <div className={classes.FilmCard}>

                       <img src={props.poster} alt={props.title}/>
                            <div className={`${classes.figcaption} ${props.type}`}>
                                <h3>{props.type}</h3>
                                <p>{props.title}</p>
                             </div>


            </div></Link>
      )
    };

    export default Films