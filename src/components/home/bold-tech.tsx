
import {
  Description,
  SectionHeader,
  SubHeader
} from '@/components/ui/typography'
import {
  backendSkills,
  frontendSkills,
} from '@/utils/static-data'
import HomeSection from './home-section'
import Image from "next/image";

export default function BoldTech() {
  return (
      <HomeSection className="text-center space-y-14 gap-4 w-full divide-y">
        <div className="space-y-4">
          <div>
            <SectionHeader>Skillset 🧰</SectionHeader>
            <p>
              I&#39;m more skilled in Front-End side but I have some experience
              in back-end development too.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-2 balance">
            <SubHeader>Front-End</SubHeader>
            <Description>
              {frontendSkills
                .sort((a, b) => b.value - a.value)
                .map((skill, idx) => {
                  return (
                    <span key={skill.label}>
                      {skill.label}{' '}
                      {idx === frontendSkills.length - 1 ? '' : ' - '}{' '}
                    </span>
                  )
                })}
            </Description>
            <SubHeader>Back-End</SubHeader>
            <Description>
              {backendSkills
                .sort((a, b) => b.value - a.value)
                .map((skill, idx) => {
                  return (
                    <span key={skill.label}>
                      {skill.label}{' '}
                      {idx === backendSkills.length - 1 ? '' : ' - '}{' '}
                    </span>
                  )
                })}
            </Description>
          </div>
        </div>
        <div className="flex gap-10 pt-4 flex-wrap justify-center items-center">
          <Image
            priority
            alt="nextjs logo in a white background"
            width={60}
            height={60}
            className="w-16 object-contain"
            src="/next.png"
          />
          <Image
            priority
            alt="reactjs logo in a white background"
            width={60}
            height={60}
            className="w-16 object-contain"
            src="/react.png"
          />
          <Image
            priority
            alt="typescript logo in a white background"
            width={60}
            height={60}
            className="w-16 object-contain rounded-2xl overflow-hidden"
            src="/typescript.jpg"
          />
          <Image
            priority
            alt="tailwindcss logo in a transparent background"
            width={60}
            height={60}
            className="w-16 object-contain"
            src="/tailwindcss.png"
          />
          <Image
            priority
            alt="jotai logo in a transparent background"
            width={60}
            height={60}
            className="w-16 object-contain"
            src="/jotai.png"
          />
          <Image
            priority
            alt="jotai logo in a transparent background"
            width={60}
            height={60}
            className="w-16 object-contain"
            src="/react-query.png"
          />
        </div>
      </HomeSection>
  )
}

