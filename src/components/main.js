/* eslint-disable eol-last */

import React from "react";
import HornedBeasts from "./HornedBeasts";
import Imgdata from "./imgdata.json";

class Main extends React.Component {
  render() {
    return (
      <div>
        {Imgdata.map((value) => {
          return (
            <HornedBeasts
              title={value.title}
              img={value.image_url}
              description={value.description}
            />
          );
        })}
      </div>
    );
  }
}
export default Main;
