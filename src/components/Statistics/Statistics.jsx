import React from 'react'
import PropTypes from 'prop-types' 

export default function Statistics({good,neutral,bad,total,positivePercentage}) {
  return (<>
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    <p>total: {total}</p>
    <p>positivePercentage: {positivePercentage} %</p></>
  )
}

Statistics.propTypes ={good:PropTypes.number,neutral:PropTypes.number,bad:PropTypes.number,total:PropTypes.number,positivePercentage:PropTypes.string}