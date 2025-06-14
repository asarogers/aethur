import tamirVideo from "../pages/project/imgs/TAMIR/tamirVideo.mp4";
import phoneView from "../pages/project/imgs/TAMIR/phoneView.mp4";
import teleop from "../pages/project/imgs/TAMIR/teleop.mp4";
import firstMap from "../pages/project/imgs/TAMIR/firstMap.webm";
import kukaVideo from "../pages/project/imgs/kuka_youbot/best.mp4"
import kukaPhoto from "../pages/project/imgs/kuka_youbot/kuka_youbot.jpg"
export const projectData = {
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
  }
};
