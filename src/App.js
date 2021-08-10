import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import "bootstrap/dist/css/bootstrap.min.css";
import Imgdata from "./components/imgdata.json";
import SelectedBeast  from "./components/SelectedBeast";



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show: false
    };
  }
  // shoPopUp=()=>{
  //   Imgdata.find((element=>{
  //     if(element == this.props.)
  //   }))
  //   this.setState({
  //   show:
  //   })
  // }

  render() {
    return (
      <div>
        <Header />
        <Main imgData={Imgdata}/>
        <SelectedBeast />
        <Footer />
      </div>
    );
  }
}

export default App;
