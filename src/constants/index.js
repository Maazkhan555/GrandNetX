const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Founders", href: "#founders" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const servicesList = [
  {
    id: "software",
    title: "Software & App Development",
    desc: "From idea to deployment — custom software, mobile apps, SaaS platforms, and enterprise systems built to scale.",
    color: "#4f8aff",
    tags: ["Custom Software", "Android & iOS Apps", "Flutter", "Web Apps", "SaaS", "CRM & ERP", "APIs", "Real-Time Apps", "E-commerce", "Booking Systems", "Marketplace Platforms", "Admin Dashboards"],
    tech: "Flutter · Dart · Node.js · Express.js · MongoDB · Firebase · Socket.IO · REST APIs",
  },
  {
    id: "ai",
    title: "Artificial Intelligence & ML",
    desc: "Premium AI solutions — chatbots, automation, computer vision, LLM integration, and intelligent business tools.",
    color: "#a855f7",
    tags: ["AI Chatbots", "AI Agents", "LLM Integration", "OpenAI / Gemini APIs", "Computer Vision", "Face Recognition", "Object Detection", "Speech-to-Text", "AI Recommendations", "Predictive Analytics", "AI Attendance Systems", "Generative AI"],
    tech: "Python · TensorFlow · OpenAI · Gemini · LangChain · OpenCV",
  },
  {
    id: "web",
    title: "Web Development",
    desc: "High-performance business websites, corporate portals, landing pages, and full-stack web applications.",
    color: "#00e5ff",
    tags: ["Business Websites", "Corporate Sites", "Landing Pages", "E-commerce", "SaaS Platforms", "Customer Portals", "Admin Panels", "Dashboard Development", "API Integration", "Performance Optimization", "Responsive Design"],
    tech: "React.js · Next.js · Tailwind CSS · Node.js · MongoDB · PostgreSQL",
  },
  {
    id: "design",
    title: "UI/UX & Product Design",
    desc: "Complete digital product design — from wireframes and user flows to pixel-perfect interfaces and design systems.",
    color: "#f472b6",
    tags: ["UI Design", "UX Design", "Mobile App UI", "Web UI", "Dashboard UI", "SaaS UI", "Wireframing", "Prototyping", "Design Systems", "User Flow Design", "Brand Interface Design"],
    tech: "Figma · Adobe XD · Framer · Principle",
  },
  {
    id: "video",
    title: "Video Production & Animation",
    desc: "Professional video editing, motion graphics, 2D/3D animation, and AI-powered video production.",
    color: "#fb923c",
    tags: ["Professional Video Editing", "YouTube Editing", "Reels & TikTok", "Motion Graphics", "2D & 3D Animation", "Explainer Videos", "Logo Animation", "Promotional Videos", "Corporate Videos", "AI Video Production", "Color Grading", "Subtitles & Captions"],
    tech: "DaVinci Resolve · After Effects · Blender · Premiere Pro",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies — SEO, paid ads, social media management, and lead generation.",
    color: "#34d399",
    tags: ["Social Media Marketing", "SEO & Local SEO", "Google Ads", "Meta Ads", "Content Marketing", "Email Marketing", "Lead Generation", "YouTube Marketing", "TikTok Marketing", "Brand Growth Strategy", "Conversion Optimization"],
    tech: "Google Analytics · Meta Ads Manager · SEMrush · Mailchimp",
  },
  {
    id: "branding",
    title: "Branding & Creative Services",
    desc: "Build a powerful brand identity — logos, guidelines, marketing materials, and creative design assets.",
    color: "#fbbf24",
    tags: ["Brand Strategy", "Logo Design", "Brand Identity", "Brand Guidelines", "Business Card Design", "Social Media Branding", "Presentation Design", "Thumbnail Design", "Poster Design", "Packaging Design", "Corporate Identity"],
    tech: "Illustrator · Photoshop · Figma · Canva Pro",
  },
  {
    id: "automation",
    title: "Automation & Business Solutions",
    desc: "Save time and cut costs — automate workflows, CRM, customer support, and internal business operations.",
    color: "#818cf8",
    tags: ["Business Process Automation", "AI Automation", "Workflow Automation", "WhatsApp Automation", "Email Automation", "CRM Automation", "Chatbot Automation", "Lead Management", "Customer Support AI", "API Automation", "Report Generation", "Internal Business Tools"],
    tech: "n8n · Zapier · Make · Node.js · OpenAI · Twilio",
  },
  {
    id: "cloud",
    title: "Cloud, Deployment & DevOps",
    desc: "Full deployment pipeline — cloud setup, server configuration, domain hosting, and ongoing maintenance.",
    color: "#38bdf8",
    tags: ["Website Deployment", "Cloud Deployment", "Backend Deployment", "Database Setup", "Server Configuration", "Domain & Hosting", "API Deployment", "App Maintenance", "Backup Solutions", "Performance Optimization", "Technical Support"],
    tech: "AWS · Firebase · Vercel · DigitalOcean · Docker · Nginx",
  },
  {
    id: "security",
    title: "Cybersecurity & IT Services",
    desc: "Protect your digital assets — secure APIs, authentication systems, data protection, and access control.",
    color: "#f87171",
    tags: ["Website Security", "Application Security", "Secure API Development", "Authentication Systems", "Access Control", "Data Protection", "Security Hardening", "Security Monitoring"],
    tech: "JWT · OAuth2 · SSL/TLS · Helmet.js · bcrypt",
  },
  {
    id: "data",
    title: "Data & Analytics",
    desc: "Turn raw data into business intelligence — dashboards, predictive analytics, and automated reporting.",
    color: "#4ade80",
    tags: ["Data Analysis", "Business Analytics", "Data Visualization", "Interactive Dashboards", "AI Data Analysis", "Sales Analytics", "Customer Analytics", "Business Intelligence", "Automated Reports", "Predictive Analytics"],
    tech: "Python · Pandas · Power BI · Chart.js · D3.js · MongoDB",
  },
  {
    id: "product",
    title: "End-to-End Digital Products",
    desc: "We transform your idea into a complete digital product — Design → Development → AI → Backend → Deployment → Marketing.",
    color: "#e879f9",
    tags: ["Idea Validation", "Product Design", "Full-Stack Development", "AI Integration", "Backend & APIs", "Cloud Deployment", "App Store Publishing", "Digital Marketing", "Growth Strategy"],
    tech: "Full GrandNetX Stack",
  },
];

const bentoSocialLinks = [
  {
    name: "Facebook",
    href: "",
    icon: "/images/fb.svg",
  },
  {
    name: "Instagram",
    href: "",
    icon: "/images/insta.svg",
  },
  {
    name: "LinkedIn",
    href: "",
    icon: "/images/linkedin.svg",
  },
  {
    name: "WhatsApp",
    href: "",
    icon: "/images/whatsapp.svg",
  },
];

const iconsList = [
  {
    name: "html",
    image: "/images/html.svg",
  },
  {
    name: "css",
    image: "/images/css.svg",
  },
  {
    name: "javascript",
    image: "/images/js.svg",
  },
  {
    name: "react",
    image: "/images/react.svg",
  },
  {
    name: "typescript",
    image: "/images/ts.svg",
  },
  {
    name: "github",
    image: "/images/github.svg",
  },
  {
    name: "gsap",
    image: "/images/gsap.svg",
  },
  {
    name: "threejs",
    image: "/images/threejs.svg",
  },
  {
    name: "figma",
    image: "/images/figma.svg",
  },
  {
    name: "aws",
    image: "/images/aws.svg",
  },
];

const slides = [
  {
    id: 1,
    title: "Project One",
    type: "video",
    src: "/videos/p1.webm",
  },
  {
    id: 2,
    title: "Project Two",
    type: "video",
    src: "/videos/p2.webm",
  },
  {
    id: 3,
    title: "Project Three",
    type: "video",
    src: "/videos/p3.webm",
  },
  {
    id: 4,
    title: "Project Four",
    type: "video",
    src: "/videos/p4.webm",
  },
  {
    id: 5,
    title: "Project Five",
    type: "video",
    src: "/videos/p5.mp4",
  },
  {
    id: 6,
    title: "Project Six",
    type: "video",
    src: "/videos/p6.webm",
  },
  {
    id: 7,
    title: "Project Seven",
    type: "video",
    src: "/videos/p7.webm",
  },
  {
    id: 8,
    title: "Project Eight",
    type: "image",
    src: "/videos/p8.jpg",
  },
];

const statsList = [
  { number: "50+", label: "Projects Delivered" },
  { number: "9+", label: "IT Services Offered" },
  { number: "3", label: "Expert Founders" },
  { number: "100%", label: "Client Satisfaction" },
];

const footerIconsList = [
  {
    name: "Facebook",
    href: "",
    icon: "/images/b-fb.svg",
  },
  {
    name: "Instagram",
    href: "",
    icon: "/images/b-insta.svg",
  },
  {
    name: "LinkedIn",
    href: "",
    icon: "/images/b-linked.svg",
  },
  {
    name: "WhatsApp",
    href: "",
    icon: "/images/b-whatsapp.svg",
  },
];

export { bentoSocialLinks, footerIconsList, iconsList, navItems, servicesList, statsList, slides };
