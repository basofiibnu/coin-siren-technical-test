import { motion } from 'framer-motion';
import Box from '../atoms/Box';

import GSAPCoverflow from './GsapSlider';

const Slider = ({
  members,
}: {
  members: { title: string; image: string; experience: string; flag: string; skills: string[] }[];
}) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box className="w-full swiper-container">
        <GSAPCoverflow members={members} />
      </Box>
    </motion.div>
  );
};

export default Slider;
