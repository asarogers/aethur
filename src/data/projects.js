import tamir from "../pages/project/imgs/TAMIR/tamirVideo.mp4";
import project2 from "../pages/project/imgs/project2.png";
import kukaVideo from "../pages/project/imgs/kuka_youbot/optimized_kuka.mp4";
import heroVideo from "../pages/project/imgs/FindMyRoomie/findRoomie.webm";
import diceSimVideo from "../pages/project/imgs/me314/me314Video.mp4"
import entireScene from "../pages/project/imgs/spaceRacers/entireScene.webm";

import toastbotVideo   from "../pages/project/imgs/ToastBot/toastBotVideo.mp4";  
import arFoveationGif from "../pages/project/imgs/OwlVisionAR/arFoveation.mp4";

import trackingGif from "../pages/project/imgs/ME333/trackingDemo.mp4";
import rehaGripDemo from "../pages/project/imgs/RehaGrip/demo.mp4";
import rehaGripGui from "../pages/project/imgs/RehaGrip/1.jpg";
import cad from "../pages/project/imgs/RehaGrip/cad.png";



export const projects = [
  {
    id: 9,
    year: "2025",
    client: "Northwestern MSR",
    title: "RehaGrip – Motorized Hand Orthotic",
    section: "Rehabilitation Robotics",
    description: "240 g Raspberry Pi 4–controlled orthotic with Dynamixel servo, U2D2, and power board.",
    summary:
      "A lightweight motorized hand orthotic for stroke rehabilitation. Powered by a Raspberry Pi 4 with FastAPI backend, U2D2 controller, and Dynamixel power board, the system safely delivers repeatable finger extension therapy. Features include GUI for therapists, API for researchers, and safety-critical layers like torque cutoff and emergency stop.",
    media: rehaGripDemo, 
    type: "video",
    extraMedia: [
      { src: rehaGripGui, type: "image", caption: "Therapist GUI built with React + Tailwind" },
      { src: cad, type: "image", caption: "CAD model of the orthotic + servo assembly" },
    ],
  },
  {
    id: 7,
    year: "2025",
    client: "Final Imaging Project",
    title: "OwlVision AR",
    section: "AR & Computational Imaging",
    description: "Barn-owl inspired AR prototype combining computational optics, machine learning, and UX design.",
    summary:
      "A 10-week solo project exploring imaging pipelines, inverse problems, and user-centered design to develop an assistive AR concept that enhances low-vision perception in challenging conditions.",
    media: arFoveationGif,
    type: "video",
  },
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
    id: 8,
    year: "2025",
    client: "ME333 Final Project",
    title: "ME333: Real-Time Motor Control with Embedded Systems",
    section: "Embedded Systems & UI Tools",
    description: "PID control, Python UI, and interrupt-safe firmware on the PIC32 for real-time motor actuation and trajectory tracking.",
    summary:
      "Built a real-time control system with nested PID loops (5kHz current, 200Hz position), UART-based Python interface, and trajectory execution logic—visualized with live plots and CLI feedback.",
    media: trackingGif,
    type: "video",
  }
];
