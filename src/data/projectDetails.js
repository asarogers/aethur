import tamirVideo from "../pages/project/imgs/TAMIR/tamirVideo.mp4";
import phoneView from "../pages/project/imgs/TAMIR/phoneView.mp4";
import teleop from "../pages/project/imgs/TAMIR/teleop.mp4";
import firstMap from "../pages/project/imgs/TAMIR/firstMap.webm";
import kukaVideo from "../pages/project/imgs/kuka_youbot/best.mp4"
import findRoomie from "../pages/project/imgs/FindMyRoomie/findRoomie.webm"
import kukaPhoto from "../pages/project/imgs/kuka_youbot/kuka_youbot.jpg"
import diceSimVideo from "../pages/project/imgs/me314/me314Video.mp4"
import dicePicture1 from "../pages/project/imgs/me314/heightVsTime.png"
import dicePicture2 from "../pages/project/imgs/me314/pictureOfDice.png"
import dicePicture3 from "../pages/project/imgs/me314/velocityVsTime.png"
import moonShadow from "../pages/project/imgs/spaceRacers/moonShadow.png";
import farScene from "../pages/project/imgs/spaceRacers/farScene.png";
import spaceShip from "../pages/project/imgs/spaceRacers/spaceShip.png";
import entireScene from "../pages/project/imgs/spaceRacers/entireScene.webm";
import rotatingMoon from "../pages/project/imgs/spaceRacers/roatingMoon.webm";

import toastbotVideo   from "../pages/project/imgs/ToastBot/toastBotVideo.mp4";  
import simulation    from "../pages/project/imgs/ToastBot/simulation.webm";   
import workflowDemo    from "../pages/project/imgs/ToastBot/diagram.png";    
import hardwareSetup   from "../pages/project/imgs/ToastBot/setup.png";   

import whiteboardSession from "../pages/project/imgs/OwlVisionAR/whiteboardSession.png";
import calibrationSketch from "../pages/project/imgs/OwlVisionAR/calibrationSketch.png";
import uiPrototype from "../pages/project/imgs/OwlVisionAR/uiPrototype.png";
import mlFeatureGif from "../pages/project/imgs/OwlVisionAR/mlFeature.mp4";
import barnOwlVsAR from "../pages/project/imgs/OwlVisionAR/barnOwlVsAR.png";
import arFoveationGif from "../pages/project/imgs/OwlVisionAR/arFoveation.mp4";

export const projectData = {
  7: {
    title: "OwlVision AR: Barn-Owl Inspired Assistive Augmented Reality",
    date: "June 19, 2025",
    author: "Ace Rogers",
    category: "AR & Computational Imaging",
    introText:
      "OwlVision AR fuses barn-owl-inspired optics with real-time AR enhancements to empower low-vision users in challenging light conditions. Over ten weeks, I developed computational imaging pipelines, machine-learning models, and UX prototypes that culminate in a dynamic, user-centered AR concept.",
    sections: [
      {
        subtitle: "Getting Oriented",
        content:
          "Kickoff: built a Python imaging toolkit for Gaussian filtering and autograder validation. Modeled Airy-disk diffraction patterns to compare theoretical vs. computed resolution limits, revealing critical unit-conversion insights.",
        image: whiteboardSession
      },
      {
        subtitle: "Building Vision Foundations",
        content:
          "Implemented color-correction pipelines with hue histograms and white-balance sliders; calibrated a 360° camera using checkerboard patterns and triangulated real-world distances, refining UX controls for color and depth cues.",
        image: calibrationSketch,
        image: uiPrototype
      },
      {
        subtitle: "Leveraging Learning & Frequencies",
        content:
          "Trained and profiled CNN architectures on MNIST to evaluate lightweight inference strategies; developed a 2D-latent autoencoder to visualize feature clusters, informing focus and contrast adjustments for AR displays.",
        video: mlFeatureGif
      },
      {
        subtitle: "Tackling Inverse Problems & AR Inspiration",
        content:
          "Implemented inverse filtering and Wiener deconvolution with L2 and LASSO regularization; conducted a literature synthesis on barn-owl night vision to inspire AR headset designs with biological contrast enhancements.",
        image: barnOwlVsAR
      },
      {
        subtitle: "Prototype Development & Synthesis",
        content:
          "Designed AR UX flows with dynamic contrast rings, motion-triggered brightness boosts, and foveated enhancement; iterated through user tests to optimize latency and control layouts, delivering a cohesive OwlVision AR prototype.",
        video: arFoveationGif
      },
      {
        subtitle: "Outcomes & Highlights",
        content:
          "• Developed unit-tested image filtering, deconvolution, and low-light enhancement pipelines.\n• Integrated lightweight ML modules for dynamic scene analysis.\n• Produced AR UX prototypes illustrating real-time control of brightness, contrast, and color balance.\n• Delivered final demo 'OwlVision AR' concept with positive feedback on interdisciplinary integration."
      },
      {
        subtitle: "Lessons Learned",
        content:
          "• Balanced theoretical models with quick prototyping to accelerate iteration.\n• Prioritized user-centered controls, revealing essential UI elements.\n• Strengthened cross-functional skills by leading research, design, and engineering efforts."
      },
      {
        subtitle: "Final Reflection",
        content:
          "This journey honed my ability to merge computational imaging, machine learning, and user-focused design into transformative AR experiences. I’m now prepared to tackle complex, interdisciplinary challenges in product design and software engineering roles."
      }
    ],
    img: arFoveationGif
  }
  ,
  1: {
    title: "TAMIR: The Training Assistive Mobile Intelligent Robot",
    date: "March 24, 2024",
    author: "John Doe",
    category: "Robotics & AI",
    introText:
      "Many pet owners face trouble with their furry friends getting into mischief—chewing furniture, barking excessively, or wandering into off-limits areas. TAMIR was designed to be an intelligent companion robot that detects, monitors, and corrects undesirable pet behaviors autonomously. Built with real-time navigation, geofencing, and corrective signal delivery, TAMIR represents a powerful integration of robotics and AI to make modern pet ownership safer and more manageable.",
    sections: [
      {
        subtitle: "Technical Details",
        content: [
          {
            label: "Precision Navigation",
            text: "The ROSbot 2R platform provides real-time SLAM capabilities using LiDAR and IMU sensors. This enables TAMIR to localize itself accurately within a dynamically changing household environment and navigate to precise locations for pet observation."
          },
          {
            label: "Edge AI Processing",
            text: "A Raspberry Pi 5 onboard computer runs the YOLOv8 object detection model, optimized via ONNX runtime. This ensures low-latency detection of pet behavior without requiring cloud inference or internet connectivity."
          },
          {
            label: "Smart Detection",
            text: "YOLOv8 enables robust detection of cats and dogs across varying lighting conditions and poses. Bounding boxes and class confidence scores are used to trigger behavior recognition logic in the ROS2 stack."
          },
          {
            label: "Geofencing",
            text: "AprilTags placed throughout the home serve as physical anchors that define safe and restricted zones. The robot continuously cross-references the detected pet's position with known geofenced areas to determine boundary violations."
          },
          {
            label: "Corrective Feedback",
            text: "A waterproof ultrasonic buzzer module is activated to deliver gentle auditory correction when the pet crosses into restricted zones. Signal parameters are calibrated to ensure humane and effective behavior correction."
          },
          {
            label: "Multi-Pet Coverage",
            text: "A secondary USB camera mounted on the rear of TAMIR ensures full 360° visual coverage, allowing the robot to handle multi-pet environments or fast-moving pets that may otherwise exit the primary field of view."
          }
        ],
        video: teleop
      },
      {
        subtitle: "Implementation",
        content:
          "TAMIR integrates real-time data from multiple sources—including LiDAR, RGB cameras, AprilTag detection, and onboard AI inference—to determine when a corrective action is needed. A ROS2 behavior tree node fuses all sensor data and manages the robot's response logic. The motion planner ensures safe traversal to target positions, while the behavior node decides when and where to trigger auditory corrections. The system uses an event-based architecture to minimize CPU load and preserve battery life.",
        video: firstMap
      },
      {
        subtitle: "Behavior Monitoring & Correction",
        content:
          "Using YOLO-based pet detection, TAMIR continuously analyzes live camera feeds to identify pets in the field of view. When a pet is detected within a restricted area, TAMIR logs the behavior and issues a corrective signal. The pet’s position is also tracked using AprilTag triangulation and updated to a central monitoring dashboard. These real-time updates help pet owners review patterns of unwanted behavior and tailor training protocols accordingly.",
        video: phoneView
      },
      {
        subtitle: "Results and Impact",
        content:
          "TAMIR has demonstrated strong results during trials across various home layouts. It achieved 95% accuracy in detecting boundary violations and delivered corrective feedback within an average of 2.1 seconds of detection. Pet owners reported significant improvements in pet compliance within one week of deployment. TAMIR's modular architecture also makes it suitable for integration with smart home systems, creating possibilities for more advanced home automation tied to pet behavior."
      }
    ],
    img: tamirVideo
  },
  
  2:{
    title: "KUKA youBot: Mobile Manipulation",
    date: "May 22, 2024",
    author: "Asa Rogers",
    category: "Robotics & Control",
    introText: "The KUKA youBot project demonstrates full pick-and-place functionality using a mobile manipulator simulated in CoppeliaSim. By combining an 8-segment SE(3) trajectory with real-time feedback control and odometry-based base tracking, the system performs smooth end-effector motion under joint and kinematic constraints. This project highlights the integration of trajectory planning, control theory, and simulation tools to achieve precise, hybrid mobile manipulation in a simulated environment."
,
    sections: [
      {
        subtitle: "Technical Details",
        content: [
          { label: "End-effector Task", text: "Pick at (1.25, 0), place at (0, -1.25)" },
          { label: "Joint Limits", text: "Joint 1: [-2.0, 2.0], Joints 2–4: [-1.5, 1.5], Joint 5: [-2.5, 2.5]" },
          { label: "Control Loop", text: "Feedforward + PI (Kp=1.0, Ki=0.5)" },
          { label: "Planner", text: "8-segment SE(3) trajectory using ScrewTrajectory()" },
          { label: "Execution", text: "Trajectory tracking with feedback_control() and Jacobian pseudo-inverse" },
          { label: "Validation", text: "Logged CSVs + CoppeliaSim visualization" },
        ],
        image: kukaPhoto,
      },
      {
        subtitle: "Implementation",
        markdown: true,
        markdownFile: "kuka_implementation.md"  // instead of inline content
      },
      {
        subtitle: "Results and Impact",
        content:
          "Demonstrated robust convergence under joint limits and kinematic constraints. Successfully executed pick-and-place under various error conditions.",
      },
    ],
    img: kukaVideo, // This will show in <HeroSection />
  },
  3: {
    title: "Find MyRoomie: A Gen Z-Focused Roommate Matching App",
    date: "June 16, 2025",
    author: "Ace Rogers",
    category: "Mobile UX/UI & Product Strategy",
    introText:
      "Find MyRoomie empowers young adults to discover compatible roommates and affordable living spaces through an intuitive, gesture-driven map interface. By combining zone-based filtering, AI-powered compatibility scoring, and robust trust mechanisms, the app tackles the core pain points—scams, paywalls, and irrelevant listings—of existing roommate platforms.",
    sections: [
      {
        subtitle: "Problem & Research",
        content: [
          {
            label: "Trust Deficit",
            text: "Over 80% of users report encountering fake profiles or scams on legacy apps, eroding confidence in online roommate searches."
          },
          {
            label: "Broken Filters",
            text: "User-set filters were often ignored, leading to irrelevant matches and wasted time during the search process."
          },
          {
            label: "Paywall Friction",
            text: "Communication paywalls and hidden fees blocked genuine connections and reduced overall app accessibility."
          }
        ]
      },
      {
        subtitle: "Design & Interaction",
        content: [
          {
            label: "Dynamic Map Zones",
            text: "Multi-touch gestures allow users to draw precise living areas directly on the map to focus their search."
          },
          {
            label: "Real-Time Filtering",
            text: "Listings and profiles update instantly within drawn boundaries, streamlining discovery."
          }
        ],
        // video: mapInteraction
      },
      {
        subtitle: "Matching & Personalization",
        content: [
          {
            label: "Vibe Matching",
            text: "Filters based on lifestyle preferences, daily routines, and shared interests generate an AI-driven compatibility score."
          },
          {
            label: "Smart Suggestions",
            text: "Machine learning surfaces roommate and listing recommendations that align with user behavior signals."
          }
        ],
        // video: vibeMatching
      },
      {
        subtitle: "Trust & Safety Mechanisms",
        content: [
          {
            label: "Profile Verification",
            text: "Integration with email, phone, and social accounts ensures each user’s identity is authenticated."
          },
          {
            label: "Fraud Detection",
            text: "On-device ML models flag suspicious activity patterns and automatically warn users."
          },
          {
            label: "Transparent Ratings",
            text: "Verified review badges and trust scores provide social proof and build confidence in each match."
          }
        ],
        // video: trustFlow
      },
      {
        subtitle: "Implementation & Tools",
        content:
          "Built with React Native and Mapbox, backed by Firebase Auth and Firestore. Figma prototypes guided the UI/UX, while Storybook documented reusable components. On-device ML inference for fraud detection runs via TensorFlow Lite.",
        // image: landingPage
      },
      {
        subtitle: "Results & Impact",
        content:
          "Beta testers saw a 75% reduction in irrelevant matches and a 60% lift in trust ratings. Interactive map sessions doubled average session time, and early adopters rated Find MyRoomie 4.8/5 for ease of use and reliability."
      }
    ],
    img: findRoomie
  },
  4: {
    title: "Dice Impact Simulation with Lagrangian Mechanics",
    date: "June 17, 2025",
    author: "Ace Rogers",
    category: "Physics Simulation & Symbolic Computing",
    introText:
      "This project simulates a 2D falling dice inside a constrained box using Lagrangian mechanics. The dynamics include both translational and rotational motion under gravity, with collision handling at boundaries using instantaneous impact models. The simulation captures the complexity of rigid body mechanics with sympy-derived equations and real-time event detection.",
    sections: [
      {
        subtitle: "Technical Details",
        markdown: true,
        markdownFile: "dice_lagrangian.md",
        image: dicePicture2 // image of the dice itself
      },
      {
        subtitle: "Impact Model & Event Handling",
        markdown: true,
        markdownFile: "dice_impact_model.md"
      },
      {
        subtitle: "Simulation Architecture",
        markdown: true,
        markdownFile: "dice_sim_architecture.md",
        image: dicePicture3 // velocity vs time
      },
      {
        subtitle: "Results & Observations",
        content:
          "The animation and plots show realistic collision behavior of the dice within the box. The rotation accumulates as energy is transferred across contacts. Dice impacts with the ground and ceiling show proper post-impact velocity changes, and wall bounces are modeled with directional inversions. The simulation successfully demonstrates symbolic physics in action using modern Python tooling.",
        video: diceSimVideo,
        image: dicePicture1 // height vs time
      }
    ],
    img: diceSimVideo
  },
  5: {
    title: "SpaceRacers: Planetary Exodus in WebGL",
    date: "March 5, 2025",
    author: "Asa Rogers",
    category: "Computer Graphics",
    introText:
      "Three ships flee a planet drifting too close to its sun. SpaceRacers brings this interstellar crisis to life with dynamic lighting, procedurally generated planets, and an interactive race mechanic.",
    sections: [
      {
        subtitle: "Interactive Features",
        content: [
          {
            label: "Scoring System",
            text: "Tracks distance traveled by each ship every 10.5s. The one that travels farthest before reset wins."
          },
          {
            label: "Camera Control",
            text: "User can follow the main ship or move freely using WASD + RF. Yaw rotation via keyboard."
          },
          {
            label: "Sunlight & Shadows",
            text: "A realistic eclipse effect simulates the orbiting planet casting shadows based on camera and light alignment."
          }
        ],
        image: moonShadow
      },
      {
        subtitle: "Celestial Generation",
        content: [
          {
            label: "Procedural Planets",
            text: "Rocky, ice, and gas planets generated with simplex noise for elevation and terrain variation."
          },
          {
            label: "Orbiting Planet",
            text: "A fourth planet orbits the sun dynamically and casts real-time shadows and eclipse effects."
          },
          {
            label: "Starfield",
            text: "1000+ randomly generated stars with variable brightness and position for full environmental immersion."
          }
        ],
        image: farScene
      },
      {
        subtitle: "Ship Design & Flame Effects",
        content: [
          {
            label: "Ship Mesh",
            text: "Custom OBJ model for main ship with flame engines that pulse and dissolve using noise and sin-based animations."
          },
          {
            label: "Flame Flicker",
            text: "Uses sinusoidal displacement, random noise, and triangle-based dissolve to simulate dynamic flame."
          }
        ],
        image: spaceShip,
        video: rotatingMoon
      },
      {
        subtitle: "Shader System",
        content: [
          {
            label: "Lighting",
            text: "Phong lighting model with ambient, diffuse, and specular. Supports adjustable brightness."
          },
          {
            label: "Eclipse Detection",
            text: "Fragment shader detects eclipse via vector dot product between sun, camera, and planet, blending shadow."
          }
        ]
      },
      {
        subtitle: "Results",
        content:
          "The simulation runs in real time, rendering 3D space dynamics with high interactivity. Eclipse effects trigger smoothly as planets align with light and camera, while races remain competitive with live score tracking."
      }
    ],
    img: entireScene,
  },
  6: {
    title: "ToastBot: Thermal Optimization and Actuation of Sliced Toast Robot",
    date: "December 12, 2024",
    author: "Sharwin Patil, Asa Rogers, Tony Shilati, Grayson Snyder",
    category: "Robotics & Automation",
    introText:
      "ToastBot is an autonomous robotics system that performs the complete toast-making process from start to finish. Built using ROS2 and powered by a Franka Emika Panda robot arm, this project showcases advanced robotics concepts including computer vision, path planning, and precise manipulation. With a single service call, ToastBot executes a 14-step sequence from bread pickup to final plating, demonstrating the integration of multiple complex systems.",
    sections: [
      {
        subtitle: "Technical Details",
        content: [
          {
            label: "ROS2 Architecture",
            text: "Built on ROS2 framework with custom MoveIt2 API for motion planning and execution. Multi-threaded executor enables concurrent processing and autonomous operation."
          },
          {
            label: "Computer Vision",
            text: "Intel RealSense cameras provide depth perception while AprilTag detection enables precise 6DOF pose estimation for all scene objects with millimeter-level accuracy."
          },
          {
            label: "Custom End-Effector",
            text: "Chopstick-style gripper specifically designed for delicate bread manipulation, featuring force-sensitive gripping and optimized approach trajectories."
          },
          {
            label: "Scene Understanding",
            text: "Real-time transform updates track bread loaf, toaster, lever, and plate positions using embedded AprilTag markers on custom 3D-printed fixtures."
          },
          {
            label: "Path Planning",
            text: "Dynamic obstacle avoidance using MoveIt2 with real-time scene updates, ensuring safe traversal while maintaining operational efficiency."
          },
          {
            label: "Service Architecture",
            text: "Modular service-oriented design allows individual operation testing and flexible execution modes for debugging and development."
          }
        ],
       video: simulation
      },
      {
        subtitle: "Autonomous Workflow",
        content:
          "The complete toast-making process involves 14 autonomous steps executed seamlessly: gripper preparation, navigation to bread loaf tray, precise bread pickup, safe extraction, positioning over toaster slot, bread placement, gripper release, lever actuation for toasting initiation, monitoring completion, toast retrieval, and final plating. Each step uses real-time feedback from multiple sensor modalities to ensure robust operation.",
          image: workflowDemo
      },
      {
        subtitle: "Hardware Integration",
        content: [
          {
            label: "Franka Emika Panda",
            text: "7-DOF manipulator providing high precision and dexterity for complex manipulation tasks in constrained workspace."
          },
          {
            label: "3D Printed Fixtures",
            text: "Custom-designed holders for bread (4 slots, 120mm x 20mm each), toaster stand, lever platform (35mm x 20.4mm), and plate fixture with embedded AprilTag mounting."
          },
          {
            label: "Vision System",
            text: "Multi-camera setup with Intel RealSense providing comprehensive scene coverage and real-time object tracking capabilities."
          }
        ],
        image: hardwareSetup
      },
      {
        subtitle: "Technical Challenges & Solutions",
        content: [
          {
            label: "Precision Manipulation",
            text: "Handling fragile bread slices without damage required custom end-effector design and careful trajectory optimization with force feedback."
          },
          {
            label: "Dynamic Scene Tracking",
            text: "Multiple moving objects tracked simultaneously using AprilTag-based coordinate transforms updated at camera frame rate."
          },
          {
            label: "Collision Avoidance",
            text: "Real-time scene updates integrated with MoveIt2 planning pipeline to handle dynamic obstacles and workspace constraints."
          }
        ]
      },
      {
        subtitle: "Results and Impact",
        content:
          "Successfully demonstrated fully autonomous toast-making operation with single command execution. Achieved consistent bread handling without damage, reliable object detection across varying lighting conditions, and robust collision-free motion planning. The modular architecture provides foundation for expanded food preparation automation and demonstrates practical applications of advanced robotics in everyday tasks."
      }
    ],
    img: toastbotVideo  // main hero media
  }
};
