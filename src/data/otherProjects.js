import logo from "../images/Final Logo/standAloneLogo.jpg";
import landingPage from "../pages/project/imgs/FindMyRoomie/findRoomie.webm";
import dicePicture2 from "../pages/project/imgs/me314/pictureOfDice.png";

const name = "Aethur Tech";

export const otherProjects = [
  {
    id: 1,
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
    img: logo,
  },
  {
    id: 3,
    title: "TAMIR: Assistive Pet Behavior Robot",
    category: "Robotics & AI",
    date: "24 Mar 2024",
    author: name,
    description:
      "Autonomous home robot with YOLOv8 object detection, geofencing, and corrective feedback to train pet behavior.",
    img: logo,
  },
  {
    id: 4,
    title: "Find MyRoomie",
    category: "Mobile UX/UI & Product Strategy",
    date: "16 Jun 2025",
    author: name,
    description:
      "Gesture-driven map interface, AI compatibility scoring, and robust trust mechanisms for roommate matching.",
    img: landingPage,
  },
];
