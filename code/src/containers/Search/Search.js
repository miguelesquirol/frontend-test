import React, {Component} from 'react';

import Aux from '../../hoc/Aux'

const Search =(props) => {

        return (
            <Aux>
                <input type="text" onChange = {props.changed} />
                <button  onClick={() => { props.clicked(); props.fetch(); }}   >Search</button>
            </Aux>
        )
}

export default Search;