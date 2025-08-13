
import React from 'react';
import { ContactDetails, Skill, Project, Experience, Education, Certification } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProfessionalExperience from './components/Experience';
import EducationAndCerts from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const professionalData = {
  name: "Medavaram Devasena",
  title: "AWS Cloud Practitioner & Software Developer",
  tagline: "Building scalable cloud solutions and intuitive web applications.",
  headshotUrl: "https://media.licdn.com/dms/image/v2/D5635AQGo-KcNxBJlIw/profile-framedphoto-shrink_800_800/B56ZchVU49G0Ak-/0/1748610928479?e=1755705600&v=beta&t=JfCbYX5aAc0Za506OySzrEqq7PtFRG9P6OK1MYy24RE",
  about: "A motivated and growth-oriented software developer with a strong foundation in Python, Java, and AWS cloud services. Eager to apply my skills to solve real-world problems and contribute to a dynamic team. I am a quick learner with a passion for continuous improvement and a knack for tackling complex challenges.",
  contact: {
    email: "medavaramdevasena20@gmail.com",
    phone: "+91 9550190389",
    linkedin: "https://www.linkedin.com/in/medavaram-devasena-",
  } as ContactDetails,
  skills: [
    { name: "Python", category: "Programming" },
    { name: "Core Java", category: "Programming" },
    { name: "AWS (EC2, S3, VPC, IAM, CloudWatch, Cloud9)", category: "Cloud" },
    { name: "MySQL", category: "Databases" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "Flask", category: "Frameworks" },
  ] as Skill[],
  projects: [
    {
      title: "Cloud Infrastructure Deployment",
      role: "Cloud Engineer (Academic Project)",
      description: "Launched scalable web servers on EC2, managed static content storage with S3, and configured RDS for robust backend data management.",
      technologies: ["AWS EC2", "AWS S3", "AWS RDS"],
      outcome: "Successfully created a resilient and scalable cloud infrastructure capable of hosting a dynamic web application."
    },
    {
      title: "Hybrid Secure Deduplication System",
      role: "Backend Developer (Academic Project)",
      description: "Designed and implemented a hybrid approach for secure authorized deduplication. The system's main objective is to securely remove duplicate files in the cloud, allowing only authorized users to access or upload data.",
      technologies: ["Python", "Cloud Storage Concepts", "Security Principles"],
      outcome: "Developed a secure and efficient system that reduces storage costs by eliminating redundant data while maintaining strict access control."
    },
    {
      title: "Online Examination System",
      role: "Full-Stack Developer (Academic Project)",
      description: "Developed a complete online examination system from the ground up.",
      technologies: ["Python", "Flask", "HTML5", "CSS3", "MySQL"],
      outcome: "Delivered a functional platform for conducting online exams, featuring user authentication, test creation, and result management."
    }
  ] as Project[],
  experience: [
    {
      title: "Project-Based Experience",
      company: "Academic & Personal Projects",
      dates: "2022 - Present",
      responsibilities: [
        "Architected and deployed cloud infrastructure on AWS, utilizing services like EC2, S3, and RDS to support web applications.",
        "Developed a secure data deduplication system to optimize cloud storage and enforce access control.",
        "Built a full-stack online examination platform using Python (Flask) for the backend and HTML/CSS for the frontend.",
        "Gained hands-on experience with database management using MySQL for data persistence and retrieval."
      ]
    }
  ] as Experience[],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Nanakram Bhagawandas Science College & PG Centre",
      years: "2023 - 2025"
    },
    {
      degree: "B.Sc(Honors) | CGPA 7.0",
      institution: "Sri Durga Malleswara Siddhartha Mahila Kalasala",
      years: "2020 - 2023"
    }
  ] as Education[],
  certifications: [
    {
      name: "Python Full Stack Developer",
      issuer: "Codegnan IT Solutions Pvt Ltd."
    },
    {
      name: "Certificate in AWS Cloud Practitioner",
      issuer: "Tech Mahindra Foundation."
    }
  ] as Certification[],
  strengths: [
    "Quick learner with strong problem-solving skills",
    "Proficient in Python, Core Java, and MySQL",
    "Hands-on experience with AWS services like EC2 and S3",
    "Team player with excellent communication abilities"
  ]
};

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-gray-300 font-sans antialiased">
      <Header />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero data={professionalData} />
        <About about={professionalData.about} strengths={professionalData.strengths} />
        <Skills skills={professionalData.skills} />
        <Projects projects={professionalData.projects} />
        <ProfessionalExperience experiences={professionalData.experience} />
        <EducationAndCerts education={professionalData.education} certifications={professionalData.certifications} />
        <Contact contact={professionalData.contact} />
      </main>
      <Footer name={professionalData.name} />
    </div>
  );
};

export default App;
