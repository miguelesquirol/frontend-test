import React, { Component } from 'react';
//
import Layout from './components/Layout/Layout'
import Search from './containers/Search/Search'
import SearchResult from './containers/SearchResult/SearchResult'


class App extends Component {


    searchChangeHandler = (event) => {
    this.setState({input: event.target.value})
    }


    searchClickHandler = (event) => {
        this.setState({
            search: this.state.input
        })
    }

    fetchData = (event) =>  {
        fetch(`http://www.omdbapi.com/?s=%22${this.state.input}%22&apikey=438dd0a7`)
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
            <Search changed={this.searchChangeHandler} clicked={this.searchClickHandler}  fetch={this.fetchData}/>
            <SearchResult search={this.state.search} filmlist={this.state.films.Search} />

          </Layout>

        )
      }


    constructor() {
        super();
        this.state = { films: [] };
    }

}

export default App;
