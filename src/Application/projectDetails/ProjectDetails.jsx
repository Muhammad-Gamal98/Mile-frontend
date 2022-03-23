import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/projectDetails/Details.css";
import axios from "axios";
import Footer from "../footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Contact from "../contact/Contact";
import Sperator from "../shared/Sperator";

const ProjectDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const params = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/project/${params.id}`)
      .then((res) => setDetails(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   const images = details.project.images;
  if (details.project) {
    return (
      <>
        <div>
          <h1 className="details-header">{details.project.name}</h1>
        </div>

        <div className="project-details-container">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="main-img"
          >
            {details.project.images.map((imgSrc, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={imgSrc} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mini-img"
          >
            {details.project.images.map((imgSrc, i) => {
              return (
                <SwiperSlide key={i}>
                  <img className="mini" src={imgSrc} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="details-desc">
            <p>{details.project.description}</p>
          </div>
          <Contact />
        </div>
        <Footer />
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default ProjectDetails;
