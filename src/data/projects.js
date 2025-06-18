import tamir from "../pages/project/imgs/TAMIR/tamirVideo.mp4";
import project2 from "../pages/project/imgs/project2.png";
import kukaVideo from "../pages/project/imgs/kuka_youbot/best.mp4";
import heroVideo from "../pages/project/imgs/FindMyRoomie/findRoomie.webm";
import dicePicture2 from "../pages/project/imgs/me314/pictureOfDice.png";

export const projects = [
  {
    id: 1,
    year: "2024",
    client: "Project 01",
    title: "TAMIR",
    section: "ROS2",
    description: "Comprehensive Mobile App Design and Development",
    summary:
      "An intelligent pet-monitoring robot that leverages SLAM for autonomous navigation and corrects undesirable pet behavior in real time.",
    media: tamir,
    type: "video",
  },
  {
    id: 2,
    year: "2024",
    client: "Project 04",
    title: "KUKA youBot",
    section: "Robotics & Control",
    description: "Mobile Manipulation with Feedback Control",
    summary:
      "Trajectory generation and feedback control for a mobile manipulator robot in CoppeliaSim using Python and Modern Robotics.",
    media: kukaVideo,
    type: "video",
  },
  {
    id: 3,
    year: "2025",
    client: "Find MyRoomie",
    title: "Find MyRoomie",
    section: "Mobile UX/UI & Product Strategy",
    description: "Gesture-driven map interface, AI compatibility scoring, and robust trust mechanisms for roommate matching.",
    summary:
      "Intuitive roommate matching platform featuring dynamic map zones, real-time filtering, and on-device trust & safety mechanisms.",
    media: heroVideo,
    type: "video",
  },
  {
    id: 4,
    year: "2025",
    client: "ME314 Final",
    title: "Dice Impact Simulation",
    section: "Physics Simulation",
    description: "Rigid body simulation with symbolic Lagrangian dynamics and impact modeling.",
    summary:
      "Simulates a falling dice inside a box using symbolic mechanics, event-based impact resolution, and visualized with RK4 integration and Plotly animation.",
    media: dicePicture2,
    type: "image",
  },
];
