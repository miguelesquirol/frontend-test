import React  from 'react';

import Aux from '../../hoc/Aux'
import classes from './Search.css'

const Search =(props) => {

        return (
            <Aux>
            <div  className={classes.Search}>
                <input type="text" onChange = {props.changed} />
                <button  onClick={() => { props.clicked(); props.fetch(); }}   >Search</button>
             </div>
            </Aux>
        )
}

export default Search;