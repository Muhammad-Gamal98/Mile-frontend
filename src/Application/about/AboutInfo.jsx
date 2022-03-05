import React from "react";
import "../assets/styles/about/about.css";
import Sperator from "../shared/Sperator";
import img1 from "../assets/imgs/img1.png";
import img2 from "../assets/imgs/img2.png";
import img3 from "../assets/imgs/img3.png";
import Title from "../shared/Title";
function AboutInfo() {
  return (
    <div className="container">
      <Title title="معلومات عن شركة ميل للمقاولات العامة و التوريدات" />
      <div className="about-cards mt-7">
        <div className="small-cards fadeinleft animation-duration-1000">
          <div className="creation-date">
            <img src={img1} alt="tower" />
            <p> تأسست شركة مايل فور كونستراكشن في عام 2014</p>
          </div>
          <div className="mini-cards">
            <div className="projects">
              <img src={img2} alt="projects" />
              <p>عدد المشاريع</p>
              <p>30+</p>
            </div>
            <div className="projects">
              <img src={img3} alt="projects" />
              <p>عدد العاملين</p>
              <p>20+</p>
            </div>
          </div>
        </div>
        <div className="info-card fadeinright animation-duration-1000">
          <p>
            تقدم شركة ميل خدمات في المقاولات العامة والتوريدات، وإدارة الإنشاءات كما نوفر الخطط
            الهندسية المختلفة والمتعددة. نركز في انتشارنا على جميع أنحاء جمهورية مصر العربية.. إننا
            نسعى جاهدين لإتمام أعمالنا بكل أمانة ونزاهة واحترافية مطلقة.. تقديم الأفضل دومًا هو
            شعارنا.. نضمن لكم مشروعات ذات جودة عالية بأسعارٍ تنافسية، وتوقيت مميز إننا نفخر ونقول:
            أن سمعتنا تتحدث عن نفسها؛ لذا نستخدم قوتنا لإقامة شركات، وبناء ثقات.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;