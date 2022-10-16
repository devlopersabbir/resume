import { Container } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../src/components/Header/Header";

export default () => {
  return (
    <>
      <Head>
        <title>Developer Sabbir | Personal portfolio website</title>
        <meta charset="UTF-8" />
        <meta name="author" content="Developoer Sabbir" />
        <meta
          name="description"
          content="Hello there, this is Sabbir. A full-stack web appilcation developer."
        />
        <meta
          name="keywords"
          content="devlopersabbir, sabbir, sabbir hossain, st sabbir, sabbir hossain, developersabbir, st, sabbir personal, sabbir portfolio, developer sabbir resume, Best porfolio website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <>
        {/* Header */}
        <Container m="container.xl" maxW="90%" mx="auto">
          <Header />
        </Container>
        {/* Hero */}
      </>
    </>
  );
};
