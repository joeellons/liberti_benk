import {
  Stack,
  Heading,
  Image,
  Flex,
  Text,
  Container,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import HeroLink from "../components/hero-link";
import { BsFillPersonVcardFill, BsCurrencyExchange } from "react-icons/bs";
import { MdBusinessCenter, MdBookOnline } from "react-icons/md";
import LinkButton from "../components/link-button";
import Testimonials from "../components/testimonials";
import AnimatedSection from "../components/animated-section";
import Footer from "../components/footer";

export default function Page() {  
  return (
    <Box>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} m={5}>
        <Flex p={8} flex={1} align={"center"}>
          <Stack spacing={4}>
            <Heading as="h2" variant="landing-title">
              Empowering Your Finances, Liberating Your Life
            </Heading>

            <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
              We take that commitment seriously by offering a range of
              innovative financial services to help you achieve your goals.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Hero Image"}
            objectFit={"cover"}
            src={"/images/hero-img.jpg"}
          />{" "}
        </Flex>
      </Stack>
      <Stack p={5} bg="#146C94" direction="column" align="center">
        <Heading as="h3" p={6} color="#F6F1F1">
          Services We Offer
        </Heading>
        <Stack spacing={5} direction={{ base: "column", md: "row" }}>
          <AnimatedSection delay={0.1}>
            <HeroLink icon={BsFillPersonVcardFill}>Personal Banking</HeroLink>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <HeroLink icon={MdBusinessCenter}>Business Banking</HeroLink>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <HeroLink icon={BsCurrencyExchange}>Investment Management</HeroLink>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <HeroLink icon={MdBookOnline}>Online Banking</HeroLink>
          </AnimatedSection>
        </Stack>
      </Stack>

      <Stack direction={{ base: "column", md: "row" }}>
        <Flex flex={3}>
          <Stack direction="column">
            <Heading as="h3" variant="landing-mini-title" pl={10} pt={10}>
              At Liberti Bank...
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }} pl={10}>
              We believe that financial freedom is achievable for everyone. We
              are committed to providing our customers with the tools and
              resources they need to achieve their financial goals. Join us
              today and experience the freedom of banking with Liberti Bank.
            </Text>
            <Flex pt={20} align="center" justifyContent="center">
              <LinkButton>About Us</LinkButton>
            </Flex>
          </Stack>
        </Flex>
        <Flex flex={2}>
          <Image alt="" src={"/images/hero-img.jpg"} />
        </Flex>
      </Stack>
      <Container maxW="container.lg">
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
      </Container>
    </Box>
  );
}
