import React, { useEffect, useRef, useState } from "react";
import "./Renegades.css";

import Left_arr from "../../assets/3_section/fraction_lefft_arrow.png";
import fraction from "../../assets/3_section/Fraction.png";
import Rigth_arr from "../../assets/3_section/fraction_rigth_arrow.png";
import Renegades_title from "../../assets/3_section/Renegades.png";

import icon1 from "../../assets/3_section/icon_1.png";
import icon2 from "../../assets/3_section/icon_2.png";
import icon3 from "../../assets/3_section/icon_3.png";
import icon4 from "../../assets/3_section/icon_4.png";
import icon5 from "../../assets/3_section/icon_5.png";
import icon6 from "../../assets/3_section/icon_6.png";

import fr_1_mat_1 from "../../assets/3_section/fr__1__mat__1__icon.png";
import fr_1_mat_2 from "../../assets/3_section/fr__1__mat__2__icon.png";
import fr_1_mat_3 from "../../assets/3_section/fr__1__mat__3__icon.png";

import fr_2_mat_1 from "../../assets/3_section/fr__2__mat__1__icon.png";
import fr_2_mat_2 from "../../assets/3_section/fr__2__mat__2__icon.png";
import fr_2_mat_3 from "../../assets/3_section/fr__2__mat__3__icon.png";

import fr_3_mat_1 from "../../assets/3_section/fr__3__mat__1__icon.png";
import fr_3_mat_2 from "../../assets/3_section/fr__3__mat__2__icon.png";
import fr_3_mat_3 from "../../assets/3_section/fr__3__mat__3__icon.png";

import fr_4_mat_1 from "../../assets/3_section/fr__4__mat__1__icon.png";
import fr_4_mat_2 from "../../assets/3_section/fr__4__mat__2__icon.png";
import fr_4_mat_3 from "../../assets/3_section/fr__4__mat__3__icon.png";

import fr_5_mat_1 from "../../assets/3_section/fr__5__mat__1__icon.png";
import fr_5_mat_2 from "../../assets/3_section/fr__5__mat__2__icon.png";
import fr_5_mat_3 from "../../assets/3_section/fr__5__mat__3__icon.png";

import fr_6_mat_1 from "../../assets/3_section/fr__6__mat__1__icon.png";
import fr_6_mat_2 from "../../assets/3_section/fr__6__mat__2__icon.png";
import fr_6_mat_3 from "../../assets/3_section/fr__6__mat__3__icon.png";

import fr_tit_1 from "../../assets/3_section/fr_title__1.png";
import fr_tit_2 from "../../assets/3_section/fr_title__2.png";
import fr_tit_3 from "../../assets/3_section/fr_title__3.png";
import fr_tit_4 from "../../assets/3_section/fr_title__4.png";
import fr_tit_5 from "../../assets/3_section/fr_title__5.png";
import fr_tit_6 from "../../assets/3_section/fr_title__6.png";

import leg_tit_1 from "../../assets/3_section/leg_title__1.png";
import leg_tit_2 from "../../assets/3_section/leg_title__2.png";
import leg_tit_3 from "../../assets/3_section/leg_title__3.png";
import leg_tit_4 from "../../assets/3_section/leg_title__4.png";
import leg_tit_5 from "../../assets/3_section/leg_title__5.png";
import leg_tit_6 from "../../assets/3_section/leg_title__6.png";

import video_1 from "../../assets/3_section/vid_1_v1.mov";
import video_2 from "../../assets/3_section/vid_2_v1.mov";
import video_3 from "../../assets/3_section/vid_3_v1.mov";
import video_4 from "../../assets/3_section/vid_4_v1.mov";
import video_5 from "../../assets/3_section/vid_5_v1.mov";
import video_6 from "../../assets/3_section/vid_6_v1.mov";

import poligon_bg from "../../assets/3_section/Polygon_bg.png";
import poligon_bg_white from "../../assets/3_section/Polygon_bg_white.png";

import fire from "../../assets/3_section/fire_1.png";
import water from "../../assets/3_section/water_1.png";

import legend from "../../assets/3_section/Legend.png";
import ell from "../../assets/3_section/Ell.png";
import question from "../../assets/3_section/question.png";

import center from "../../assets/3_section/center_image.png";

import ReactPlayer from "react-player";
import { useMouse } from "../../hools/useMouse";

let i = 0.5;

const data = [
  {
    fraction: {
      title: fr_tit_1,
      desc: "The first material race. Centenarians. Dark-skinned, tall, aristocrats. The ruler - Lud the Light - the son of the creator. They live in fertile oases with diamond lakes. They have a cyclopean architecture and a complex material culture.",
      bg: "bg__1",

      materials: [
        {
          icon: fr_1_mat_1,
          type: "Element",
          title: "Fire",
        },
        {
          icon: fr_1_mat_2,
          type: "Material",
          title: "Gold",
        },
        {
          icon: fr_1_mat_3,
          type: "Element",
          title: "Air",
        },
      ],
      religion: "Faith in the creator of the world, light magic",
    },
    video: video_1,
    legend: {
      title: leg_tit_1,
      desc: "The first material race. Centenarians. Dark-skinned, tall, aristocrats. The ruler - Lud the Light - the son of the creator. They live in fertile oases with diamond lakes. They have a cyclopean architecture and a complex material culture.",
      materials: [],
    },
  },
  {
    fraction: {
      title: fr_tit_2,
      desc: "In the legends of the first Eternals, there were stories about the locals. Even before the first contact, settlers spoke of silhouettes on the horizon. The first contact was at the wormhole.",
      bg: "bg__2",
      materials: [
        {
          icon: fr_2_mat_1,
          type: "Element",
          title: "Space",
        },
        {
          icon: fr_2_mat_2,
          type: "Material",
          title: "Stone",
        },
        {
          icon: fr_2_mat_3,
          type: "Element",
          title: "Water",
        },
      ],
      religion: "Unknown",
    },
    video: video_2,
    legend: {
      title: leg_tit_2,
      desc: "In the legends of the first Eternals, there were stories about the locals. Even before the first contact, settlers spoke of silhouettes on the horizon. The first contact was at the wormhole.",
      materials: [],
    },
  },
  {
    fraction: {
      title: fr_tit_3,
      desc: "In the legends of the first Eternals, there were stories about the locals. Even before the first contact, settlers spoke of silhouettes on the horizon.The first contact was at the wormhole.",
      bg: "bg__3",

      materials: [
        {
          icon: fr_3_mat_1,
          type: "Element",
          title: "Space",
        },
        {
          icon: fr_3_mat_2,
          type: "Material",
          title: "Stone",
        },
        {
          icon: fr_3_mat_3,
          type: "Element",
          title: "Water",
        },
      ],
      religion: "Unknown",
    },
    video: video_3,
    legend: {
      title: leg_tit_3,
      desc: "In the legends of the first Eternals, there were stories about the locals. Even before the first contact, settlers spoke of silhouettes on the horizon. The first contact was at the wormhole.",
      materials: [],
    },
  },
  {
    fraction: {
      title: fr_tit_4,
      desc: "In the legends of the first Eternals, there were stories about the locals. Even before the first contact, settlers spoke of silhouettes on the horizon.The first contact was at the wormhole.",
      bg: "bg__4",
      materials: [
        {
          icon: fr_4_mat_1,
          type: "Element",
          title: "Space",
        },
        {
          icon: fr_4_mat_2,
          type: "Material",
          title: "Stone",
        },
        {
          icon: fr_4_mat_3,
          type: "Element",
          title: "Water",
        },
      ],
      religion: "Unknown",
    },
    video: video_4,
    legend: {
      title: leg_tit_4,
      desc: "In the legends of the first Eternals, there were stories about the locals. Even before the first contact, settlers spoke of silhouettes on the horizon. The first contact was at the wormhole.",
      materials: [],
    },
  },
  {
    fraction: {
      title: fr_tit_5,
      desc: "In the legends of the first Eternals, there were stories about the locals. Even before the first contact, settlers spoke of silhouettes on the horizon.The first contact was at the wormhole.",
      bg: "bg__5",
      materials: [
        {
          icon: fr_5_mat_1,
          type: "Element",
          title: "Space",
        },
        {
          icon: fr_5_mat_2,
          type: "Material",
          title: "Stone",
        },
        {
          icon: fr_5_mat_3,
          type: "Element",
          title: "Water",
        },
      ],
      religion: "Unknown",
    },
    video: video_5,
    legend: {
      title: leg_tit_5,
      desc: "In the legends of the first Eternals, there were stories about the locals. Even before the first contact, settlers spoke of silhouettes on the horizon. The first contact was at the wormhole.",
      materials: [],
    },
  },
  {
    fraction: {
      title: fr_tit_6,
      desc: "In the legends of the first Eternals, there were stories about the locals. Even before the first contact, settlers spoke of silhouettes on the horizon.The first contact was at the wormhole.",
      bg: "bg__6",
      materials: [
        {
          icon: fr_6_mat_1,
          type: "Element",
          title: "Space",
        },
        {
          icon: fr_6_mat_2,
          type: "Material",
          title: "Stone",
        },
        {
          icon: fr_6_mat_3,
          type: "Element",
          title: "Water",
        },
      ],
      religion: "Unknown",
    },
    video: video_6,
    legend: {
      title: leg_tit_6,
      desc: "In the legends of the first Eternals, there were stories about the locals. Even before the first contact, settlers spoke of silhouettes on the horizon. The first contact was at the wormhole.",
      materials: [],
    },
  },
];

const Renegades = () => {
  const playerRef = useRef(null);
  const { x } = useMouse();

  const [renegades, setRenegades] = useState(data[0]);

  const [mouseSection, setMouseSection] = useState(0.5);
  const [oldPosition, setOldPosition] = useState(0.5);
  useEffect(() => {
    if (x < 600) {
      if (mouseSection !== 1) {
        setOldPosition(mouseSection);

        setMouseSection(1);
      }
    }
    if (x >= 600 && x < 1250) {
      if (mouseSection !== 0.5) {
        setOldPosition(mouseSection);
        setMouseSection(0.5);
      }
    }
    if (x >= 1250) {
      if (mouseSection !== 0) {
        setOldPosition(mouseSection);
        setMouseSection(0);
      }
    }
  }, [x]);

  let frame;
  useEffect(() => {
    // let frame = setInterval(function () {
    //   playerRef.current.seekTo(i, "fraction");

    //   console.log("i:= ", i);

    //   if (i < 0 || i > 1) {
    //     clearInterval(frame);
    //     console.log("clear interval");

    //     // setI(mouseSection);
    //     return;
    //   }

    //   if (i < mouseSection) {
    //     // setI(i + 0.016);
    //     i = i + 0.016;
    //   }
    //   if (i > mouseSection) {
    //     // setI(i - 0.016);
    //     i = i - 0.016;
    //   }
    // }, 40);

    // if (i > 1 || i < 0) {
    //   clearInterval(frame);
    // }

    if (oldPosition === 0.5 && mouseSection === 1) {
      clearInterval(frame);
      frame = null;
      let i = 0.5;
      frame = setInterval(function () {
        playerRef.current.seekTo(i, "fraction");
        if (mouseSection !== 1) {
          clearInterval(frame);
        }
        if (i < 1) {
          i = i + 0.06;
        } else {
          clearInterval(frame);
        }
      }, 70);
    }

    if (oldPosition === 1 && mouseSection === 0.5) {
      clearInterval(frame);
      frame = null;
      let i = 1;
      frame = setInterval(function () {
        playerRef.current.seekTo(i, "fraction");
        if (mouseSection !== 0.5) {
          clearInterval(frame);
        }
        if (i > 0.5) {
          i = i - 0.06;
        } else {
          clearInterval(frame);
        }
      }, 70);
    }

    if (oldPosition === 0.5 && mouseSection === 0) {
      clearInterval(frame);
      frame = null;
      let i = 0.5;
      frame = setInterval(function () {
        playerRef.current.seekTo(i, "fraction");
        if (mouseSection !== 0) {
          clearInterval(frame);
        }
        if (i > 0) {
          i = i - 0.06;
        } else {
          clearInterval(frame);
        }
      }, 70);
    }

    if (oldPosition === 0 && mouseSection === 0.5) {
      clearInterval(frame);
      frame = null;
      let i = 0;
      frame = setInterval(function () {
        playerRef.current.seekTo(i, "fraction");
        if (mouseSection !== 0.5) {
          clearInterval(frame);
        }
        if (i < 0.5) {
          i = i + 0.06;
        } else {
          clearInterval(frame);
        }
      }, 70);
    }
  }, [mouseSection]);

  return (
    <div className={`renegades`}>
      <div className={`container ${renegades.fraction.bg}`}>
        <div className="wrapper">
          <div className="left">
            <div className="franc_title">
              <img src={Left_arr} alt="arr" />
              <img src={fraction} alt="arr" height="17px" />
              <img src={Rigth_arr} alt="arr" />
            </div>

            <div className="reneg_title">
              <img src={renegades.fraction.title} alt="" height="52px" />
            </div>

            <div className="fraction_icons">
              <img
                src={icon1}
                alt="icon"
                // width="54px"
                height="54px"
                onClick={() => setRenegades(data[0])}
              />
              <img
                src={icon2}
                alt="icon"
                width={54}
                onClick={() => setRenegades(data[1])}
              />
              <img
                src={icon3}
                alt="icon"
                width={54}
                onClick={() => setRenegades(data[2])}
              />
              <img
                src={icon4}
                alt="icon"
                width={54}
                onClick={() => setRenegades(data[3])}
              />
              <img
                src={icon5}
                alt="icon"
                width={54}
                onClick={() => setRenegades(data[4])}
              />
              <img
                src={icon6}
                alt="icon"
                width={54}
                onClick={() => setRenegades(data[5])}
              />
            </div>

            <div className="fraction_desc">{renegades.fraction.desc}</div>

            <div className="fraction_characteristic">
              <div className="poligon">
                <img
                  src={renegades.fraction.materials[0].icon}
                  alt="fire"
                  className="poligon__img"
                  // width={64}
                  // height={64}
                />
                <div className="polig_subtitle">
                  {renegades.fraction.materials[0].type}
                </div>
                <div className="polig_title">
                  {renegades.fraction.materials[0].title}
                </div>
              </div>
              <div className="poligon">
                <img
                  src={renegades.fraction.materials[1].icon}
                  alt="fire"
                  className="poligon__img"
                  // width={64}
                  // height={64}
                />
                <div className="polig_subtitle">
                  {renegades.fraction.materials[1].type}
                </div>
                <div className="polig_title">
                  {renegades.fraction.materials[1].title}
                </div>
              </div>
              <div className="poligon">
                <img
                  src={renegades.fraction.materials[2].icon}
                  alt="fire"
                  className="poligon__img"
                  // width={64}
                  // height={64}
                />
                <div className="polig_subtitle">
                  {renegades.fraction.materials[2].type}
                </div>
                <div className="polig_title">
                  {renegades.fraction.materials[2].title}
                </div>
              </div>
            </div>

            <div className="religion">
              <div className="polig_subtitle">Religion</div>
              <div className="polig_title">{renegades.fraction.religion}</div>
            </div>
          </div>
          <div className="center">
            <ReactPlayer
              width="100%"
              height="100%"
              ref={playerRef}
              url={renegades.video}
            />
          </div>
          <div className="rigth">
            <div className="franc_title">
              <img src={Left_arr} alt="arr" />
              <img src={legend} alt="arr" height="17px" />
              <img src={Rigth_arr} alt="arr" />
            </div>

            <div className="reneg_title">
              <img src={renegades.legend.title} alt="" height="52px" />
            </div>
            <div className="fraction_desc_rigth">{renegades.legend.desc}</div>
            <div className="fraction_characteristic">
              <div className="poligon_white">
                <img src={question} alt="fire" width={22} />
              </div>
              <div className="poligon_white">
                <img src={question} alt="fire" width={22} />
              </div>
              <div className="poligon_white">
                <img src={question} alt="fire" width={22} />
              </div>
            </div>
            {/* <button onClick={handleButtun}>Orta gech {x}</button> */}
            <h2 style={{ color: "white" }}>oldSection {oldPosition}</h2>
            <h2 style={{ color: "white" }}>mousePosition {mouseSection}</h2>
            {/* <h2 style={{ color: "white" }}>i:= {i}</h2> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renegades;
