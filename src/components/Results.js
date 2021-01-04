import React from 'react'
import PropTypes from 'prop-types'
import MovieColumn from './MovieColumn';
import MovieRow from './MovieRow';

const Results = props => {

    let colArr = [];
    let rowArr = [];
    let movieChilds = [];
    let len;
    let movie;
    if (props.results && props.display === true) {
        
        if (props.results.data.Search) {
            len = props.results.data.Search.length;
            movie = props.results.data.Search;
        }

        for (let i = 0; i < len; i++) {
            colArr.push(<MovieColumn 
                            data={movie[i]} 
                            calcNoms={props.calcNoms}/>)
    
            if (colArr.length === 3) {
                rowArr.push(colArr);
                colArr = [];
            } else if (len === i+1) {
                rowArr.push(colArr);
            }
        }
        for (let movieGroup of rowArr) {
            movieChilds.push(<MovieRow>{movieGroup}</MovieRow>);
        }

    } else if (props.nominations) {

        len = props.nominations.length;
        movie = props.nominations;

        for (let i = 0; i < len; i++) {
            colArr.push(<MovieColumn data={movie[i]} calcNoms={props.calcNoms}/>)
    
            if (colArr.length === 3) {
                rowArr.push(colArr);
                colArr = [];
            } else if (len === i+1) {
                rowArr.push(colArr);
            }
        }

        for (let movieGroup of rowArr) movieChilds.push(<MovieRow>{movieGroup}</MovieRow>);
    }
    
    return (
        <React.Fragment>
            {movieChilds}
        </React.Fragment>
    )
}

Results.propTypes = {
    results: PropTypes.object
}

export default Results
