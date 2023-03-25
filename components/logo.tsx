import { Link, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`;

export default function Logo() {
  return (
    <Link href="/">
      <LogoBox>
        <Image
          src="/images/logo.jpg"
          width={10}
          height={10}
          alt="Liberti Bank"
        />
        <Text
          color="#146C94"
          fontFamily="Libre Baskerville"
          fontWeight="bold"
          fontSize={{ base: '2xl', lg: '3xl' }}
          whiteSpace="nowrap"
          pt={3}
          ml={3}
        >
          Liberti Bank
        </Text>
      </LogoBox>
    </Link>
  );
}
