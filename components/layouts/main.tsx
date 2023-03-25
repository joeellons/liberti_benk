import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../footer";
import Navbar from "../navbar";

export default function Main({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Liberti Bank" />
        <meta property="og:site_name" content="Liberti Bank" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="og:title" content="Liberti Bank" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="images/card.png" />
        <title>Liberti Bank - Homepage</title>
        <link rel="icon" type="image/x-icon" href="images/favicon.ico"></link>
      </Head>

      <Navbar path={router.asPath} />

      <Box pt={14}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
