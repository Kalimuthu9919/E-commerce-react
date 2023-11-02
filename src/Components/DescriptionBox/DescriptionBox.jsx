import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An E-commerce Website is an online platform that facilities the buying
          and selling of products or services over the internet. It serves as a
          virtual market place where bussiness and individual showcase their
          products, interact with customers, and conduct the transaction without
          needing the physical presence. E-commerce website gained immense
          popularity due to their convenience accessibility, and the global
          reach they offer.
        </p>
        <p>
          E-commerce websites typicaly display products or servies along with
          detailed descriptions, images, prices, and available variations(eg:
          size, colors). Each product has its own dedicated page with revelent
          information.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
