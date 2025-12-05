'use client';

import MainTemplate from '../templates/MainTemplate';
import Box from '../atoms/Box';
import Hero from '../organisms/Hero';
import Slider from '../organisms/Slider';
import Benefits from '../organisms/Benefits';

export type MembersData = {
  message: string;
  data: { title: string; image: string; experience: string; flag: string; skills: string[] }[];
};
export type BenefitsData = {
  message: string;
  data: { title: string; icon: string }[];
};

const Home = ({ data, benefits }: { data: MembersData; benefits: BenefitsData }) => {
  const { data: members } = data;
  const { data: benefitData } = benefits;

  return (
    <MainTemplate>
      <Box className="mb-0 mt-10 xl:my-10 flex flex-col gap-8">
        <Box className="flex flex-col xl:flex-row items-center justify-start gap-0">
          <Box className="w-full">
            <Hero />
          </Box>
          <Box className="w-full xl:max-w-[632px]">
            <Slider members={members} />
          </Box>
        </Box>

        <Box className="mt-0 mb-16 xl:mt-8 xl:mb-0">
          <Benefits data={benefitData} />
        </Box>
      </Box>
    </MainTemplate>
  );
};

export default Home;
