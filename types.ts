
export interface ContactDetails {
  email: string;
  phone: string;
  linkedin: string;
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Cloud' | 'Databases' | 'Frontend' | 'Frameworks';
}

export interface Project {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  outcome: string;
}

export interface Experience {
  title: string;
  company: string;
  dates: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  years: string;
}

export interface Certification {
  name: string;
  issuer: string;
}
