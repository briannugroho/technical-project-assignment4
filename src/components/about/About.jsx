import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3022134/pexels-photo-3022134.jpeg?cs=srgb&dl=pexels-dennis-mau-3022134.jpg&fm=jpg&_gl=1*rarrxa*_ga*NDA2NzM2Nzk1LjE2Njc5ODk5MjY.*_ga_8JE65Q40S6*MTY2Nzk5MjkzMS4yLjEuMTY2Nzk5Mjk2My4wLjAuMA.."
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Aktif didunia disain,programing dan fotography.</p>
        <p className="a-desc">
          Saya Brian wahyu nugroho,kuliah di jurusan teknologi komputer.Diwaktu
          luang saya belajar tentang pengembangan front end dan beberapa desain
          grafis yang bertujuan dapat membuat website yang lebih menarik dan
          mempelajari dasar-dasar fotography.
        </p>
      </div>
    </div>
  );
};

export default About;
