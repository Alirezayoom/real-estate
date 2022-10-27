import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Test, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { BoVerifies } from "react-icons/go";
import millify from "millify";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerifies,
    externalId,
  },
}) => (
  <Link href={`/Property/${externalId}`} passHref>
    {title}
  </Link>
);

export default Property;
