"use client";
import React, { useState } from "react";
import { Vortex } from "./ui/vortex";

export default function JobFilter({ onFilterChange }) {
  const [filter, setFilter] = useState("recent");

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    onFilterChange(newFilter); // Pass the new filter value to the parent component
  };

  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
            Hey Sahil!
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Welcome to the job board! Here you can find various opportunities
            tailored to your skills and interests. Use the filters below to find
            the best job matches based on your preferences.
          </p>
          <div className="mt-4">
            <label
              htmlFor="filter"
              className="block text-lg font-medium text-neutral-800 dark:text-neutral-200"
            >
              Filter by :
            </label>
            <select
              id="filter"
              value={filter}
              onChange={handleFilterChange}
              className="mt-2 px-4 py-2 border border-neutral-300 rounded-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            >
              <option value="recent">Recent</option>
              <option value="hot">Hot</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>
      </Vortex>
    </div>
  );
}
