
import landingPage from "../pages/project/imgs/FindMyRoomie/findRoomie.webm";
import dicePicture2 from "../pages/project/imgs/me314/pictureOfDice.png";
import spaceShip from "../pages/project/imgs/spaceRacers/spaceShip.png";
import tamirVideo from "../pages/project/imgs/TAMIR/tamirVideo.mp4";
import phoneView from "../pages/project/imgs/TAMIR/phoneView.mp4";
import teleop from "../pages/project/imgs/TAMIR/teleop.mp4";
import firstMap from "../pages/project/imgs/TAMIR/firstMap.webm";
import kukaVideo from "../pages/project/imgs/kuka_youbot/best.mp4"
import findRoomie from "../pages/project/imgs/FindMyRoomie/findRoomie.webm"
import kukaPhoto from "../pages/project/imgs/kuka_youbot/kuka_youbot.jpg"
import diceSimVideo from "../pages/project/imgs/me314/me314Video.mp4"
import dicePicture1 from "../pages/project/imgs/me314/heightVsTime.png"
import dicePicture3 from "../pages/project/imgs/me314/velocityVsTime.png"
import moonShadow from "../pages/project/imgs/spaceRacers/moonShadow.png";
import farScene from "../pages/project/imgs/spaceRacers/farScene.png";
import entireScene from "../pages/project/imgs/spaceRacers/entireScene.webm";
import rotatingMoon from "../pages/project/imgs/spaceRacers/roatingMoon.webm";


import toastbotVideo   from "../pages/project/imgs/ToastBot/toastBotVideo.mp4";  
import simulation    from "../pages/project/imgs/ToastBot/simulation.webm";   
import diagram    from "../pages/project/imgs/ToastBot/diagram.png";    
import hardwareSetup   from "../pages/project/imgs/ToastBot/setup.png";  
import arFoveationGif from "../pages/project/imgs/OwlVisionAR/arFoveation.mp4";


const name = "Aethur Tech";

export const otherProjects = [
  {
    id: 7,
    title: "OwlVision AR: Barn-Owl Inspired Assistive AR",
    category: "AR & Computational Imaging",
    date: "19 Jun 2025",
    author: name,
    description:
      "A 10-week journey integrating computational imaging, machine learning, and UX to prototype an AR concept that boosts low-vision users’ perception—drawing inspiration from barn-owl night vision.",
    img: arFoveationGif,
  },
  {
    id: 4,
    title: "Dice Impact Simulation",
    category: "Physics Simulation & Symbolic Computing",
    date: "17 Jun 2025",
    author: name,
    description:
      "Symbolic Lagrangian dynamics, collision modeling, and RK4 integration to simulate a rigid dice inside a bounding box.",
    img: dicePicture2,
  },
  {
    id: 2,
    title: "KUKA youBot: Mobile Manipulation",
    category: "Robotics & Control",
    date: "22 May 2024",
    author: name,
    description:
      "Pick-and-place trajectory generation using SE(3) motion planning, feedback control, and CoppeliaSim simulation.",
    img: kukaVideo,
  },
  {
    id: 1,
    title: "TAMIR: Assistive Pet Behavior Robot",
    category: "Robotics & AI",
    date: "24 Mar 2024",
    author: name,
    description:
      "Autonomous home robot with YOLOv8 object detection, geofencing, and corrective feedback to train pet behavior.",
    img: tamirVideo,
  },
  {
    id: 3,
    title: "Find MyRoomie",
    category: "Mobile UX/UI & Product Strategy",
    date: "16 Jun 2025",
    author: name,
    description:
      "Gesture-driven map interface, AI compatibility scoring, and robust trust mechanisms for roommate matching.",
    img: landingPage,
  },
  {
    id: 5,
    title: "SpaceRacers: Planetary Exodus",
    category: "Computer Graphics",
    date: "05 Mar 2025",
    author: name,
    description:
      "WebGL simulation with orbiting planets, flame-animated spaceships, eclipse shadows, and real-time scoring.",
    img: entireScene,
  },
  {
    id: 6,
    title: "ToastBot: Thermal Optimization and Actuation of Sliced Toast Robot",
    category: "Robotics & Automation",
    date: "12 Dec 2024",
    author: name,
    description:
      "Fully autonomous toast-making sequence with ROS2, custom MoveIt2 API, AprilTag tracking, and a chopstick-style end-effector for delicate bread handling.",
    img: toastbotVideo,
  },
];
