import React, {Component} from 'react';
import Films from '../../components/Film/Film'

import Aux from '../../hoc/Aux'

const SearchResult = (props) => {

        return (
            <Aux>
                <h1>Searching {props.search}</h1>


                {props.filmlist
                            ? props.filmlist.map(film => {
                                return <div key={`film-${film.imdbID}`}>
                                <Films title={film.Title}
                                        year={film.Year}
                                        type={film.Type}
                                        poster={film.Poster}
                                        imdb={film.imdbID}
                                        />
                                </div>;
                              })
                            : null}


            </Aux>
        )
}

export default SearchResult;