"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Mousewheel } from "swiper/modules";

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

import { BsPersonCircle } from "react-icons/bs";

export default function Slides() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Stack
            bg={"gray.700"}
            w={{ base: "100%", md: "400px", lg: "500px" }}
            p={6}
            borderRadius={"20"}
            my={4}
          >
            <Text>
              I had a fantastic experience working with Parakletus Publishing.
              They are passionate about helping me achieve my publishing goals.
              They provided valuable insights and feedback on the quality of the
              book. I am for rooting for them and would not hesitate to
              recommend Parakletus Publishing to any aspiring author looking for
              a reliable and supportive publishing partner.
            </Text>
            <Flex direction={"row"} alignItems={"flex-start"} gap={4} mt={2}>
              <Icon
                boxSize={6}
                aria-label="Mark Olamilekan"
                as={BsPersonCircle}
              />
              <Flex direction={"column"} alignItems={"flex-start"} gap={1}>
                <Text as={"h3"}>Mark Olamilekan</Text>
                <Text as={"span"}>Author</Text>
              </Flex>
            </Flex>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            bg={"gray.700"}
            w={{ base: "100%", md: "400px", lg: "500px" }}
            p={6}
            borderRadius={"20"}
            my={4}
          >
            <Text>
              Parakletus Publishing has been instrumental in making my
              publishing dreams a reality. Their team of professionals provided
              invaluable support and guidance, helping me navigate the
              intricacies of the publishing industry. They were responsive, and
              thoroughness reached its full potential. I am grateful for their
              expertise.
            </Text>
            <Flex direction={"row"} alignItems={"flex-start"} gap={4} mt={2}>
              <Icon
                boxSize={6}
                aria-label="Henrietta Okoronkwo"
                as={BsPersonCircle}
              />
              <Flex direction={"column"} alignItems={"flex-start"} gap={1}>
                <Text as={"h3"}>Henrietta Okoronkwo</Text>
                <Text as={"span"}>Author</Text>
              </Flex>
            </Flex>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            bg={"gray.700"}
            w={{ base: "100%", md: "400px", lg: "500px" }}
            p={6}
            borderRadius={"20"}
            my={4}
          >
            <Text>
              Working with Parakletus Publishing was a true blessing. Their team
              of dedicated professionals provided exceptional guidance and
              support throughout the publishing process. From editing to cover
              design, they ensured that my book was visually appealing. Their
              attention to detail and commitment to excellence is commendable,
              and I would recommend them any day, any time
            </Text>
            <Flex direction={"row"} alignItems={"flex-start"} gap={4} mt={2}>
              <Icon
                boxSize={6}
                aria-label="Emeka Chigbata"
                as={BsPersonCircle}
              />
              <Flex direction={"column"} alignItems={"flex-start"} gap={1}>
                <Text as={"h3"}>Emeka Chigbata</Text>
                <Text as={"span"}>Author</Text>
              </Flex>
            </Flex>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            bg={"gray.700"}
            w={{ base: "100%", md: "400px", lg: "500px" }}
            p={6}
            borderRadius={"20"}
            my={4}
          >
            <Text>
              The team at Parakletus Publishing is responsive and truly cares
              about the success of their authors. I am grateful to have found
              such a reputable publishing agency.
            </Text>
            <Flex direction={"row"} alignItems={"flex-start"} gap={4} mt={2}>
              <Icon
                boxSize={6}
                aria-label="Sarah Williams"
                as={BsPersonCircle}
              />
              <Flex direction={"column"} alignItems={"flex-start"} gap={1}>
                <Text as={"h3"}>Sarah Williams</Text>
                <Text as={"span"}>Author</Text>
              </Flex>
            </Flex>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            bg={"gray.700"}
            w={{ base: "100%", md: "400px", lg: "500px" }}
            p={6}
            borderRadius={"20"}
            my={4}
          >
            <Text>
              When I published my book &apos;Unlocking Your Potential&apos;, it
              wouldn&apos;t have been possible if not for the unrelenting
              accountability partner that I witnessed all just for me.
              Especially Mr. Evander Ikechukwu who has constantly encouraged me
              to &apos;get that book done&apos;. I must really appreciate the
              Parakletus publishing team for a job well done. The professional
              production was such a pleasure. I would love them to help me with
              publishing my other books over and over again. Kudos to them!
            </Text>
            <Flex direction={"row"} alignItems={"flex-start"} gap={4} mt={2}>
              <Icon
                boxSize={6}
                aria-label="Samuel Chibueze Okonkwo Esq"
                as={BsPersonCircle}
              />
              <Flex direction={"column"} alignItems={"flex-start"} gap={1}>
                <Text as={"h3"}>Samuel Chibueze Okonkwo Esq</Text>
                <Text as={"span"}>Author, Unlocking Your Potential</Text>
              </Flex>
            </Flex>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            bg={"gray.700"}
            w={{ base: "100%", md: "400px", lg: "500px" }}
            p={6}
            borderRadius={"20"}
            my={4}
          >
            <Text>
              I am grateful to Parakletus Publishing for their unwavering
              commitment to excellence. They guided me through every step of the
              publishing process, ensuring that my vision was brought to life.
              Their attention to detail and dedication to high-quality books are
              evident in the final product. I would highly recommend Parakletus
              Publishing to any author seeking a partner that truly understands
              and values their work.
            </Text>
            <Flex direction={"row"} alignItems={"flex-start"} gap={4} mt={2}>
              <Icon
                boxSize={6}
                aria-label="Ajiboye Michael"
                as={BsPersonCircle}
              />
              <Flex direction={"column"} alignItems={"flex-start"} gap={1}>
                <Text as={"h3"}>Ajiboye Michael</Text>
                <Text as={"span"}>Acclaimed Author</Text>
              </Flex>
            </Flex>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            bg={"gray.700"}
            w={{ base: "100%", md: "400px", lg: "500px" }}
            p={6}
            borderRadius={"20"}
            my={4}
          >
            <Text>
              The best decision I took in 2020 was approaching the Parakletus
              Publishing Team for my work. I had a wide range of fiction and
              nonfiction, penned down but didn&apos;t have the courage to
              publish. It seemed like an unobtainable feat. But on discussing
              with these professionals, I made up my mind. They had what it
              takes to make one&apos;s idea come to life. From editing,to
              proofreading, formatting,the designs not to mention the
              breathtaking book review. Parakletus Publishing is simply side by
              side with Professionalism and Perfection.
            </Text>
            <Flex direction={"row"} alignItems={"flex-start"} gap={4} mt={2}>
              <Icon
                boxSize={6}
                aria-label="Mrs. Nnoruka Rita"
                as={BsPersonCircle}
              />
              <Flex direction={"column"} alignItems={"flex-start"} gap={1}>
                <Text as={"h3"}>Mrs. Nnoruka Rita</Text>
                <Text as={"span"}>Author, Creep Under the Carpet</Text>
              </Flex>
            </Flex>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
