import {
  projects,
  experiences,
  skills,
  certifications,
  skillVisibleCount,
  sections,
  socialMediaLinks,
  Experience,
} from "./content/index";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(skillVisibleCount ?? 1);
  const [isExpanded, setIsExpanded] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const handleToggleVisibility = () => {
    if (isExpanded) {
      setVisibleCount(skillVisibleCount ?? 2);
    } else {
      setVisibleCount(skills.length);
    }
    setIsExpanded(!isExpanded);

    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
      setActiveSection(sections[0].name.toLowerCase());
      return;
    }
    sections.forEach((section) => {
      const sectionElement = document.getElementById(
        section.name.toLowerCase()
      );
      if (sectionElement) {
        const sectionOffsetTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionOffsetTop - sectionHeight / 3 &&
          scrollPosition < sectionOffsetTop + sectionHeight
        ) {
          setActiveSection(section.name.toLowerCase());
        }
      }
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-y-scroll bg-black bg-opacity-86 leading-relaxed text-slate-400 antialiased selection:bg-red-500 selection:text-teal-900">
      <div className="font-sans mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div>
          {!isMobile && (
            <nav className="fixed top-1/2 left-0 transform -translate-y-1/2 p-4">
              <ul className="flex flex-col space-y-4">
                {sections.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.name.toLowerCase()}`}
                      className={`flex items-center justify-center w-12 h-12 transition-colors duration-300 ease-in-out rounded-full ${
                        activeSection === item.name.toLowerCase()
                          ? "text-red-500"
                          : "text-gray-300 hover:text-red-500"
                      }`}
                      title={item.name}
                    >
                      <i className={`fas ${item.icon} text-lg`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {isMobile && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-4 right-4 p-3 bg-red-500 text-white rounded-full shadow-lg transition-colors duration-300 hover:bg-red-400 z-50"
              style={{ zIndex: 9999 }}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          )}
        </div>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="mr-1 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 overflow-y-hidden border-none border-2 border-red-600">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl">
                Syed Muhammad Amer Ali Zaidi
              </h1>
              <div className="relative mt-3">
                <h2 className="mb-3 text-lg font-medium tracking-tight text-gray-300 sm:text-xl">
                  Full Stack{" "}
                  <span className="bg-red-500 text-gray-900 font-semibold">
                    .Net Developer
                  </span>
                </h2>
              </div>
              <p className="mt-4 leading-normal mb-2">
                I build stuff for the web with strong foundations in{" "}
                <span className="font-medium text-gray-300 hover:text-red-400 focus-visible:text-red-400">
                  Backend development
                </span>
                , while also engaging in{" "}
                <span className="font-medium text-gray-300 hover:text-red-400 focus-visible:text-red-400">
                  Frontend technologies.
                </span>
                With expertise on Enterprise-Level{" "}
                <span className="font-medium text-gray-300 hover:text-red-400 focus-visible:text-red-400">
                  Projects & Products
                </span>{" "}
                in{" "}
                <span className="font-medium text-gray-300 hover:text-red-400 focus-visible:text-red-400">
                  .NET
                </span>{" "}
                ,{" "}
                <span className="font-medium text-gray-300 hover:text-red-400 focus-visible:text-red-400">
                  React/Angular
                </span>{" "}
                and{" "}
                <span className="font-medium text-gray-300 hover:text-red-400 focus-visible:text-red-400">
                  Entity Framework
                </span>
                .
              </p>
              <a
                className="flex items-center text-red-500 hover:text-red-600 transition-colors duration-300"
                href={`mailto:${import.meta.env.VITE_EMAIL}`}
              >
                <i
                  className="fas fa-envelope mr-2 text-lg"
                  aria-hidden="true"
                ></i>
                {import.meta.env.VITE_EMAIL}
              </a>
              <ul className="mt-5 flex items-center" aria-label="Social media">
                {socialMediaLinks.map(({ href, label, icon }) => (
                  <li className="mr-5 text-xs" key={label}>
                    <a
                      className="block hover:text-gray-300"
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${label} (opens in a new tab)`}
                    >
                      <span className="sr-only">{label}</span>
                      <i
                        className={`fab ${icon} fa-3x text-red-500 hover:text-red-600`}
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-8 my-3 font-medium text-gray-300 hover:text-red-400 focus-visible:text-red-400">
                <a
                  href={import.meta.env.VITE_RESUME_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="resume link (opens in a new tab)"
                  className="inline-flex items-center"
                >
                  Resume
                </a>
              </p>
            </div>
          </header>
          <div className="pt-24 lg:w-1/2 lg:py-24 border-none border-2 border-red-600">
            <main>
              <div>
                <section
                  id="about"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-16 lg:scroll-mt-24"
                  aria-label="About me"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                    <h2 className="text-base font-bold uppercase tracking-widest text-gray-300">
                      About
                    </h2>
                  </div>
                  <div className="mb-12">
                    <p className="mb-4">
                      My main focus these days is on sharpening my{" "}
                      <span className="font-medium text-gray-300 hover:text-red-400 focus-visible:text-red-400">
                        backend engineering and learn new technologies
                      </span>
                      . My greatest strength is my ability to learn new
                      technologies quickly. Staying up to date with industry
                      best practices allows me to consistently deliver efficient
                      applications.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <p className="bottom-0">
                      Graduated from {""}
                      <span className="font-medium text-gray-300 hover:text-red-400 focus-visible:text-red-400">
                        University of Central Punjab
                      </span>
                      <br />
                      BS {""}
                      <span className="font-medium text-gray-300 hover:text-red-400 focus-visible:text-red-400">
                        Computer Science
                      </span>{" "}
                    </p>
                  </div>
                </section>
                <div className="my-2 border-t border-red-600 w-full" />
                <section
                  id="skills"
                  aria-label="skills"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-16 lg:scroll-mt-24"
                  ref={skillsRef}
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                    <h2 className="text-base font-bold uppercase tracking-widest text-gray-300">
                      Skills
                    </h2>
                  </div>
                  <div className="flex flex-col gap-6">
                    {" "}
                    {skills
                      .slice(0, visibleCount)
                      .map((skillCategory, index) => (
                        <div key={index}>
                          <h1 className="text-sm font-semibold text-gray-300 tracking-wide">
                            {skillCategory.category}
                          </h1>
                          <div className="flex flex-wrap gap-3 mt-2">
                            {skillCategory.skills.map((skill, idx) => (
                              <div
                                key={idx}
                                className="flex items-center rounded-full bg-red-200/10 px-3 py-1 text-xs font-medium leading-5 text-red-400"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                  {skills.length > skillVisibleCount && (
                    <button
                      onClick={handleToggleVisibility}
                      className="mt-4 rounded bg-red-600 px-4 py-2 text-sm text-white"
                    >
                      {isExpanded ? "Show Less" : "Show All"}
                    </button>
                  )}
                </section>{" "}
                <div className="my-4 border-t border-red-600 w-full" />
                <section
                  id="experience"
                  aria-label="experience"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-16 lg:scroll-mt-24"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                    <h2 className="text-base font-bold uppercase tracking-widest text-gray-300">
                      Experience
                    </h2>
                  </div>
                  <ol className="group/list">
                    {experiences.map(
                      (experience: Experience, index: number) => (
                        <li key={index} className="mb-12">
                          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-[1rem] transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-700/15 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <header
                              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-400 sm:col-span-2"
                              aria-label={experience.date}
                            >
                              {experience.date}
                            </header>
                            <div className="z-10 sm:col-span-6">
                              <h3 className="font-medium leading-snug text-gray-300">
                                <a
                                  className="inline-flex items-baseline font-medium leading-tight text-gray-300 hover:text-red-400 focus-visible:text-red-400 group/link text-base"
                                  href={experience.link}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  aria-label={`${experience.position} at ${experience.company} (opens in a new tab)`}
                                >
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span>
                                    {experience.position} @
                                    <span className="inline-block">
                                      {experience.company}
                                    </span>
                                  </span>
                                </a>
                              </h3>
                              <p className="mt-2 leading-normal"></p>
                              <ul className="list-disc text-sm pl-5">
                                {experience.description.map(
                                  (desc: string, index: number) => (
                                    <li key={index}>{desc}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </li>
                      )
                    )}
                  </ol>
                </section>
                <div className="my-4 border-t border-red-600 w-full" />
                <section
                  id="certifications"
                  aria-label="Certifications"
                  className="mb-8 scroll-mt-16 md:mb-16 lg:mb-12 lg:scroll-mt-20"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-3 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                    <h2 className="text-base font-semibold uppercase tracking-widest text-gray-300">
                      Certifications & Training
                    </h2>
                  </div>
                  <div>
                    <ul className="group/list grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {certifications.map((certification, index) => (
                        <li key={index} className="mb-1">
                          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-[1rem] transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-700/15 lg:group-hover:shadow-lg lg:group-hover:opacity-90"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                              <h3>
                                <span className="inline-flex items-baseline font-medium leading-tight text-gray-300 group/link text-base ">
                                  {certification.title}
                                </span>
                              </h3>
                              <p className="mt-1 text-sm leading-normal text-white whitespace-nowrap">
                                {certification.institution &&
                                  certification.institution}
                                {certification.institution &&
                                  certification.date &&
                                  " | "}
                                {certification.date && certification.date}
                                {certification.date &&
                                  certification.link &&
                                  " | "}
                                {certification.link && (
                                  <a
                                    href={certification.link}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="text-red-400 hover:text-red-500"
                                  >
                                    Certificate
                                  </a>
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
                <div className="my-4 border-t border-red-600 w-full" />
                <section
                  id="projects"
                  aria-label="projects"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-16 lg:scroll-mt-24"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                    <h2 className="text-base font-bold uppercase tracking-widest text-gray-300">
                      Projects
                    </h2>
                  </div>
                  <div>
                    <ul className="group/list">
                      {projects.map((project, index) => (
                        <li key={index} className="mb-12">
                          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-[1rem] transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-red-700/15 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                              {project.title && (
                                <h3>
                                  <a
                                    className="inline-flex items-baseline font-medium leading-tight text-gray-300 hover:text-red-400 focus-visible:text-red-400 group/link text-base"
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label={`${project.title} (opens in a new tab)`}
                                  >
                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                    <span>{project.title}</span>
                                  </a>
                                </h3>
                              )}
                              {project.description && (
                                <ol className="mt-1 text-sm leading-normal list-disc list-inside max-w-full">
                                  {project.description.map((point, idx) => (
                                    <li
                                      key={idx}
                                      className="max-w-full overflow-hidden text-ellipsis whitespace-normal"
                                    >
                                      {point}
                                    </li>
                                  ))}
                                </ol>
                              )}
                              {project.technologies &&
                                project.technologies.length > 0 && (
                                  <ul
                                    className="mt-2 flex flex-wrap"
                                    aria-label="Technologies used:"
                                  >
                                    {project.technologies.map((tech, index) => (
                                      <li key={index} className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-red-200/10 px-3 py-1 text-xs font-medium leading-5 text-red-400">
                                          {tech}
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                            </div>
                            {project.image && (
                              <img
                                alt={project.title + " Image"}
                                loading="lazy"
                                width="200"
                                height="48"
                                decoding="async"
                                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                style={{ color: "transparent" }}
                                src={project.image}
                              />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
