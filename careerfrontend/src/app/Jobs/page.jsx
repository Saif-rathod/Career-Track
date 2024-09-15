"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import JobFilter from "@/components/JobFIlter"; // Correct import path
import JobSection from "@/components/JobSection"; // Correct import path

export default function Jobs() {
  const [filter, setFilter] = useState("recent");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div>
        <JobFilter onFilterChange={handleFilterChange} />
        <JobSection filter={filter} />
      </div>
      <Footer />
    </main>
  );
}
