import { useState } from "react";
import { Code, PackageCheck, TrendingUp, Users } from "lucide-react";

const CATEGORIES = ["Business", "People", "Quality", "Technology"];

const SKILL_MAP = {
  Business: {
    icon: <TrendingUp className="w-10 h-10 text-terracotta/80" />,
    title: "Business & Management",
    skills: [
      "Business Strategy",
      "Operations Management",
      "Project Management",
      "Marketing Fundamentals",
      "Organisational Behaviour",
    ],
  },
  People: {
    icon: <Users className="w-10 h-10 text-terracotta/80" />,
    title: "People & Communication",
    skills: [
      "Public Speaking & MC",
      "Leadership",
      "Team Collaboration",
      "Event Organisation",
      "Cross-cultural Communication",
    ],
  },
  Quality: {
    icon: <PackageCheck className="w-10 h-10 text-terracotta/80" />,
    title: "Quality & Delivery",
    skills: [
      "Manual QA & Testing",
      "Bug Tracking & Reporting",
      "Release Quality",
      "Sprint Collaboration",
    ],
  },
  Technology: {
    icon: <Code className="w-10 h-10 text-terracotta/80" />,
    title: "Technology",
    skills: [
      "Android Development (Kotlin)",
      "UI/UX Design",
      "Web Technologies (HTML/CSS)",
      "Database Management",
      "Cloud Computing Fundamentals",
      "IoT (Arduino)",
    ],
  },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Business");

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 md:py-24 px-5 md:px-12 max-w-[1360px] mx-auto border-t border-[#E8DED1]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-14">
        <div>
          <span className="section-num-tag">05. Skills &amp; Expertise</span>
          <h2 id="skills-heading" className="section-h2 mb-1">
            A blend of technical, business
            <br className="hidden sm:inline" /> and people skills.
          </h2>
        </div>

        {/* Filter Pills: HIDDEN on desktop, CENTER ALIGNED on mobile view */}
        <div className="md:hidden flex items-center justify-center mx-auto my-3 p-1 bg-[#EFE5D7] rounded-full overflow-x-auto max-w-full">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-[0.76rem] sm:text-[0.78rem] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? "bg-brown text-white shadow-sm"
                  : "text-muted hover:text-brown"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Focused Card Matching Screen 7 */}
      <div className="md:hidden bg-white rounded-[10px] border border-[#E6DCCF] p-6 shadow-sm flex flex-col justify-between min-h-[320px]">
        <div>
          <ul className="list-none m-0 p-0 space-y-3 mb-8">
            {SKILL_MAP[activeTab].skills.map((skill) => (
              <li
                key={skill}
                className="text-[0.85rem] text-brown/90 flex items-start gap-2.5 leading-snug font-light before:content-['•'] before:text-terracotta before:text-[1.1rem] before:leading-none before:mt-0.5"
              >
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Large bottom terracotta icon matching Screen 7 */}
        <div className="flex justify-center pt-4 border-t border-[#F5EFE6]">
          {SKILL_MAP[activeTab].icon}
        </div>
      </div>

      {/* Desktop 4 Cards Grid (No filter tabs needed on desktop) */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((catKey) => {
          const card = SKILL_MAP[catKey];
          return (
            <div
              key={card.title}
              className="bg-white rounded-[6px] border border-[#E6DCCF] p-6 shadow-sm flex flex-col justify-between transition-all duration-200 hover:border-terracotta/40 hover:shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-[6px] bg-terracotta/10 border border-terracotta/20 flex items-center justify-center mb-5">
                  <span className="scale-75">{card.icon}</span>
                </div>
                <h3 className="font-serif text-[1.18rem] font-semibold text-brown mb-4">
                  {card.title}
                </h3>
                <ul className="list-none m-0 p-0 space-y-2.5">
                  {card.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[0.82rem] text-muted flex items-start gap-2 leading-snug font-light before:content-['•'] before:text-terracotta before:text-[1rem] before:leading-none before:mt-0.5"
                    >
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
