
import landingPage from "../pages/project/imgs/FindMyRoomie/findRoomie.webm";
import dicePicture2 from "../pages/project/imgs/me314/pictureOfDice.png";
import tamirVideo from "../pages/project/imgs/TAMIR/tamirVideo.mp4";
import kukaVideo from "../pages/project/imgs/kuka_youbot/best.mp4"
import entireScene from "../pages/project/imgs/spaceRacers/entireScene.webm";
import toastbotVideo   from "../pages/project/imgs/ToastBot/toastBotVideo.mp4";  
import arFoveationGif from "../pages/project/imgs/OwlVisionAR/arFoveation.mp4";


import controllerDiagram from "../pages/project/imgs/ME333/controllerDiagram.png";
import positionPIDSketch from "../pages/project/imgs/ME333/positionPID.png";
import trackingGif from "../pages/project/imgs/ME333/trackingDemo.mp4";
import waveformOutput from "../pages/project/imgs/ME333/waveform.png";
import rehaGripDemo from "../pages/project/imgs/RehaGrip/demo.mp4";


const name = "Aethur Tech";

export const otherProjects = [
  {
    id: 9,
    title: "RehaGrip: 240 g Raspberry Pi 4–Controlled Hand Orthotic",
    category: "Rehabilitation Robotics",
    date: "13 Aug 2025",
    author: name,
    description:
      "Lightweight motorized orthotic powered by a Raspberry Pi 4, U2D2 controller, and Dynamixel servo to deliver safe, repeatable finger-extension therapy with GUI + API control.",
    img: rehaGripDemo,
  },
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
  {
    id: 8,
    title: "ME333: Real-Time Motor Control with Embedded Systems",
    category: "Embedded Systems & UI Tools",
    date: "19 Jun 2025",
    author: name,
    description:
      "Developed dual-loop real-time control on the PIC32, integrating UART-based Python UI, interrupt-safe firmware, and trajectory tracking for motor actuation and analysis.",
    img: trackingGif,
  }
];
