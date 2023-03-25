import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "./logo";
import NextLink from "next/link";
import { BiLogIn } from "react-icons/bi";
import LoginDrawer from "./login";
import { HamburgerIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;

  return (
    <Link as={NextLink} href={href} p={2} variant="nav-link">
      {children}
    </Link>
  );
};

export default function Navbar(props) {
  const { path } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <LoginDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Box
        position="fixed"
        as="nav"
        w="100%"
        style={{
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 8.55px 0.45px rgba(0,0,0,.27)",
        }}
        {...props}
        zIndex={99}
      >
        <Container
          display="flex"
          flexDirection="row"
          p={2}
          maxW="container.lg"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" letterSpacing={"tighter"}>
              <Logo />
            </Heading>
          </Flex>

          <Stack
            display={{ base: "none", md: "flex" }}
            direction={{ base: "column", md: "row" }}
            width={{ base: "full", md: "auto" }}
            flexGrow={1}
          >
            <LinkItem href="/personal" path={path}>
              Personal
            </LinkItem>
            <LinkItem href="/business" path={path}>
              Business
            </LinkItem>
            <LinkItem href="/investment" path={path}>
              Investment
            </LinkItem>
            <LinkItem href="/online" path={path}>
              Online
            </LinkItem>
          </Stack>

          <Box flex={1} display="flex" flexDirection="row" alignItems="right">
            <Button
              bg="#19A7CE"
              size={{ base: "sm", md: "lg" }}
              color="#F6F1F1"
              borderRadius={0}
              _hover={{
                color: "#19A7CE",
                bg: "#F6F1F1",
                borderStyle: "solid",
                borderColor: "#19A7CE",
              }}
              leftIcon={<Icon as={BiLogIn} />}
              onClick={onOpen}
            >
              Login
            </Button>
            <Box ml={2} display={{ base: "inline-block", md: "none" }}>
              <IconButton
								color="#19A7CE"
								fontSize="2xl"
								fontWeight={5}
                bg="transparent"
                size="sm"
                icon={<HamburgerIcon />}
                aria-label=""
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
