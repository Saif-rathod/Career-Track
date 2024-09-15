"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export default function UserProfile({ studentProfiles }) {
  const profile = studentProfiles[0]; // Assuming you want to display the first profile

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/* Personal Info */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className="relative"
      >
        <div className="max-w-xs p-4">
          <h1 className="text-white text-2xl font-bold mb-2">{profile.user.username}</h1>
          <p className="text-neutral-200">Phone: {profile.phone}</p>
          <p className="text-neutral-200">Email: {profile.email}</p>
          <p className="text-neutral-200">
            LinkedIn:{" "}
            <a href={profile.linkedin} className="underline">
              {profile.linkedin}
            </a>
          </p>
          <p className="text-neutral-200">
            GitHub:{" "}
            <a href={profile.github} className="underline">
              {profile.github}
            </a>
          </p>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800 p-5">
        <div className="flex justify-center items-center">
          <div className="relative w-32 h-32 mb-4 sm:mb-0">
            <Image
              src={profile.avatar || "/avatar.png"}
              alt="Student"
              layout="fill"
              objectFit="cover"
              className="rounded-full border border-gray-300"
            />
          </div>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[400px] p-8">
        {/* Flex container for Education and Objective/Summary */}
        <div className="flex flex-col lg:flex-row w-full space-y-8 lg:space-y-0 lg:space-x-10">
          {/* Education */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">Education</h2>
            <p className="mt-4 text-neutral-200 leading-relaxed">
              {profile.education.university}, {profile.education.city}, {profile.education.country}
              <br />
              {profile.education.degree}
              <br />
              Expected Graduation: {profile.education.graduation}
              <br />
              Relevant Coursework: {profile.education.coursework.join(", ")}
            </p>
          </div>

          {/* Objective/Summary */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">
              Objective/Summary
            </h2>
            <p className="mt-4 text-neutral-200 leading-relaxed">
              {profile.objective}
            </p>
          </div>
        </div>

        {/* Flex container for Technical Skills and Projects */}
        <div className="flex flex-col lg:flex-row w-full mt-8 space-y-8 lg:space-y-0 lg:space-x-10">
          {/* Technical Skills */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">
              Technical Skills
            </h2>
            <ul className="mt-4 text-neutral-200 leading-relaxed space-y-2">
              {profile.skills.map((skill, index) => (
                <li key={index}>
                  <strong>{skill.category}:</strong> {skill.items.join(", ")}
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">Projects</h2>
            {profile.projects.map((project, index) => (
              <p key={index} className="mt-4 text-neutral-200 leading-relaxed">
                <strong>{project.title}:</strong> {project.description}
              </p>
            ))}
          </div>
        </div>
      </WobbleCard>

      {/* Extracurricular Activities */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800 p-4">
        <h2 className="text-xl font-semibold text-white">
          Extracurricular Activities
        </h2>
        <p className="mt-4 text-neutral-200">
          {profile.extracurricular}
        </p>
      </WobbleCard>

      {/* Certifications (Optional) */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800 p-4">
        <h2 className="text-xl font-semibold text-white">Certifications</h2>
        <p className="mt-4 text-neutral-200">
          {profile.certifications}
        </p>
      </WobbleCard>

      {/* Languages (Optional) */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800 p-4">
        <h2 className="text-xl font-semibold text-white">Languages</h2>
        <p className="mt-4 text-neutral-200">
          {profile.languages}
        </p>
      </WobbleCard>
    </div>
  );
}