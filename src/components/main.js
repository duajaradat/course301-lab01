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
            <div>
              <HornedBeasts
                title={value.title}
                img={value.image_url}
                description={value.description}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Main;
