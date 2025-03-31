// const project = {
//   title: "RSVP WebApp",
//   subtitle: "Fullstack | JS, MongoDB, Express",
//   description: "Live RSVP platform hosted on Render",
//   image: "/projects/rsvp-thumb.png", // Place this in /public/projects/
//   liveLink: "https://rsvp-frontend-kohl.vercel.app/",
//   githubLink: "https://github.com/tuanng2210/rsvp-frontend",
//   tags: ["#React", "#MongoDB", "#Express"],
// };

// const Projects = () => {
//   return (
//     <section className="bg-black px-6 py-24 min-h-screen text-white text-center">
//       <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mb-16 text-white animate-fadeUp">
//         Projects
//       </h2>

//       {/* Centered Project Card */}
//       <div className="flex justify-center">
//         <div
//           className="group bg-[#111827] border border-[#1f2937] rounded-xl overflow-hidden transform transition-all hover:scale-105 shadow-md hover:shadow-lg"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-6 text-left">
//             <h3 className="text-xl font-bold mb-2 text-white">
//               {project.title}
//             </h3>
//             <p className="text-sm text-purple-400 mb-2">{project.subtitle}</p>
//             {project.description && (
//               <p className="text-sm text-gray-400 mb-4">
//                 {project.description}
//               </p>
//             )}

//             {/* Tags */}
//             <div className="text-sm text-gray-500 mb-4">
//               {project.tags.map((tag, tagIndex) => (
//                 <span
//                   key={tagIndex}
//                   className="mr-2 inline-block rounded-full px-3 py-1 bg-purple-400 text-white text-xs font-medium"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Icons */}
//             <div className="flex gap-4 mt-4 justify-center">
//               {project.githubLink && (
//                 <a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white transition"
//                   title="View Code on GitHub"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 0C5.37 0 0 5.4 0 12.07c0 5.34 3.438 9.86 8.205 11.47.6.11.82-.26.82-.58 0-.29-.01-1.05-.015-2.06-3.338.73-4.042-1.64-4.042-1.64-.546-1.4-1.333-1.77-1.333-1.77-1.09-.75.083-.73.083-.73 1.205.086 1.84 1.26 1.84 1.26 1.07 1.87 2.807 1.33 3.492 1.02.108-.79.42-1.33.763-1.63-2.665-.31-5.466-1.36-5.466-6.05 0-1.34.465-2.43 1.23-3.28-.123-.31-.534-1.56.117-3.24 0 0 1.007-.33 3.3 1.26a11.21 11.21 0 0 1 3.005-.41c1.02.005 2.05.14 3.005.41 2.29-1.59 3.295-1.26 3.295-1.26.653 1.68.243 2.93.12 3.24.77.85 1.23 1.94 1.23 3.28 0 4.7-2.807 5.74-5.48 6.05.435.38.823 1.12.823 2.26 0 1.63-.015 2.94-.015 3.33 0 .32.217.7.825.58C20.565 21.93 24 17.41 24 12.07 24 5.4 18.63 0 12 0z" />
//                   </svg>
//                 </a>
//               )}

//               {project.liveLink && (
//                 <a
//                   href={project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white transition"
//                   title="Live Demo"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
//                     <path d="M5 5v14h14v-7h-2v5H7V7h5V5H5z" />
//                   </svg>
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
const projects = [
  {
    title: "RSVP WebApp",
    subtitle: "Fullstack | JS, MongoDB, Express",
    description: "Live RSVP platform hosted on Render",
    image: "/projects/rsvp-thumb.png", // Place this in /public/projects/
    liveLink: "https://rsvp-frontend-kohl.vercel.app/",
    githubLink: "https://github.com/tuanng2210/rsvp-frontend",
    tags: ["#React", "#MongoDB", "#Express"],
  },
  {
    title: "Next.js Lyric Finder",
    subtitle: "Fullstack | Next.js, Public API",
    description: "Lyric Finder web app using a public API to search for song lyrics.",
    image: "/projects/lyric-finder-thumb.png", // Place this in /public/projects/
    liveLink: "https://lyrics-finder-app-six.vercel.app/",
    githubLink: "#", // Add the GitHub link if available
    tags: ["#Next.js", "#API", "#JavaScript"],
  },
];

const Projects = () => {
  return (
    <section className="bg-black px-6 py-24 min-h-screen text-white text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mb-16 text-white animate-fadeUp">
        Projects
      </h2>

      {/* Centered Project Cards */}
      <div className="flex justify-center flex-wrap gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-[#111827] border border-[#1f2937] rounded-xl overflow-hidden transform transition-all hover:scale-105 shadow-md hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-purple-400 mb-2">{project.subtitle}</p>
              {project.description && (
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
              )}

              {/* Tags */}
              <div className="text-sm text-gray-500 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="mr-2 inline-block rounded-full px-3 py-1 bg-purple-400 text-white text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Icons */}
              <div className="flex gap-4 mt-4 justify-center">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                    title="View Code on GitHub"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.4 0 12.07c0 5.34 3.438 9.86 8.205 11.47.6.11.82-.26.82-.58 0-.29-.01-1.05-.015-2.06-3.338.73-4.042-1.64-4.042-1.64-.546-1.4-1.333-1.77-1.333-1.77-1.09-.75.083-.73.083-.73 1.205.086 1.84 1.26 1.84 1.26 1.07 1.87 2.807 1.33 3.492 1.02.108-.79.42-1.33.763-1.63-2.665-.31-5.466-1.36-5.466-6.05 0-1.34.465-2.43 1.23-3.28-.123-.31-.534-1.56.117-3.24 0 0 1.007-.33 3.3 1.26a11.21 11.21 0 0 1 3.005-.41c1.02.005 2.05.14 3.005.41 2.29-1.59 3.295-1.26 3.295-1.26.653 1.68.243 2.93.12 3.24.77.85 1.23 1.94 1.23 3.28 0 4.7-2.807 5.74-5.48 6.05.435.38.823 1.12.823 2.26 0 1.63-.015 2.94-.015 3.33 0 .32.217.7.825.58C20.565 21.93 24 17.41 24 12.07 24 5.4 18.63 0 12 0z" />
                    </svg>
                  </a>
                )}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                    title="Live Demo"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                      <path d="M5 5v14h14v-7h-2v5H7V7h5V5H5z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
