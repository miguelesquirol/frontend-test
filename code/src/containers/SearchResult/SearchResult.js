import React  from 'react';
import Films from '../../components/Film/Film'
import classes from './SearchResult.css'
import Aux from '../../hoc/Aux'

const SearchResult = (props) => {

        return (


            <Aux>
                <h1 className={classes.SearchTitle}> {props.search}</h1>
                <div className={classes.SearchResult}>

                {props.filmlist
                            ? props.filmlist.map(film => {
                                return <div key={`film-${film.imdbID}`} >
                                <Films title={film.Title}
                                        year={film.Year}
                                        type={film.Type}
                                        poster={film.Poster}
                                        imdb={film.imdbID}
                                        />
                                </div>;
                              })
                            : null}
</div>

            </Aux>
        )
}

export default SearchResult;