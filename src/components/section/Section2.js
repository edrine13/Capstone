import React from "react";
import style from "./Section2.module.css";
import WhyUsCards from "../card/WhyUsCards";
import { Link } from "react-router-dom";
import { DummyData } from "../../store/dummy-data";

const Section2 = () => {
  return (
    <section
      id="featured-services"
      className={`${style["featured-services"]} ${style["section-bg"]}`}
    >
      <div className="container" data-aos="fade-up ">
        <div className="row">
          <div className={`${style["section-title"]} mb-4`}>
            <h3 >
              Why<span> Us?</span>
            </h3>
          </div>
          {DummyData.map((item) => (
            <WhyUsCards
              key={item.id}
              description={item.description}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>

        <div className="text-center py-3 mt-4">
          <Link to="/">
            <button type="button" className={`${style["btn-learn"]} btn-lg`}>
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section2;
