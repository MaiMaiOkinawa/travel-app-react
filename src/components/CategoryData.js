import { Component } from "react";
import "./Category.css";
import speaking1 from "../assets/fruits.png";
import speaking2 from "../assets/animals.png";
import reading1 from "../assets/alphabets.png";
import reading2 from "../assets/reading.png";

class CategoryData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="speaking-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="images">
          <img alt="#" src={this.props.img1} />
          <img alt="#" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default CategoryData;
