"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export default function UserProfile() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/* Personal Info */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className="relative"
      >
        <div className="max-w-xs p-4">
          <h1 className="text-white text-2xl font-bold mb-2">Sahil</h1>
          <p className="text-neutral-200">Phone: (123) 456-7890</p>
          <p className="text-neutral-200">Email: sahil@example.com</p>
          <p className="text-neutral-200">
            LinkedIn:{" "}
            <a href="#" className="underline">
              linkedin.com/in/sahil
            </a>
          </p>
          <p className="text-neutral-200">
            GitHub:{" "}
            <a href="#" className="underline">
              github.com/sahil
            </a>
          </p>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800 p-5">
        <div className="flex justify-center items-center">
          <div className="relative w-32 h-32 mb-4 sm:mb-0">
            <Image
              src="/avatar.png"
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
              [Your University Name], [City, Country]
              <br />
              Bachelor of Science in Computer Science
              <br />
              Expected Graduation: [Month, Year]
              <br />
              Relevant Coursework: Data Structures, Algorithms, Machine Learning
            </p>
          </div>

          {/* Objective/Summary */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">
              Objective/Summary
            </h2>
            <p className="mt-4 text-neutral-200 leading-relaxed">
              Motivated third-year Computer Science student specializing in
              machine learning, Python development, and data science. Seeking an
              internship where I can apply my technical skills and contribute to
              impactful projects.
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
              <li>
                <strong>Programming Languages:</strong> Python, C++, Java
              </li>
              <li>
                <strong>Tools/Frameworks:</strong> TensorFlow, PyTorch, Git
              </li>
              <li>
                <strong>Databases:</strong> MySQL, MongoDB
              </li>
              <li>
                <strong>Other:</strong> Data Analysis, Web Development
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">Projects</h2>
            <p className="mt-4 text-neutral-200 leading-relaxed">
              <strong>Project Title:</strong> Developed a machine learning model
              for predicting housing prices using Python and Scikit-Learn.
              Improved prediction accuracy by 15%.
            </p>
          </div>
        </div>
      </WobbleCard>

      {/* Extracurricular Activities */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800 p-4">
        <h2 className="text-xl font-semibold text-white">
          Extracurricular Activities
        </h2>
        <p className="mt-4 text-neutral-200">
          Member of the university’s coding club. Participated in various
          hackathons and coding competitions.
        </p>
      </WobbleCard>

      {/* Certifications (Optional) */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800 p-4">
        <h2 className="text-xl font-semibold text-white">Certifications</h2>
        <p className="mt-4 text-neutral-200">
          [List any certifications you have]
        </p>
      </WobbleCard>

      {/* Languages (Optional) */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800 p-4">
        <h2 className="text-xl font-semibold text-white">Languages</h2>
        <p className="mt-4 text-neutral-200">
          [List any languages you speak, including proficiency levels.]
        </p>
      </WobbleCard>
    </div>
  );
}
