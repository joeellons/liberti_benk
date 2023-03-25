import { Box, Button } from "@chakra-ui/react";

const LinkButton = ({ children }) => (
  <Box
    as="button"
    height="50px"
    width="100px"
    lineHeight="1.2"
    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
    border="1px"
    px="8px"
    borderRadius="2px"
    borderWidth="2px"
    fontSize="14px"
    fontWeight="bold"
    fontFamily="Libre Baskerville"
    bg="#146C94"
    borderColor="#146C94"
    color="#f5f6f7"
    _hover={{ 
			bg: "#ebedf0",
			color: "#146C94",
      borderColor: "#146C94",
		}}
    _active={{
      bg: "#dddfe2",
      transform: "scale(0.98)",
      borderColor: "#bec3c9",
    }}
    _focus={{
      boxShadow:
        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
    }}
  >
    {children}
  </Box>
);

export default LinkButton;
