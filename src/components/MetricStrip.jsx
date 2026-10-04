import {
  GraduationCap,
  BookOpen,
  ChartNoAxesCombined,
  Users,
} from "lucide-react";

export default function MetricStrip() {
  return (
    <section
      aria-label="Key Qualifications"
      className="bg-[#FAF6F0] md:bg-[#181513] md:text-white border-y border-[#E8DED1] md:border-white/10 py-5 md:py-6 lg:py-8 px-2 sm:px-6 md:px-10 lg:px-12 w-full transition-colors duration-200"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* ── DESKTOP VIEW (>= 1024px) DARK SHADE AT ALL COSTS ── */}
        <div className="hidden lg:grid lg:grid-cols-4 divide-x divide-white/10">
          {/* 1. BSc CSIT */}
          <div className="flex items-center gap-4 px-4 xl:px-6">
            <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-[#C49B5B]" />
            </div>
            <div>
              <div className="font-serif text-[1.18rem] xl:text-[1.25rem] font-medium text-white leading-tight">
                BSc CSIT
              </div>
              <div className="font-sans text-[0.74rem] xl:text-[0.76rem] text-white/70 leading-tight mt-1">
                Tribhuvan University
              </div>
              <div className="font-sans text-[0.7rem] text-white/45 leading-tight">
                2019 – 2024
              </div>
            </div>
          </div>

          {/* 2. MBA (Ongoing) */}
          <div className="flex items-center gap-4 px-4 xl:px-6">
            <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-[#C49B5B]" />
            </div>
            <div>
              <div className="font-serif text-[1.18rem] xl:text-[1.25rem] font-medium text-white leading-tight">
                MBA (Ongoing)
              </div>
              <div className="font-sans text-[0.74rem] xl:text-[0.76rem] text-white/70 leading-tight mt-1">
                Purvanchal University
              </div>
              <div className="font-sans text-[0.7rem] text-white/45 leading-tight">
                2025 – Present
              </div>
            </div>
          </div>

          {/* 3. ~20% */}
          <div className="flex items-center gap-4 px-4 xl:px-6">
            <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <ChartNoAxesCombined className="w-5 h-5 text-[#C49B5B]" />
            </div>
            <div>
              <div className="font-serif text-[1.18rem] xl:text-[1.25rem] font-medium text-white leading-tight">
                ~20%
              </div>
              <div className="font-sans text-[0.74rem] xl:text-[0.76rem] text-white/70 leading-tight mt-1">
                Open bug backlog reduction
              </div>
              <div className="font-sans text-[0.7rem] text-white/45 leading-tight">
                at Lennobyte
              </div>
            </div>
          </div>

          {/* 4. 7+ */}
          <div className="flex items-center gap-4 px-4 xl:px-6">
            <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-[#C49B5B]" />
            </div>
            <div>
              <div className="font-serif text-[1.18rem] xl:text-[1.25rem] font-medium text-white leading-tight">
                7+
              </div>
              <div className="font-sans text-[0.74rem] xl:text-[0.76rem] text-white/70 leading-tight mt-1">
                Events as MC / Organiser
              </div>
              <div className="font-sans text-[0.7rem] text-white/45 leading-tight">
                (100–200 audience)
              </div>
            </div>
          </div>
        </div>

        {/* ── TABLET VIEW (768px – 1023px) DARK SHADE ── */}
        <div className="hidden md:grid lg:hidden md:grid-cols-4 divide-x divide-white/10">
          {/* 1. BSc CSIT */}
          <div className="flex flex-col items-start px-3.5">
            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2.5 shrink-0">
              <GraduationCap className="w-4 h-4 text-[#C49B5B]" />
            </div>
            <div className="font-serif text-[1.05rem] font-medium text-white leading-tight">
              BSc CSIT
            </div>
            <div className="font-sans text-[0.7rem] text-white/70 leading-tight mt-1">
              Tribhuvan University
            </div>
            <div className="font-sans text-[0.66rem] text-white/45 leading-tight">
              2019 – 2024
            </div>
          </div>

          {/* 2. MBA (Ongoing) */}
          <div className="flex flex-col items-start px-3.5">
            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2.5 shrink-0">
              <BookOpen className="w-4 h-4 text-[#C49B5B]" />
            </div>
            <div className="font-serif text-[1.05rem] font-medium text-white leading-tight">
              MBA
              <br />
              <span className="font-normal text-[0.92rem] text-white/90">
                (Ongoing)
              </span>
            </div>
            <div className="font-sans text-[0.7rem] text-white/70 leading-tight mt-1">
              Purvanchal University
            </div>
            <div className="font-sans text-[0.66rem] text-white/45 leading-tight">
              2025 – Present
            </div>
          </div>

          {/* 3. ~20% */}
          <div className="flex flex-col items-start px-3.5">
            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2.5 shrink-0">
              <ChartNoAxesCombined className="w-4 h-4 text-[#C49B5B]" />
            </div>
            <div className="font-serif text-[1.05rem] font-medium text-white leading-tight">
              ~20%
            </div>
            <div className="font-sans text-[0.7rem] text-white/70 leading-tight mt-1">
              Bug reduction
            </div>
            <div className="font-sans text-[0.66rem] text-white/45 leading-tight">
              at Lennobyte
            </div>
          </div>

          {/* 4. 7+ */}
          <div className="flex flex-col items-start px-3.5">
            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2.5 shrink-0">
              <Users className="w-4 h-4 text-[#C49B5B]" />
            </div>
            <div className="font-serif text-[1.05rem] font-medium text-white leading-tight">
              7+
            </div>
            <div className="font-sans text-[0.7rem] text-white/70 leading-tight mt-1">
              Events as MC
            </div>
            <div className="font-sans text-[0.66rem] text-white/45 leading-tight">
              (100–200 audience)
            </div>
          </div>
        </div>

        {/* ── MOBILE VIEW (< 768px) EXACTLY matching Screenshot 2 (Light Cream) ── */}
        <div className="grid md:hidden grid-cols-4 divide-x divide-[#E8DED1]">
          {/* 1. BSc CSIT */}
          <div className="flex flex-col items-center px-1 text-center">
            <GraduationCap className="w-6 h-6 text-terracotta stroke-[1.4] mb-1.5" />
            <div className="font-serif text-[0.82rem] font-bold text-brown leading-tight">
              BSc CSIT
            </div>
            <div className="font-sans text-[0.62rem] text-muted leading-tight mt-1">
              Tribhuvan University
            </div>
          </div>

          {/* 2. MBA */}
          <div className="flex flex-col items-center px-1 text-center">
            <BookOpen className="w-6 h-6 text-terracotta stroke-[1.4] mb-1.5" />
            <div className="font-serif text-[0.82rem] font-bold text-brown leading-tight">
              MBA
            </div>
            <div className="font-sans text-[0.62rem] text-muted leading-tight mt-1">
              Purvanchal University
            </div>
          </div>

          {/* 3. ~20% */}
          <div className="flex flex-col items-center px-1 text-center">
            <ChartNoAxesCombined className="w-6 h-6 text-terracotta stroke-[1.4] mb-1.5" />
            <div className="font-serif text-[0.82rem] font-bold text-brown leading-tight">
              ~20%
            </div>
            <div className="font-sans text-[0.62rem] text-muted leading-tight mt-1">
              Bug backlog reduction
            </div>
          </div>

          {/* 4. 7+ */}
          <div className="flex flex-col items-center px-1 text-center">
            <Users className="w-6 h-6 text-terracotta stroke-[1.4] mb-1.5" />
            <div className="font-serif text-[0.82rem] font-bold text-brown leading-tight">
              7+
            </div>
            <div className="font-sans text-[0.62rem] text-muted leading-tight mt-1">
              Events as MC (100–200)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
