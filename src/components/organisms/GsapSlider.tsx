import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import SliderCard from '../molecules/SliderCard';
import Box from '../atoms/Box';
import Image from '../atoms/Image';
import Paragraph from '../atoms/Paragraph';

type Member = {
  title: string;
  image: string;
  experience: string;
  flag: string;
  skills: string[];
};

interface Props {
  members: Member[];
}

const GSAPCoverflow = ({ members }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  const [config, setConfig] = useState({
    SLIDE_WIDTH: 292,
    OFFSET: 120,
    SCALE_ACTIVE: 1,
    SCALE_SIDE: 0.9,
  });

  const handleResponsive = () => {
    const width = window.innerWidth;

    if (width < 640) {
      setConfig({
        SLIDE_WIDTH: 260,
        OFFSET: 80,
        SCALE_ACTIVE: 1,
        SCALE_SIDE: 0.75,
      });
    } else if (width < 1024) {
      setConfig({
        SLIDE_WIDTH: 280,
        OFFSET: 110,
        SCALE_ACTIVE: 1,
        SCALE_SIDE: 0.8,
      });
    } else {
      setConfig({
        SLIDE_WIDTH: 292,
        OFFSET: 130,
        SCALE_ACTIVE: 1,
        SCALE_SIDE: 0.9,
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResponsive);
    return () => window.removeEventListener('resize', handleResponsive);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slides = Array.from(container.children);

    slides.forEach((slide, index) => {
      const position = index - active;
      const isCenter = position === 0;

      gsap.to(slide, {
        duration: 0.6,
        x: position * config.OFFSET,
        scale: isCenter ? config.SCALE_ACTIVE : config.SCALE_SIDE,
        zIndex: isCenter ? 10 : 1,
        opacity: isCenter ? 1 : 0.8,
        ease: 'power3.out',
      });
    });
  }, [active, config]);

  const next = () => setActive((prev) => (prev + 1) % members.length);
  const prev = () => setActive((prev) => (prev - 1 + members.length) % members.length);

  return (
    <Box className="w-full flex flex-col items-center">
      <Box className="flex items-center justify-center gap-2 w-full mb-8">
        <Box className="bg-[#E9F7EF] rounded-lg px-4 py-2 w-max sliderTriangle relative flex items-center gap-2">
          <Paragraph className="text-[#00C696] text-[18px] leading-[27px] font-black">
            월 {(active + 1) * 100}만원
          </Paragraph>
        </Box>
      </Box>

      <Box className="relative flex items-center justify-center w-full overflow-hidden">
        <button onClick={prev} className="absolute left-0 xl:-left-4 z-50 p-4">
          <Image src="/assets/caret-right.svg" alt="caret-right" />
        </button>

        <Box
          ref={containerRef}
          className="relative h-[420px] flex justify-center items-center overflow-visible"
          style={{ width: '100%', maxWidth: '632px' }}>
          {members.map((item, i) => (
            <Box
              key={i}
              className="absolute"
              style={{
                width: `${config.SLIDE_WIDTH}px`,
                left: '50%',
                transform: 'translateX(-50%)',
              }}>
              <SliderCard {...item} />
            </Box>
          ))}
        </Box>

        <button onClick={next} className="absolute right-0 xl:-right-4 z-50 p-4 rotate-180">
          <Image src="/assets/caret-right.svg" alt="caret-right" />
        </button>
      </Box>
    </Box>
  );
};

export default GSAPCoverflow;
