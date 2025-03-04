import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  // Define how many skills to show per row, decreasing for pyramid effect
  const row1Count = SKILL_DATA.length;            // First row (all skills)
  const row2Count = FRONTEND_SKILL.length;        // Second row (all frontend)
  const row3Count = 8;                            // Take 8 backend skills
  const row4Count = 4;                            // Take 4 fullstack skills
  const row5Count = 2;                            // Take 2 other skills

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      {/* First row - All skills (widest) */}
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
        {SKILL_DATA.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Second row - Frontend skills (slightly narrower) */}
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center" 
           style={{ maxWidth: "90%" }}>
        {FRONTEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Third row - Backend skills (limited to 8, even narrower) */}
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center"
           style={{ maxWidth: "75%" }}>
        {BACKEND_SKILL.slice(0, row3Count).map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Fourth row - Fullstack skills (limited to 4, narrower) */}
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center"
           style={{ maxWidth: "50%" }}>
        {FULLSTACK_SKILL.slice(0, row4Count).map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Fifth row - Other skills (limited to 2, narrowest) */}
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center"
           style={{ maxWidth: "25%" }}>
        {OTHER_SKILL.slice(0, row5Count).map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};