import React, { useState } from "react";
import SectionHeading from "../../../UI/SectionHeading";
import AllProjects from "./AllProjects";
import ProjectDetails from "./ProjectDetails";
import { CgClose } from "react-icons/cg";

const projects = [
  {
    title: "Human Blood Foundation",
    subtitle: "A MERN stack full-featured blood donation platform.",
    image: "/Websites/human-blood-foundation.png",
    live: "https://human-blood-foundation.web.app/",
    client: "https://github.com/Likhonpaul2/human-blood-foundation",
    description: [
      "A MERN stack full-featured blood donation platform connecting donors, volunteers, and admins to streamline donation requests, user management, and content publishing."
    ],
    features: [
      "Responsive UI for mobile, tablet, and desktop.",
      "User authentication with Firebase + JWT.",
      "Donor registration with profile, avatar upload, blood group & location selectors.",
      "Role-based dashboards with dynamic content.",
      "Donation request CRUD with status updates.",
      "Search donors by blood group & location.",
      "Blog management with draft/publish features.",
      "Donation funding with Stripe integration.",
      "Pagination & filtering in data lists.",
      "Environment variables secure config.",
      "Toast notifications for all user actions.",
      "Private routes persist login state.",
      "District & upazila data from Bangladesh Geocode.",
      "Smooth UI animations with Framer Motion.",
    ],
    technologies: [
      "React",
      "Firebase Auth",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Event Explorer",
    subtitle: "A Local Event Discovery Platform",
    image: "/Websites/Event-Explorer.png",
    live: "https://event-explorer-6b96f.web.app/",
    client: "https://github.com/Likhonpaul2/event-explorer",
    description: [
      "Event Explorer is a single-page application (SPA) built using React and Firebase that allows users to discover and explore local events such as conferences, workshops, exhibitions, sports matches, and more. Users can log in, browse events, view details, reserve seats, and update their profile — all through a beautiful, responsive interface."
    ],
    features: [
      "Group discovery by category and live keyword search",
      "Create, update, and delete hobby-based groups",
      "Email/password authentication with Firebase Auth",
      "User dashboard for managing personal groups and bookings",
      "Dashboard overview showing group count, bookings, and profile management",
      "Contact form integration using EmailJS",
      "Responsive, mobile-friendly layout with Tailwind CSS",
      "Interactive tooltips, alerts, and toast notifications",
      "Smooth page transitions using Framer Motion animations",
    ],
    technologies: [
      "React",
      "Firebase Auth",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "B2B Wholesale",
    subtitle: "B2B wholesale marketplace platform",
    image: "/Websites/b2b-wholesale.png",
    live: "https://b2b-wholesale-marketplace.web.app/",
    client: "https://github.com/Likhonpaul2/b2b-wholesale-plateform-client",
    description: [
      "A B2B wholesale platform designed to connect businesses with suppliers and streamline the wholesale purchasing process. The platform offers product listing, order management, user authentication, and secure transactions to simplify bulk buying and enhance business-to-business interactions."
    ],
    features: [
      "JWT authentication and protected admin routes",
      "Product filters, sorting, and list/grid toggle view",
      "Role-based dashboard (admin, vendor, buyer)",
      "Vendor panel for uploading and managing products",
      "Responsive UI with Tailwind and reusable components",
      "Framer Motion-based smooth animations",
    ],
    technologies: [
      "React",
      "Firebase",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Framer Motion",
    ],
  },
  {
    title: "Hobby Hub",
    subtitle: "B2B wholesale marketplace platform",
    image: "/Websites/hobby-hub-client.png",
    live: "https://hobby-hub-client-fcf7f.web.app/",
    client: "https://github.com/Likhonpaul2/hobby-hub-client",
    description: [
      "Hobby Hub is a web application designed to connect people with similar hobbies and interests. Users can discover, share, and join various hobby groups, participate in events, and build a community around their passions."
    ],
    features: [
      "JWT authentication and protected admin routes",
      "Product filters, sorting, and list/grid toggle view",
      "Role-based dashboard (admin, vendor, buyer)",
      "Vendor panel for uploading and managing products",
      "Responsive UI with Tailwind and reusable components",
      "Framer Motion-based smooth animations",
    ],
    technologies: [
      "React",
      "Firebase",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Framer Motion",
    ],
  },
];

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.getElementById("project_modal").showModal();
  };

  return (
    <section className="container mx-auto px-4">
      <SectionHeading
        title="Projects I've Built"
        subtitle="From concept to code — these are the digital products I’ve crafted."
      />

      <div className="mx-auto flex justify-center lg:gap-8 gap-10 lg:flex-row flex-col pt-2">
        {projects.map((project, index) => (
          <AllProjects key={index} project={project} openModal={openModal} />
        ))}
      </div>

      {/* Centralized dynamic modal */}
      <dialog id="project_modal" className="modal">
        <div className="modal-box max-h-[85vh] overflow-y-auto max-w-[85vw] sm:container">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-secondary text-base-100 absolute right-2 top-2 text-2xl p-1 opacity-90 hover:opacity-100 hover:scale-102">
              <CgClose />
            </button>
          </form>
          {selectedProject && <ProjectDetails project={selectedProject} />}
        </div>
      </dialog>
    </section>
  );
};

export default ProjectSection;
