"use client";

import React from "react";

export default function JobSection({ jobListings }) {
  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobListings.map((job) => (
          <li key={job.id}>
            {job.title} - {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
}
