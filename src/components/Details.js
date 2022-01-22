import React from "react";
import "./Details.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";

const Details = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <div className="details">
      <div className="details__background">
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </div>
      <div className="details__imageTitle">
        <img alt={detailData.title} src={detailData.titleImg} />
      </div>
      <div className="details__content">
        <div className="details__content-controls">
          <div className="details__content-controls__player">
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </div>
          <div className="details__content-controls__trailer">
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </div>
          <div className="details__content-controls__addList">
            <span />
            <span />
          </div>
          <div className="details__content-controls__groupWatch">
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="details__content-subTitle">{detailData.subTitle}</div>
        <div className="details__content-description">{detailData.description}</div>
      </div>
    </div>
  );
};

export default Details;
