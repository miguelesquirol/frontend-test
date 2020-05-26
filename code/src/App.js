import React, { Component } from 'react';
//
import Layout from './components/Layout/Layout'
// import Search from './containers/Search/Search'
// import SearchResult from './containers/SearchResult/SearchResult'
import Games from './components/Games/games'
import DataAnalysis from './components/DataAnalysis/DataAnalysis'

import classes from './App.css'

class App extends Component {

    searchChangeHandler = (event) => {
    this.setState({input: event.target.value})
    }


    nextOffset = (event) => {
        this.setState({
            offset:  this.state.films.nextOffset
        })

        this.timer = setInterval(() => this.fetchData(), 1000);

    }


    searchClickHandler = (event) => {
      this.setState({
          search:  "Searching " + this.state.input
      })
  }


    fetchData = (event) =>  {
        fetch(`https://zpx-codetest.herokuapp.com/api/v1/stats/steam/game?offset=${this.state.offset}&setSize=${this.state.size}&ascending=true&returnCount=false`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    films: data
                 })
            })
                 .catch(console.log)
            }


      render() {
        return (

          <Layout>
            
            <button className="fetch-button" onClick={this.fetchData}>
                  Fetch Data
            </button>
        
            <Games filmlist={this.state.films.data} />
            <button className="next" onClick={this.nextOffset} >
              Next
            </button>

            <DataAnalysis/>

          </Layout>

        )
      }


    constructor() {
        super();
        this.state = { 
          films: [],
          size : 4,
          offset: 0
        };
    }

}

export default App;
