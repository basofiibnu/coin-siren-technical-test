import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Box from '../atoms/Box';
import BenefitCard from '../molecules/BenefitCard';
import Image from '../atoms/Image';
import Paragraph from '../atoms/Paragraph';

const Benefits = ({ data }: { data: { title: string; icon: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(332);
  const slideRef = useRef<HTMLDivElement>(null);

  const loopedBenefits = [...data, ...data];

  useEffect(() => {
    if (slideRef.current) {
      setSlideWidth(slideRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box className="gap-3 items-center hidden xl:flex">
        <Box className="w-full">
          <motion.div
            className="flex gap-4"
            initial={{ x: 0 }}
            animate={{ x: -(currentIndex * (slideWidth + 16)) }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onAnimationComplete={() => {
              if (currentIndex === data.length) {
                setCurrentIndex(0);
              }
            }}>
            {loopedBenefits.map((benefit, index) => (
              <motion.div key={index} ref={index === 0 ? slideRef : null} className="min-w-[332px]">
                <BenefitCard title={benefit.title} icon={benefit.icon} />
              </motion.div>
            ))}
          </motion.div>
        </Box>
      </Box>

      <Box className="gap-3 flex-col items-start sm:items-center flex xl:hidden">
        <Box className="gap-3 flex items-center">
          <Box className="flex flex-col items-start gap-3">
            <Box className="flex items-center gap-3">
              <Image src="/assets/checkbox.svg" alt="checkbox" />
              <Paragraph className="text-white font-black text-base leading-6">한국어 능력</Paragraph>
            </Box>
            <Box className="flex items-center gap-3">
              <Image src="/assets/checkbox.svg" alt="checkbox" />
              <Paragraph className="text-white font-black text-base leading-6">겸업 여부</Paragraph>
            </Box>
          </Box>
          <Box className="flex flex-col items-start gap-3">
            <Box className="flex items-center gap-3">
              <Image src="/assets/checkbox.svg" alt="checkbox" />
              <Paragraph className="text-white font-black text-base leading-6">업무 수행 능력</Paragraph>
            </Box>
            <Box className="flex items-center gap-3">
              <Image src="/assets/checkbox.svg" alt="checkbox" />
              <Paragraph className="text-white font-black text-base leading-6">평판 조회</Paragraph>
            </Box>
          </Box>
        </Box>

        <Box className="mt-3">
          <Paragraph className="text-[#FBFF23] font-black text-base leading-6">개발자가 필요하신가요?</Paragraph>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Benefits;
