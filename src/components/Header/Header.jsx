import React from "react";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsDownload } from "react-icons/bs";

const Header = () => {
  return (
    <Flex justifyContent="space-between">
      <Heading>LOGO</Heading>
      <Flex alignItems="center" justifyContent="center">
        <MenuList>
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
          <MenuItem>4</MenuItem>
        </MenuList>
      </Flex>
      <Button
        type="button"
        variant={"solid"}
        colorScheme="green"
        rightIcon={<BsDownload />}
      >
        RESUME
      </Button>
    </Flex>
  );
};

export default Header;
