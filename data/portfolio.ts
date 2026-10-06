export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  architectureNotes?: string;
  technologies: string[];
  features: string[];
  stats?: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  status: "Completed" | "Active" | "Prototype";
  featured: boolean;
  imageAlt: string;
  highlights: string[];
  previewType: "tour" | "healthcare";
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  link?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  scoreLabel: string;
  score: string;
  location: string;
  details?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  category: "Cloud" | "AI & ML" | "DevOps" | "Specialized";
  issuerBadge?: string;
  verifyUrl?: string;
  keyTopics: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    level?: string;
    description: string;
    iconName: string;
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Mayuri Patidar",
    shortName: "Mayuri",
    logoText: "MAYURI.",
    tagline: "Building intelligent products with code, design, and AI.",
    roles: ["AI Enthusiast", "Software Developer", "UI/UX Designer"],
    bio: "Computer Science Engineering graduate from Medi-Caps University with hands-on experience in UI/UX design, full-stack development, AI-powered applications, and modern web technologies.",
    detailedAbout: `I am a Computer Science Engineering graduate from Medi-Caps University, Indore (CGPA: 8.26). My work thrives at the convergence of AI systems, software development, and intuitive UI/UX design.

During my UI/UX internship at Horizon17 Technology and Sustainability in Gurugram, I crafted user-centric interfaces and wireframes in Figma, streamlined design-to-code collaboration with engineering teams, and championed accessibility and usability benchmarks.

I believe modern digital products must be both computationally capable and delight to use. Whether architecting role-based full-stack applications or integrating LLMs into containerized workflows, I focus on clean code, solid engineering, and human-centered design.`,
    email: "mayuripatidar22@gmail.com",
    phone: "+91-7247381226",
    location: "Indore, India",
    availability: "Available for Full-time Roles & High-Impact Projects",
    statusBadge: "Open to Software Engineering & AI Opportunities",
    socialLinks: {
      github: "https://github.com/Mayurii59",
      linkedin: "https://linkedin.com/in/mayuri-patidar",
      email: "mailto:mayuripatidar22@gmail.com",
      phone: "tel:+917247381226",
    },
    resumeUrl: "/resume/Mayuri_Patidar_Resume.pdf",
    quickStats: [
      { label: "Education", value: "B.Tech CSE", subtext: "Medi-Caps University" },
      { label: "Academic CGPA", value: "8.26", subtext: "Out of 10.0" },
      { label: "Internship", value: "UI/UX Intern", subtext: "Horizon17 Tech" },
      { label: "Location", value: "Indore, India", subtext: "Open to Relocate / Remote" },
    ],
  },

  skills: {
    categories: [
      {
        id: "languages",
        name: "Languages",
        skills: [
          {
            name: "C++",
            level: "Proficient",
            description: "Object-oriented programming, data structures, algorithms, and computational problem solving.",
            iconName: "Code2",
          },
          {
            name: "Python",
            level: "Proficient",
            description: "Backend scripting, AI/ML pipelines, FastAPI services, and data transformation.",
            iconName: "FileCode",
          },
          {
            name: "R",
            level: "Academic",
            description: "Statistical analysis, structured data modeling, and mathematical computations.",
            iconName: "Binary",
          },
        ],
      },
      {
        id: "frontend",
        name: "Frontend",
        skills: [
          {
            name: "ReactJS",
            level: "Advanced",
            description: "Component architecture, hooks, state management, and modern responsive user interfaces.",
            iconName: "Layers",
          },
          {
            name: "JavaScript",
            level: "Proficient",
            description: "ES6+, asynchronous programming, DOM manipulation, and modern web standards.",
            iconName: "FileText",
          },
          {
            name: "HTML5",
            level: "Proficient",
            description: "Semantic web structure, accessibility (a11y) standards, and SEO best practices.",
            iconName: "Code",
          },
          {
            name: "CSS3",
            level: "Proficient",
            description: "Modern layouts, Flexbox/Grid, CSS animations, responsive queries, and design systems.",
            iconName: "Palette",
          },
        ],
      },
      {
        id: "databases",
        name: "Databases",
        skills: [
          {
            name: "MySQL",
            level: "Proficient",
            description: "Relational database schema design, indexing, normalized queries, and data integrity.",
            iconName: "Database",
          },
          {
            name: "NoSQL (MongoDB)",
            level: "Proficient",
            description: "Document storage, collections, schema-less modeling, and aggregation pipelines.",
            iconName: "HardDrive",
          },
        ],
      },
      {
        id: "tools",
        name: "Tools & Design",
        skills: [
          {
            name: "Figma",
            level: "Specialist",
            description: "Wireframing, UI/UX prototyping, design system components, and dev handoff workflows.",
            iconName: "Figma",
          },
          {
            name: "Git",
            level: "Proficient",
            description: "Version control, branching strategies, rebase, and collaborative repository workflows.",
            iconName: "GitBranch",
          },
          {
            name: "GitHub",
            level: "Proficient",
            description: "Repository management, code reviews, PR workflows, and open-source collaboration.",
            iconName: "Github",
          },
          {
            name: "Microsoft Excel",
            level: "Proficient",
            description: "Data organization, pivot tables, spreadsheet analysis, and structured reporting.",
            iconName: "Table",
          },
        ],
      },
    ] as SkillCategory[],

    areasOfInterest: [
      {
        name: "AI & Machine Learning",
        tag: "Artificial Intelligence",
        description: "Core algorithms, neural networks, predictive models, and prompt engineering.",
        color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400",
      },
      {
        name: "Generative AI",
        tag: "GenAI & LLMs",
        description: "Large language model integration, structured prompting, and generative workflows.",
        color: "from-teal-500/20 to-emerald-500/20 border-teal-500/30 text-teal-400",
      },
      {
        name: "Agentic AI",
        tag: "Autonomous Systems",
        description: "Task decomposition, tool calling, multi-step agent reasoning, and autonomous execution.",
        color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400",
      },
      {
        name: "DevOps & Cloud",
        tag: "Containerization & CI/CD",
        description: "Docker packaging, containerized microservices, cloud foundation, and continuous integration.",
        color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
      },
    ],
  },

  experience: [
    {
      company: "Horizon17 Technology and Sustainability",
      role: "UI/UX Intern",
      location: "Gurugram, Haryana",
      period: "Jul 2025 – Oct 2025",
      type: "Internship",
      description:
        "Contributed to enterprise web platforms by designing wireframes and interactive prototypes, bridging UI design with developer implementation, and elevating accessibility benchmarks.",
      responsibilities: [
        "Designed user-friendly interfaces, responsive layouts, and interactive wireframes in Figma for production web applications.",
        "Collaborated closely with frontend developers to ensure pixel-perfect design-to-code handoff and consistent component styling.",
        "Contributed to enhancing digital platform accessibility (WCAG principles) and overall usability across varying user personas.",
        "Refined visual hierarchies, design tokens, typography scales, and interactive states for enterprise workflows.",
      ],
      skills: ["Figma", "UI/UX Design", "Wireframing", "Design-to-Code Handoff", "Accessibility", "Design Systems"],
      link: "https://horizon17ww.com",
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "citytour-web-app",
      title: "CityTour Web App",
      category: "Full-Stack Web Platform",
      tagline: "Role-based urban tourism platform with granular multi-user portals.",
      description:
        "Full-stack tourism platform designed for dynamic cities like Mumbai and Indore, featuring tailored role-based dashboards and highly responsive user experiences.",
      architectureNotes:
        "Engineered with the MERN stack featuring JWT-authenticated routes, role-gated state, modular RESTful endpoints, and scalable MongoDB schemas for city attractions, reviews, and bookings.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "JWT Auth", "Tailwind CSS"],
      features: [
        "Four dedicated role-based dashboards: Admin, Tourist, Business, and Student portals",
        "Granular user authentication with protected routes and role-based access control (RBAC)",
        "RESTful API endpoints for city listings, destination discovery, and data filtering",
        "Curated interactive guides and attraction directories for cities such as Mumbai & Indore",
        "Tourist booking and activity logs paired with business vendor management views",
        "Mobile-first responsive React frontend designed with clean navigation and interactive cards",
      ],
      stats: [
        { label: "User Portals", value: "4 Roles" },
        { label: "Target Cities", value: "Mumbai & Indore" },
        { label: "Stack", value: "MERN" },
        { label: "Security", value: "Protected Routes" },
      ],
      githubUrl: "https://github.com/Mayurii59",
      liveUrl: "#",
      status: "Completed",
      featured: true,
      imageAlt: "CityTour Web App interactive preview showing multi-role dashboards",
      highlights: [
        "Role-Based Dashboards (Admin / Tourist / Business / Student)",
        "Secure Token-Based Authentication",
        "Dynamic City Listing & User Management APIs",
      ],
      previewType: "tour",
    },
    {
      id: "healthcare-planning-assistant",
      title: "Dockerised Healthcare Planning Assistant",
      category: "AI & Full-Stack System",
      tagline: "Containerized AI assistant delivering structured health planning guidance.",
      description:
        "AI-powered healthcare planning application that provides structured, LLM-generated healthcare planning advice and wellness schedules packaged inside Docker containers.",
      architectureNotes:
        "Built with a high-performance Python FastAPI backend orchestrating LLM calls, paired with a rapid Streamlit frontend, fully containerized via Docker for seamless multi-environment deployment.",
      technologies: ["Python", "FastAPI", "Streamlit", "Docker", "LLM", "Prompt Engineering"],
      features: [
        "High-performance FastAPI asynchronous backend serving structured planning endpoints",
        "Interactive Streamlit user interface for real-time prompt inputs and structured summaries",
        "LLM-generated lifestyle and health planning recommendations formatted into clear stages",
        "Docker containerization ensuring environment parity and zero-friction deployment",
        "Input sanitization, prompt grounding, and structured response parsing",
        "Transparent health disclaimer ensuring recommendations serve purely informative planning purposes",
      ],
      stats: [
        { label: "Backend API", value: "FastAPI" },
        { label: "Interface", value: "Streamlit" },
        { label: "Deployment", value: "Dockerized" },
        { label: "Engine", value: "LLM Orchestration" },
      ],
      githubUrl: "https://github.com/Mayurii59",
      liveUrl: "#",
      status: "Completed",
      featured: true,
      imageAlt: "Dockerised Healthcare Planning Assistant interactive UI preview",
      highlights: [
        "FastAPI Asynchronous Architecture",
        "Streamlit Interactive Health Dashboard",
        "Production Docker Container Packaging",
        "Structured LLM Planning Advice (Informational only)",
      ],
      previewType: "healthcare",
    },
  ] as Project[],

  certifications: [
    {
      id: "aws-cloud",
      title: "AWS Cloud Foundation",
      category: "Cloud",
      keyTopics: ["Cloud Architecture", "AWS Core Services", "Security & IAM", "Storage & Compute", "Cloud Economics"],
    },
    {
      id: "generative-ai",
      title: "Generative AI",
      category: "AI & ML",
      keyTopics: ["Large Language Models", "Prompt Engineering", "Transformer Architectures", "Text & Image Generation"],
    },
    {
      id: "agentic-ai",
      title: "Agentic AI",
      category: "AI & ML",
      keyTopics: ["Autonomous Agents", "Tool Calling & Functions", "Planning & Reasoning Loops", "Agentic Workflows"],
    },
    {
      id: "devops-foundation",
      title: "DevOps Foundation",
      category: "DevOps",
      keyTopics: ["CI/CD Pipelines", "Containerization & Docker", "Continuous Monitoring", "Agile Collaboration"],
    },
  ] as CertificationItem[],

  education: [
    {
      institution: "Medi-Caps University",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      period: "Aug 2022 – Jun 2026",
      scoreLabel: "CGPA",
      score: "8.26 / 10.0",
      location: "Indore, Madhya Pradesh",
      details: [
        "Core coursework: Data Structures & Algorithms, Object-Oriented Programming (C++), Operating Systems, DBMS, Computer Networks, Software Engineering.",
        "Active technical project development focusing on modern web stacks, AI applications, and human-centered design.",
      ],
    },
    {
      institution: "Digambar Jain Higher Secondary School",
      degree: "Higher Secondary Education (12th Grade)",
      field: "Science & Mathematics",
      period: "2021 – 2022",
      scoreLabel: "Percentage",
      score: "77.8%",
      location: "Mandsaur, Madhya Pradesh",
      details: [
        "Focused on Mathematics, Physics, and Chemistry foundation with rigorous problem-solving fundamentals.",
      ],
    },
  ] as EducationItem[],

  achievements: [
    {
      title: "Completed UI/UX Design Internship",
      organization: "Horizon17 Technology and Sustainability",
      description:
        "Successfully completed rigorous UI/UX internship contributing to live web platform design, wireframe creation in Figma, and design-to-code implementation handoffs.",
      icon: "Award",
      tag: "Professional Experience",
    },
    {
      title: "Figma Design & Prototyping Proficiency",
      organization: "Design Systems & User Experience",
      description:
        "Mastered interactive prototyping, wireframing, component-based design systems, and usability guidelines for complex modern web applications.",
      icon: "Figma",
      tag: "Design Milestone",
    },
  ],

  navigation: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],
};
