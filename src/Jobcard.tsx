// JobCard.tsx
import React from "react";
import { Job } from "./Job";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="border rounded-lg shadow p-4 mb-4">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p className="text-sm text-gray-600">{job.skills}</p>
      <p className="text-sm font-medium">Experience: {job.experience}</p>
      <p className="text-sm">Location: {job.location}</p>
    </div>
  );
};

export default JobCard;
