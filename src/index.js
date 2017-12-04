import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app'



let clock = function(){
    
        return(
            <div>
                <h2>{new Date().toLocaleString()}</h2>
            </div >
        )
    }

setInterval(function(){
    ReactDOM.render(
        clock() ,document.getElementById('root')   
     )
},1000)
