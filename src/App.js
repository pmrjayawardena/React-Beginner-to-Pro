import React, { Component } from 'react';
import './App.css';
import SimpleSquare from './SimpleSquare';
import Square from './Square';

class App extends Component {

  render(){

    return(  
    
      <div>
        {/* <Counter initialNumber={0} />
        <Counter initialNumber={10} />
        <Counter initialNumber={50} />
        <Counter initialNumber={20} /> */}


        <SimpleSquare color="red" size={50}/>
        <Square  initialColor="blue" size={20}/>
        <Square  initialColor="green" size={120}/>
        
      </div>
    );    

  }
}

export default App;
