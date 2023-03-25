import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";

const StyledDiv = chakra(motion.div, {
	shouldForwardProp: (prop) => {
		return shouldForwardProp(prop) || prop === 'transition'
	}
})

const AnimatedSection = ({ children, delay = 0 }) => (
	<StyledDiv
		initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
		viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
	>
		{children}
	</StyledDiv>
)

export default AnimatedSection