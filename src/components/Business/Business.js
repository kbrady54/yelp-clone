import React from "react";
import "./Business.css";

class Business extends React.Component {
  formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return ["(", match[2], ") ", match[3], "-", match[4]].join("");
    }
    return null;
  }

  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt="" />
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>
              {this.props.business.city}
              {", "} {this.props.business.state} {this.props.business.zipCode}
            </p>
            <p>{this.props.business.phone}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating}</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
