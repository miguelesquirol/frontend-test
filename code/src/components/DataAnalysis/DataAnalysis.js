import React, { Component } from 'react';
import classes from './DataAnalysis.css'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import DatePicker from "react-datepicker";
import { format, parseISO } from "date-fns";
import PieChartData from "../PieChart/PieChart"
import ReviewTime from "../ReviewTime/ReviewTime"

import { select, scaleOrdinal, pie } from "d3";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DataAnalysis extends Component {

    componentWillMount() {


        this.setState({
            startDate: this.state.startDate,
            endDate: this.state.startDate
        });
    }

    fetchData = (event) => {
        console.log("run")
        var startDateFormated = format(this.state.startDate, "yyyy-MM-dd");
        var endDateFormated = format(this.state.endDate, "yyyy-MM-dd");

        fetch('https://zpx-codetest.herokuapp.com/api/v1/stats/steam/reviews?offset=0&setSize=500&sort=date_posted&ascending=false&returnCount=false&filterByField=date_posted&filterFrom=' + startDateFormated + '&filterTo=' + endDateFormated)
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }




    handleChangeStartDate = date => {
        this.setState({
            startDate: date
        });
    };

    handleChangeEndDate = date => {

        this.setState({
            endDate: date
        });
    };



    render() {


function compressArray(original) {
 
	var compressed = [];
	// make a copy of the input array
	var copy = original.slice(0);
 
	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.date = original[i];
			a.a = myCount;
			compressed.push(a);
		}
	}
 
	return compressed;
};


        const Data = props => {
            let reviewNumber, positive, negative
            if (props.reviews) {
                const reviewlist = Object.values(props.reviews.data)

                console.log("reviewlist", reviewlist)
                reviewNumber = reviewlist.length;
                
                
                var newstring = [];
                var reviewlistnew = [...reviewlist]

                reviewlistnew.map(sweetItem => {
                    
                    var date = sweetItem.date_posted
                    
                    var newdate = format(
                        new Date(date),
                        'yyyy-MM-dd'
                      )

                    newstring.push(newdate)

                })

                console.log(newstring)
                           
                var newArray = compressArray(newstring);

                
                
                

                // var counts = {};
                // newstring.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
                // console.log(counts[0])

                positive = reviewlist.filter((obj) => obj.recommended === 1).length;
                negative = reviewlist.filter((obj) => obj.recommended === 0).length;

            }

            return (
                <div>
                    <h2>Number of reviews: {reviewNumber}</h2>
                    <div>Positive Reviews: {positive}</div>
                    <div>Negative Reviews: {negative}</div>

                    Pie PieChart
                    <PieChartData positive={positive} negative={negative}/>

                    <ReviewTime data={newArray}/>
                </div>
            )
        }


      

        return (
            <div>


                <h3>Filter</h3>

                <DatePicker
                    showPopperArrow={false}
                    dateFormat="yyyy-MM-dd"
                    selected={this.state.startDate}
                    onChange={this.handleChangeStartDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                />
                <DatePicker
                    showPopperArrow={false}
                    dateFormat="yyyy-MM-dd"
                    selected={this.state.endDate}
                    onChange={this.handleChangeEndDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    minDate={this.state.startDate}
                />

                <button className="fetch-button" onClick={this.fetchData}>
                    Fetch Data
            </button>

                <h1>Number of Reviews</h1>

                <Data reviews={this.state.data} startDate={this.state.startDate} endDate={this.state.endDate}/>



            </div>
        )

    }


    constructor(props) {
        super(props);
        
        this.state = {
            startDate: new Date(),            
            endDate: new Date(),
            data: null,
        };
    }

}



export default DataAnalysis