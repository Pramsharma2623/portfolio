import sihWinnerImg from "./assets/WhatsApp Image 2026-03-14 at 1.25.43 AM.jpeg";
import govtIntegrationImg from "./assets/WhatsApp Image 2026-03-14 at 1.26.23 AM.jpeg";
import timetableProjectImg from "./assets/WhatsApp Image 2026-03-14 at 1.47.34 AM.jpeg";
import ideathonWinnerImg from "./assets/WhatsApp Image 2026-03-14 at 1.26.49 AM.jpeg";
import ideathon8Img from "./assets/WhatsApp Image 2026-03-14 at 1.27.35 AM.jpeg";
import timetableGeneratorImg from "./assets/WhatsApp Image 2026-03-14 at 1.47.33 AM.jpeg";
import fashionovaImg from "./assets/Screenshot (3).png";
import whatsappAnalyzerImg from "./assets/imgonline_com_ua_resize_rcSpv7weHduTCr.webp";

export const resumeData = {
  basics: {
    name: "Pramod Kumar",
    title: "Computer Engineering Student & Full-Stack Developer",
    summary: "B.Tech Computer Engineering student graduating in 2026 with expertise in Python, C++, React, Node.js, and Machine Learning. Proven track record of solving complex problems, including winning the Smart India Hackathon (SIH) 2025 and developing an Optimal Timetable Generator.",
    location: "Faridabad, India",
    email: "sharmapramod0321@gmail.com",
    phone: "+91 7678553327",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/pramod-kumar-b1063a250/" },
      { name: "GitHub", url: "https://github.com/Pramsharma2623" }
    ]
  },
  experience: [
    {
      company: "Smart India Hackathon (SIH) 2025",
      role: "National Hackathon — Winning Team",
      dates: "December 2025",
      location: "India",
      bullets: [
        "Delivered a complete solution in an intense 36-hour continuous development environment under strict deadlines.",
        "Quickly analyzed problem requirements and implemented a constraint-aware optimization system.",
        "Collaborated with team members to divide tasks, debug issues, and integrate modules efficiently.",
        "Recognized as the Best Performing Team and secured 1st position at the national level."
      ]
    },
    {
      company: "Internship Experience",
      role: "Frontend Developer Intern",
      dates: "1 Months",
      location: "",
      bullets: [
        "Developed responsive and reusable UI components using HTML, CSS, and JavaScript.",
        "Integrated frontend interfaces with backend APIs to enhance performance and usability."
      ]
    }
  ],
  achievements: [
    {
      title: "Smart India Hackathon (SIH) 2025 Winner",
      context: "Secured 1st Position at India's largest national hackathon; awarded 1.5 Lakh cash prize.",
      image: sihWinnerImg
    },
    {
      title: "Government Integration Initiative",
      "context": "SIH winning solution currently under integration with the Department of Higher and Technical Education, Government of Jharkhand.",
      image: govtIntegrationImg
    },
    {
      title: "Institutional Timetable Optimization Project (2025)",
      context: "Solution impressed university leadership, leading to direct assignment by the Vice Chancellor and official pilot procurement worth 5 Lakh.",
      image: timetableProjectImg
    },
    {
      title: "Ideathon 2025 Winner",
      context: "Secured 1st Position among 70+ teams from 15+ colleges for innovative real-world problem solving.",
      image: ideathonWinnerImg
    },
    {
      title: "Ideathon 8.0 (2025)",
      context: "Secured 2nd Position; awarded 8,000 cash prize for innovation and prototyping.",
      image: ideathon8Img
    }
  ],
  projects: [
    {
      title: "Optimal Timetable Generator",
      stack: ["Python", "Django", "Metaheuristic Algorithm"],
      image: timetableGeneratorImg,
      bullets: [
        "Developed a web-based system to automate clash-free academic timetable generation for higher education institutions.",
        "Applied a Metaheuristic Optimization Algorithm to efficiently handle faculty availability, room capacity, and workload constraints.",
        "Supported multi-department and multi-shift scheduling with a scalable and modular system architecture.",
        "Reduced timetable generation time from weeks to hours while producing near-optimal solutions.",
        "Solved a real-world NP-Hard optimization problem evaluated by academic and industry experts."
      ],
      links: []
    },
    {
      title: "Fashionova",
      stack: ["React", "Node.js", "Express.js", "MongoDB"],
      image: fashionovaImg,
      bullets: [
        "Developed a full-stack e-commerce fashion platform covering complete user flow including browsing, cart, checkout, and order placement.",
        "Implemented a dynamic shopping cart with real-time quantity-based price calculation and state management.",
        "Integrated secure authentication and authorization enabling user-specific carts, order history, and protected routes.",
        "Designed scalable RESTful backend APIs with modular architecture for product, cart, and order management.",
        "Built role-based admin functionality to manage inventory, pricing, products, and order status."
      ],
      links: []
    },
    {
      title: "WhatsApp Chat Analyzer",
      stack: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      image: whatsappAnalyzerImg,
      bullets: [
        "Developed a Python-based system to analyze WhatsApp group chat data and extract meaningful insights.",
        "Parsed raw WhatsApp chat (.txt) files using Regex and converted them into structured data using Pandas.",
        "Analyzed user-wise and weekly chat activity to identify participation trends and active members.",
        "Performed basic text and keyword analysis using Scikit-learn to understand discussion topics.",
        "Visualized chat statistics using Matplotlib through bar charts, line graphs, and activity plots."
      ],
      links: []
    }
  ],
  skills: [
    {
      group: "Languages",
      items: ["Python", "C++", "Html", "Css", "JavaScript(Es6+)"]
    },
    {
      group: "Frameworks and Library",
      items: ["NodeJS", "React", "Scikit-learn", "Django", "Pandas", "machine learnig", "eep learning"]
    },
    {
      group: "Tools",
      items: ["Git", "version control", "MongoDB", "PostgreSQL", "MySQL", "Docker", "AWS"]
    },
    {
      group: "Platforms",
      items: ["Web", "Windows", "leetcode"]
    }
  ],
  education: [
    {
      degree: "B.Tech. in Computer Engineering",
      institution: "J.C. Bose University of Science and Technology (formerly Y.M.C.A), Faridabad",
      dates: "Graduating: 2026",
      gpa: "CGPA: 7"
    }
  ],
  certifications: []
};
