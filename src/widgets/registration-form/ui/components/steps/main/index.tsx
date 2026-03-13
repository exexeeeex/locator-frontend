import { motion } from "framer-motion";
import { SLIDE_MOTION_PROPS } from "@shared/config";
import { RegistrationStepIdentity } from "./identity";
import { RegistrationStepGender } from "./gender";
import { RegistrationStepLocation } from "./location";
import { RegistrationStepAbout } from "./about";
import { RegistrationStepBirthday } from "./birthday";
import { RegistrationStepInterests } from "./interests";

const staggerContainer = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.08 },
	},
};

export const RegistrationMain: React.FC = () => {
	return (
		<motion.div
			key='main'
			{...SLIDE_MOTION_PROPS}
		>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				animate='show'
				className='space-y-4 '
			>
				<motion.div>
					<RegistrationStepIdentity />
				</motion.div>
				<motion.div>
					<RegistrationStepGender />
				</motion.div>
				<motion.div>
					<RegistrationStepLocation />
				</motion.div>
				<motion.div>
					<RegistrationStepAbout />
				</motion.div>
				<motion.div>
					<RegistrationStepBirthday />
				</motion.div>
				<motion.div>
					<RegistrationStepInterests />
				</motion.div>
			</motion.div>
		</motion.div>
	);
};
