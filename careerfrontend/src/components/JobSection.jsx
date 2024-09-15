"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hooks/use-outside-click";

export default function JobSection({ filter }) {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  // Dummy filter implementation
  const getFilteredJobs = (filter) => {
    switch (filter) {
      case "hot":
        return jobs.filter((job) => job.isHot); // Example filter logic
      case "recent":
        return jobs.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "date":
        return jobs.sort((a, b) => new Date(a.date) - new Date(b.date));
      default:
        return jobs;
    }
  };

  const filteredJobs = getFilteredJobs(filter);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <div className="flex justify-between items-start p-4">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-neutral-700 dark:text-neutral-200"
                  >
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400"
                  >
                    {active.companyDescription}
                  </motion.p>
                </div>
                <motion.a
                  layoutId={`button-${active.title}-${id}`}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                >
                  {"Apply"}
                </motion.a>
              </div>

              {/* Scrollable content after location */}
              <div className="px-4 max-h-[70vh] overflow-y-auto">
                <motion.h4 className="font-bold text-lg mt-4">
                  Responsibilities
                </motion.h4>
                <ul className="list-disc pl-5">
                  {active.responsibilities.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>

                <motion.h4 className="font-bold text-lg mt-4">
                  Qualifications
                </motion.h4>
                <ul className="list-disc pl-5">
                  {active.requiredQualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>

                <motion.h4 className="font-bold text-lg mt-4">
                  Preferred
                </motion.h4>
                <ul className="list-disc pl-5">
                  {active.preferredQualifications.map(
                    (qualification, index) => (
                      <li key={index}>{qualification}</li>
                    )
                  )}
                </ul>

                <motion.h4 className="font-bold text-lg mt-4">
                  Location
                </motion.h4>
                <p>{active.location}</p>

                <motion.h4 className="font-bold text-lg mt-4">
                  Compensation & Benefits
                </motion.h4>
                <ul className="list-disc pl-5">
                  {active.compensationBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>

                <motion.h4 className="font-bold text-lg mt-4">
                  Career Growth Opportunities
                </motion.h4>
                <p>{active.careerGrowth}</p>

                <motion.h4 className="font-bold text-lg mt-4">
                  Perks & Culture
                </motion.h4>
                <p>{active.perksAndCulture}</p>

                <motion.h4 className="font-bold text-lg mt-4">
                  Application Process
                </motion.h4>
                <p>{active.applicationProcess}</p>

                <motion.h4 className="font-bold text-lg mt-4">
                  Contact
                </motion.h4>
                <p>{active.contact}</p>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-2xl mx-auto w-full gap-4">
        {filteredJobs.map((job, index) => (
          <motion.div
            layoutId={`card-${job.title}-${id}`}
            key={`card-${job.title}-${id}`}
            onClick={() => setActive(job)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="relative w-16 h-16">
                <Image
                  src="/jobs.jpg"
                  alt="Job Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="">
                <motion.h3
                  layoutId={`title-${job.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {job.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${job.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {job.companyDescription}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const jobs = [
  // Add `isHot` and `date` properties for filtering
  {
    title: "Machine Learning Engineer",
    companyDescription:
      "At XYZ Innovations, we’re leading the future of AI solutions...",
    description: "We are seeking a Machine Learning Engineer...",
    responsibilities: [
      "Develop and implement machine learning algorithms.",
      "Collaborate on AI products.",
      "Optimize models.",
    ],
    requiredQualifications: [
      "Bachelor’s degree in Computer Science.",
      "3+ years of experience.",
      "Proficiency in Python.",
    ],
    preferredQualifications: [
      "Experience with cloud platforms.",
      "Familiarity with NLP or computer vision.",
    ],
    location: "Remote",
    compensationBenefits: [
      "Competitive salary.",
      "Health, dental, and vision insurance.",
    ],
    careerGrowth:
      "Opportunity to lead AI projects and research cutting-edge technologies.",
    perksAndCulture:
      "Flexible working hours, remote-friendly environment, and a diverse, innovative team culture.",
    applicationProcess:
      "Send resume and cover letter to careers@xyzinnovations.com.",
    contact: "hiring@xyzinnovations.com",
    ctaLink: "#",
    isHot: false, // Example property
    date: "2024-09-01", // Example date
  },
    {
      title: "Data Scientist",
      companyDescription:
        "At ABC Analytics, we’re leading the future of data-driven solutions...",
      description: "We are seeking a Data Scientist...",
      responsibilities: [
        "Develop and implement data models.",
        "Collaborate on data products.",
        "Analyze data trends.",
      ],
      requiredQualifications: [
        "Bachelor’s degree in Statistics.",
        "2+ years of experience.",
        "Proficiency in R.",
      ],
      preferredQualifications: [
        "Experience with data visualization tools.",
        "Familiarity with machine learning algorithms.",
      ],
      location: "New York",
      compensationBenefits: [
        "Competitive salary.",
        "Health, dental, and vision insurance.",
      ],
      careerGrowth:
        "Opportunity to lead data projects and research cutting-edge technologies.",
      perksAndCulture:
        "Flexible working hours, collaborative environment, and a diverse, innovative team culture.",
      applicationProcess:
        "Send resume and cover letter to careers@abcanalytics.com.",
      contact: "hiring@abcanalytics.com",
      ctaLink: "#",
      isHot: false,
      date: "2024-09-05",
    },
    {
      title: "AI Researcher",
      companyDescription:
        "At DEF AI Labs, we’re leading the future of AI research...",
      description: "We are seeking an AI Researcher...",
      responsibilities: [
        "Conduct research on AI algorithms.",
        "Collaborate on AI projects.",
        "Publish research papers.",
      ],
      requiredQualifications: [
        "Ph.D. in Computer Science.",
        "5+ years of experience.",
        "Proficiency in Python and TensorFlow.",
      ],
      preferredQualifications: [
        "Experience with deep learning frameworks.",
        "Familiarity with natural language processing.",
      ],
      location: "Remote",
      compensationBenefits: [
        "Competitive salary.",
        "Health, dental, and vision insurance.",
      ],
      careerGrowth:
        "Opportunity to lead AI research projects and publish papers.",
      perksAndCulture:
        "Flexible working hours, remote-friendly environment, and a diverse, innovative team culture.",
      applicationProcess:
        "Send resume and cover letter to careers@defailabs.com.",
      contact: "hiring@defailabs.com",
      ctaLink: "#",
      isHot: true,
      date: "2024-07-01",
    },
  
  // Add more jobs with different fields and values
];
