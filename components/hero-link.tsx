import { Box, Heading, LinkBox, Text, Icon } from "@chakra-ui/react";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  padding: 4rem;
  border-radius: 10px;
	transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.3), -3px -3px 5px 2px rgba(0, 0, 0, 0.3);
  }
`;

const HeroLink = ({ children, icon }) => (
  <LinkBox cursor="pointer">
    <StyledBox
      bg="#19A7CE"
      flex={1}
      maxW="15rem"
      textAlign="center"
      color="#F6F1F1"
    >
			<Icon boxSize={10} as={icon}></Icon>
      <Text 
				fontWeight={"bold"}
			>{children}</Text>
    </StyledBox>
  </LinkBox>
);

export default HeroLink;
