import React from 'react';

import classes from './Input.css'

const Input = (props) => {
    return (
    //calls retrieveWeather when the form is submitted
    <div className="formStyle">
     <form onSubmit = {props.retrieveWeather} >  

     	<input type="text" name="city" placeholder="Which City" />
     	<input type="text" name="country" placeholder="Which Country" />
     	<button className="button"> <span> Search Results! </span></button>

     </form>
     </div>
    );
  }


export default Input;
