import React, { Component } from 'react';

import cards from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";


class App extends Component {
  state={
    // randomNumber: 0,
    score: 0,
    // tally:0,
    clicked: [],
    linefriend: cards
  };

  //add method on click line frined
  handleClicked=id=>{ 
    if(!this.state.clicked.includes(id)){
      const newArr = this.shuffle(this.state.linefriend);
      this.setState({
        clicked: [...this.state.clicked, id],
        // tally: this.state.tally+1,
        score: this.state.score + 1, 
        linefriend: newArr
      })
    }else {
      alert("you lose")
      this.setState({
        clicked: [],
        // tally: 0,
        score:0

      })
    }
  
    // alert(`Clicked linefriend with id of ${id}`);
// if(this.state.randomNumber===id){
//   this.setState({
//     score:this.state.score+1
//   });
//   this.getrandamNumber(this.state.linefriend);
// }
  }
  shuffle=(a)=> {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  // getrandamNumber=(array)=>{
  //   const randomId = array[Math.floor(Math.random()*array.length)].id;
  // return randomId;
    
  // }
  
  render() {
    return (
      <div className="container">
      <Jumbotron/>
     <Scoreboard score={this.state.score} />
      <div className="row">
      {this.state.linefriend.map(linefriend=>(
       <Card
       key={linefriend.id}  
       id ={linefriend.id}
       image={linefriend.image}
       handleClicked={this.handleClicked}

       
       />
        ))}
     
   
     

      </div>
    
    </div>
    );
  }
}


export default App;
