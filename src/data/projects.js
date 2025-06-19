import tamir from "../pages/project/imgs/TAMIR/tamirVideo.mp4";
import project2 from "../pages/project/imgs/project2.png";
import kukaVideo from "../pages/project/imgs/kuka_youbot/optimized_kuka.mp4";
import heroVideo from "../pages/project/imgs/FindMyRoomie/findRoomie.webm";
import diceSimVideo from "../pages/project/imgs/me314/me314Video.mp4"
import entireScene from "../pages/project/imgs/spaceRacers/entireScene.webm";

import toastbotVideo   from "../pages/project/imgs/ToastBot/toastbotVideo.webm";  
import simulation    from "../pages/project/imgs/ToastBot/simulation.webm";   
import workflowDemo    from "../pages/project/imgs/ToastBot/diagram.png";    
import hardwareSetup   from "../pages/project/imgs/ToastBot/setup.png";  

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
    media: "/videos/optimized_kuka.mp4",
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
    media: diceSimVideo,
    type: "video",
  },
  {
  id: 5,
    year: "2025",
    client: "WebGL Final",
    title: "SpaceRacers: Planetary Exodus",
    section: "Computer Graphics",
    description: "WebGL space scene with procedural planets, dynamic shadows, and real-time ship races",
    summary:
      "An immersive WebGL simulation where three spaceships flee a dying planet. Features orbiting planets, dynamic lighting, eclipse shadows, camera controls, and a scoring system.",
    media: entireScene,
    type: "video",
  },
  {
    id: 6,
    year: "2024",
    client: "ToastBot",
    title: "ToastBot: Thermal Optimization and Actuation of Sliced Toast Robot",
    section: "Robotics & Automation",
    description: "Autonomous toast-making robot using ROS2, MoveIt2, and a Franka Emika Panda arm.",
    summary:
      "With a single service call, ToastBot executes a 14-step sequence—from bread pickup to final plating—using vision-guided precision, dynamic path planning, and custom end-effector design.",
    media: toastbotVideo,
    type: "video",
  }
];
