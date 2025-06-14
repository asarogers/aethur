import tamir from "../pages/project/imgs/TAMIR/tamirVideo.mp4";
import project2 from "../pages/project/imgs/project2.png";
import kukaVideo from "../pages/project/imgs/kuka_youbot/best.mp4"

export const projects = [
  {
    id: 1,
    year: "2024",
    client: "Project 01",
    title: "TAMIR",
    section: "ROS2",
    description: "Comprehensive Mobile App Design and Development",
    summary:
      "An intelligent pet-monitoring robot that leverages SLAM for autonomous navigation and correct undesirable pet behavior in real time.",
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
];
