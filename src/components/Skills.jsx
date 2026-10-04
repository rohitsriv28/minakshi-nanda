import { useState } from "react";
import { Code, PackageCheck, TrendingUp, Users } from "lucide-react";

const CATEGORIES = ["All", "Technology", "Business", "People"];

const SKILL_CARDS = [
  {
    category: "Technology",
    icon: <Code className="w-5 h-5 text-terracotta" />,
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
  {
    category: "Technology",
    icon: <PackageCheck className="w-5 h-5 text-terracotta" />,
    title: "Quality & Delivery",
    skills: [
      "Manual QA & Testing",
      "Bug Tracking & Reporting",
      "Release Quality",
      "Sprint Collaboration",
    ],
  },
  {
    category: "Business",
    icon: <TrendingUp className="w-5 h-5 text-terracotta" />,
    title: "Business & Management",
    skills: [
      "Business Strategy",
      "Operations Management",
      "Project Management",
      "Marketing Fundamentals",
      "Organisational Behaviour",
    ],
  },
  {
    category: "People",
    icon: <Users className="w-5 h-5 text-terracotta" />,
    title: "People & Communication",
    skills: [
      "Public Speaking & MC",
      "Leadership",
      "Team Collaboration",
      "Event Organisation",
      "Cross-cultural Communication",
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCards =
    activeTab === "All"
      ? SKILL_CARDS
      : SKILL_CARDS.filter((c) => c.category === activeTab);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 px-6 md:px-12 max-w-[1360px] mx-auto border-t border-[#E8DED1]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <span className="section-num-tag">05. Skills &amp; Expertise</span>
          <h2 id="skills-heading" className="section-h2 mb-1">
            A blend of technical, business
            <br className="hidden sm:inline" /> and people skills.
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-[#EFE5D7] rounded-full self-start md:self-auto">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-[0.78rem] font-medium transition-all duration-200 cursor-pointer ${
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

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-[6px] border border-[#E6DCCF] p-6 shadow-sm flex flex-col justify-between transition-all duration-200 hover:border-terracotta/40 hover:shadow-md"
          >
            <div>
              <div className="w-10 h-10 rounded-[6px] bg-terracotta/10 border border-terracotta/20 flex items-center justify-center mb-5">
                {card.icon}
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
        ))}
      </div>
    </section>
  );
}
