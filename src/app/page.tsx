"use client";

import {
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  OrderedList,
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import GetStarted from "./components/GetStarted";
import Logo from "./components/LogoLight";
import Slides from "./components/Slides";

export default function Home() {
  return (
    <main>
      <Container maxW={"7xl"}>
        <Stack direction={"column"}>
          <Stack
            spacing={5}
            align={"center"}
            mt={"40"}
            mx={"auto"}
            textAlign={"center"}
          >
            <Heading
              as={"h1"}
              w={{ base: "300px", sm: "100%" }}
              fontWeight={800}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            >
              Bring Your Stories to Life✨
            </Heading>
            <Text fontSize={"sm"} w={{ base: "80%", md: "100%" }}>
              Our team of experienced professionals is here to help you achieve
              your publishing goals!
            </Text>
            <GetStarted />
          </Stack>
          <Image
            mt={"10"}
            alt={"Hero Image"}
            fit={"cover"}
            align={"center"}
            h={"100%"}
            w={"100%"}
            src={"/images/_images_banner.png"}
          />
        </Stack>
      </Container>

      <Box w={"100%"} bg={"blackAlpha.200"} my={"20"} py={"16"}>
        <Container maxW={"7xl"}>
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box w={["100%", "null", "45%"]}>
              <Image
                alt={"About-us"}
                fit={"cover"}
                align={"center"}
                h={"auto%"}
                w={"100%"}
                src={"/images/image-1.png"}
              />
            </Box>
            <Box w={["100%", "null", "50%"]} mt={{ base: 10, md: 0 }}>
              <Heading as={"h2"} fontSize={["3xl", "4xl"]}>
                About Us
              </Heading>
              <Text mt={4}>
                Parakletus Publishing is where we empower authors to share their
                stories with the world. We are a dynamic and innovative
                publishing company that specializes in helping writers bring
                their ideas to life. We aim to provide a platform for aspiring
                and established authors to showcase their work and connect with
                readers worldwide. A leading publishing company that utilizes
                digital technology to publish books. With a team of experienced
                editors, designers, and marketers, we offer authors the
                opportunity to publish their work in a variety of formats,
                including print, e-book, and audiobook. Using state-of-the-art
                technology, Parakletus Publishing ensures that all books are
                produced to the highest standards, with professional formatting,
                cover design, and editing. The company&apos;s digital publishing
                platform allows authors to track the progress of their books and
                make changes to their manuscripts in real time. At Parakletus
                Publishing, every story deserves to be told. That&apos;s why we
                work closely with our authors to bring out the best in their
                writing and help them achieve their publishing dreams. Our
                experienced team of editors, designers, and marketers will guide
                you through the entire publishing process, from manuscript
                evaluation to book promotion.
              </Text>
            </Box>
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            mt={{ base: "28", md: "40" }}
          >
            <Box w={["100%", "null", "45%"]}>
              <Image
                alt={"What we offer"}
                fit={"cover"}
                align={"center"}
                h={"auto"}
                w={"100%"}
                src={"/images/image-2.png"}
              />
            </Box>
            <Box
              w={["100%", "null", "50%"]}
              mt={{ base: 10, md: 0 }}
              order={{ base: "1", md: "-1" }}
            >
              <Heading as={"h2"} fontSize={["3xl", "4xl"]}>
                What We Offer
              </Heading>
              <Text my={4}>
                We offer a range of services to help you achieve your publishing
                goals, including:
              </Text>
              <List spacing={3} mb={4}>
                <ListItem position={"relative"}>
                  <ListIcon
                    as={CheckIcon}
                    position={"absolute"}
                    top={"1"}
                    left={"0"}
                  />
                  <Text ml={"6"} fontSize={"sm"}>
                    Editing and proofreading connect: Our team of experienced
                    editors will help you polish your manuscript to perfection,
                    ensuring that your book is free of errors and ready for
                    publication.
                  </Text>
                </ListItem>
                <ListItem position={"relative"}>
                  <ListIcon
                    as={CheckIcon}
                    position={"absolute"}
                    top={"1"}
                    left={"0"}
                  />
                  <Text ml={"6"} fontSize={"sm"}>
                    Formatting: We will format your book for publication,
                    ensuring that it meets industry standards and looks great on
                    any device.
                  </Text>
                </ListItem>
                <ListItem position={"relative"}>
                  <ListIcon
                    as={CheckIcon}
                    position={"absolute"}
                    top={"1"}
                    left={"0"}
                  />
                  <Text ml={"6"} fontSize={"sm"}>
                    Marketing: Our marketing team will help you create a buzz
                    around your book and reach your target audience through
                    social media, email, and other channels.
                  </Text>
                </ListItem>
              </List>
              <GetStarted />
            </Box>
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            mt={{ base: "28", md: "40" }}
          >
            <Box w={["100%", "null", "45%"]}>
              <Image
                alt={"why choose us"}
                fit={"cover"}
                align={"center"}
                h={"auto%"}
                w={"100%"}
                src={"/images/image-3.png"}
              />
            </Box>
            <Box w={["100%", "null", "50%"]} mt={{ base: 10, md: 0 }}>
              <Heading as={"h2"} fontSize={["3xl", "4xl"]}>
                Why Choose Us
              </Heading>
              <Text my={4}>
                There are many reasons why you should choose our publishing
                agency, including:
              </Text>
              <List spacing={3} mb={4}>
                <ListItem position={"relative"}>
                  <ListIcon
                    as={CheckIcon}
                    position={"absolute"}
                    top={"1"}
                    left={"0"}
                  />
                  <Text ml={"6"} fontSize={"sm"}>
                    Experience: Our team of professionals has years of
                    experience in the publishing industry and knows what it
                    takes to make a book successful.
                  </Text>
                </ListItem>
                <ListItem position={"relative"}>
                  <ListIcon
                    as={CheckIcon}
                    position={"absolute"}
                    top={"1"}
                    left={"0"}
                  />
                  <Text ml={"6"} fontSize={"sm"}>
                    Quality: We are committed to delivering high-quality
                    services and ensuring that your book is the best it can be.
                  </Text>
                </ListItem>
                <ListItem position={"relative"}>
                  <ListIcon
                    as={CheckIcon}
                    position={"absolute"}
                    top={"1"}
                    left={"0"}
                  />
                  <Text ml={"6"} fontSize={"sm"}>
                    Support: We are here to support you every step of the way
                    and help you achieve your publishing goals.
                  </Text>
                </ListItem>
                <ListItem position={"relative"}>
                  <ListIcon
                    as={CheckIcon}
                    position={"absolute"}
                    top={"1"}
                    left={"0"}
                  />
                  <Text ml={"6"} fontSize={"sm"}>
                    Transparency: We believe in transparency and honesty and
                    will always keep you informed about the progress of your
                    book.
                  </Text>
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container maxW={"7xl"}>
        <Stack textAlign={"center"}>
          <Heading
            as={"h2"}
            w={"98%"}
            maxW={"2xl"}
            mx={"auto"}
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            What Users Are Saying About Parakletus Publishing
          </Heading>
          <Text maxW={"3xl"} mx={"auto"} my={4} fontSize={"sm"}>
            Don&apos;t just take our word for it - hear from some of our
            satisfied customers! Check out some of our testimonials below to see
            what others are saying about Parakletus Publishing.
          </Text>
        </Stack>
        <Slides />
      </Container>

      <Container maxW={"7xl"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={{ base: "28", md: "40" }}
        >
          <Box w={"100%"} maxW={"400px"}>
            <Image
              alt={"next step"}
              fit={"cover"}
              align={"center"}
              h={"auto%"}
              w={"100%"}
              src={"/images/image-4.png"}
            />
          </Box>
          <Box
            w={["100%", "null", "50%"]}
            mt={{ base: 10, md: 0 }}
            order={{ base: "1", md: "-1" }}
          >
            <Heading
              as={"h2"}
              w={"98%"}
              maxW={"2xl"}
              mx={"auto"}
              fontSize={{ base: "3xl", md: "4xl" }}
            >
              Ready to take the next step in your publishing journey?
            </Heading>
            <Text maxW={"3xl"} mx={"auto"} my={4} fontSize={"sm"}>
              Contact us today to learn more about our services and how we can
              help you achieve your publishing dreams.
            </Text>
            <GetStarted />
          </Box>
        </Flex>
      </Container>
    </main>
  );
}
