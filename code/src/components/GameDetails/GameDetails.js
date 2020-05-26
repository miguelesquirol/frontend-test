import React, { Component } from 'react';
import classes from './GameDetails.css'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class GameDetails extends Component {

  componentWillMount() {
    this.setState({ steam_appid: this.state.steam_appid });
  }
  
  fetchData = (event) =>  {
    fetch('https://zpx-codetest.herokuapp.com/api/v1/stats/steam/reviews?offset=0&setSize=10&ascending=true&returnCount=false&filterByField=steam_appid&filterValue='+this.state.steam_appid+'&filterFrom=2019-28-07&filterTo=2019-28-10')
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };




  render() {


    function Reviews(props) {
 
      if (props.reviews) {

     
        const reviewlist = Object.values(props.reviews.data)     
       
        const listItems = reviewlist.map((review) =>
           
          <ul className={classes.review} key={`review-${review.id}`}>
            <li>ID: {review.id}</li>
            <li>Date Posted: {review.date_posted}</li>
            <li>Hours Player" {review.hours_played}</li>
            <li>Language: {review.lang_key}</li>
            <li>Number of Games Owned: {review.owned_games_amount}</li>
            <li>Recieved Compensation: {review.received_compensation}</li>
            <li>Recomended?: {review.recommended}</li>
            <div><h2>Review:</h2>
              { ReactHtmlParser(review.review_text) }
             </div>
          </ul>

        );
        return (
          <div>{listItems}</div>
        );

        
  
       
      }
      else {
        return ( 
        <li>test2</li>
        )
      }
    }
  

    const { title, id, steam_appid } = this.props.location.state

    console.log(this.state.data)

 

    return (
      <div>
        <h1>{title}</h1>
        <p> {id} </p>
        <p> {steam_appid}</p>

        <h3>Filter</h3>
        
        <DatePicker
        showPopperArrow={false}
        dateFormat="yyyy-MM-dd"
        selected={this.state.startDate}
        onChange={this.handleChange}
        selectsStart
        startDate={this.state.startDate}
        endDate={this.state.endDate}
      />
      <DatePicker
        showPopperArrow={false}
        dateFormat="yyyy-MM-dd"
        selected={this.state.endDate}
        onChange={this.handleChange}
        selectsEnd
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        minDate={this.state.startDate}
      />


        <Reviews reviews = {this.state.data} />


      </div>
    )

  }


  constructor(props) {
    super(props);
 
    this.state = {
      startDate: new Date(),
      endDate:  new Date(),
      data: null,
      steam_appid: this.props.location.state.steam_appid
    };
  }

}



export default GameDetails