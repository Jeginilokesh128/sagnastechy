// JobsList.tsx
import React from "react";
import JobCard from "./Jobcard";


const jobs: Job[] = [
  {
    title: "Adaptive Autosar Developer",
    skills:
      "Hypervisor, Linux, Yocto, POSIX standards, C++, Ethernet, PCIe, someIP/DoIP protocol, Adaptive Autosar",
    experience: "4-12 Years",
    location: "Bangalore",
  },
  {
    title: "Embedded Software Engineer",
    skills: "C, C++, RTOS, UART, CAN, I2C, SPI",
    experience: "2-6 Years",
    location: "Pune",
  },
  {
    title: "Backend Developer",
    skills: "Node.js, Express, MongoDB, REST APIs",
    experience: "3-8 Years",
    location: "Hyderabad",
  },
  {
    title: "Frontend Developer",
    skills: "React, TypeScript, TailwindCSS, Redux",
    experience: "2-5 Years",
    location: "Chennai",
  },
  {
    title: "DevOps Engineer",
    skills: "AWS, Docker, Kubernetes, Jenkins",
    experience: "4-10 Years",
    location: "Bangalore",
  },
  {
    title: "AI/ML Engineer",
    skills: "Python, TensorFlow, PyTorch, NLP",
    experience: "3-7 Years",
    location: "Delhi",
  },
];

const JobsList: React.FC = () => {
  return (
    <div>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobsList;
