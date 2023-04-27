import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import Moment from "react-moment";

const AdCard = ({ ad }) => {
  const adLink = "/${ad.category.toLowerCase()}/${ad.id}";
  console.log(ad.images[0]);
  return (
    <div className="card">
      <Link to={adLink}>
        <img
          src={
            ad.images[0].url ||
            "https://firebasestorage.googleapis.com/v0/b/ads-network-596c6.appspot.com/o/ads%2F1682547225184%20-%20Folder.jpg?alt=media&token=aae4cce0-98db-4ae6-a9f6-0ce56bda38ed"
          }
          alt={ad.title}
          className="card-img-top"
          style={{ width: "100%", height: "200px" }}
        />
      </Link>
      <div className="card-body">
        <p className="d-flex justify-content-between align-items-center">
          <small>{ad.category}</small>
          <AiOutlineHeart size={30} />
        </p>
        <Link to={adLink}>
          <h5 className="card-title">{ad.title}</h5>
        </Link>
        <Link to={adLink}>
          <p className="card-text">
            {ad.location} - <Moment fromNow>{ad.publishedAt.toDate()}</Moment>
            <br />
            Rupees. {Number(ad.price).toLocaleString()}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AdCard;
