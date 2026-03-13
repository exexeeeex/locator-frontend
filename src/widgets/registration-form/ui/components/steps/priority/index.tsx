import { motion } from "framer-motion";
import { SLIDE_MOTION_PROPS } from "@shared/config";
import { RegistrationStepPurpose } from "./purpose";
import { RegistrationStepPreferredGender } from "./preferred-gender";
import { RegistrationStepAgeRange } from "./age-range";

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const RegistrationPriority: React.FC = () => {
  return (
    <motion.div key="priority" {...SLIDE_MOTION_PROPS}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        <div>
          <RegistrationStepPurpose />
        </div>
        <div>
          <RegistrationStepPreferredGender />
        </div>
        <div>
          <RegistrationStepAgeRange />
        </div>
      </motion.div>
    </motion.div>
  );
};
