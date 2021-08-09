/* eslint-disable eol-last */

import React from "react";

class HornedBeasts extends React.Component {

  constructor(props){
    super(props);
    this.state={
      votes : 0
    };
  }
  votesCounter =()=>{
    this.setState({
      votes:this.state.votes+1
    });
  }
  
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img onClick={this.votesCounter}
          src={this.props.img}
          title={this.props.title}
          alt={this.props.title}
        />
        <p>{this.props.description}</p>
        <p>Votes:{this.state.votes} ❤ </p>
      </div>
    );
  }
}
export default HornedBeasts;



















///////////////////////////////////////////////
// class HornedBeasts extends React.Component {

//   constructor(props){
//     super(props);
//     this.state={
//       votes : 0
//     };
//   }
//   votesCounter =()=>{
//     this.setState({
//       votes:this.state.votes+1
//     });
//   }
  
//   render() {
//     return (
//       <div>
//         <h2>{this.props.title}</h2>
//         <img onClick={this.votesCounter}
//           src={this.props.img}
//           title={this.props.title}
//           alt={this.props.title}
//         />
//         <p>{this.props.description}</p>
//         <p>Votes:{this.state.votes}</p>
//       </div>
//     );
//   }
// }
// export default HornedBeasts;
