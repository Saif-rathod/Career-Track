"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hooks/use-outside-click";

export default function JobSection({ jobListings, filter }) {
  const [active, setActive] = useState(null);
  const [aiRecommendations, setAIRecommendations] = useState([]);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    async function fetchRecommendations() {
      const recommendations = await fetchAIRecommendations();
      setAIRecommendations(recommendations);
    }

    fetchRecommendations();
  }, []);

  const getFilteredJobs = (filter) => {
    switch (filter) {
      case "hot":
        return jobListings.filter((job) => job.isHot);
      case "recent":
        return jobListings.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "date":
        return jobListings.sort((a, b) => new Date(a.date) - new Date(b.date));
      case "ai":
        return aiRecommendations;
      default:
        return jobListings;
    }
  };

  const filteredJobs = getFilteredJobs(filter);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useOutsideClick(ref, () => setActive(false));

  return (
    <div ref={ref}>
      <h1>Job Listings</h1>
      <ul>
        {filteredJobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const fetchAIRecommendations = async () => {
  const response = await fetch("/api/ai-recommendations");
  const data = await response.json();
  return data;
};