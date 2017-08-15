import React, { Component } from "react"


export default class SliderArrows extends Component {
  constructor(props) {
    super(props);
  }

  handleArrowClick(option) {
    this.props.turn(option);
  }

  render() {
    return (
      <div className="swiper-arrows-wrap">
        <span
          className="swiper-arrow swiper-arrow-left"
          onClick={this.handleArrowClick.bind(this, -1)}>
          &lt;
        </span>
        <span
          className="swiper-arrow swiper-arrow-right"
          onClick={this.handleArrowClick.bind(this, 1)}>
          &gt;
        </span>
      </div>
    );
  }
}
