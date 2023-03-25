import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Stack,
  Icon,
  Heading,
  DrawerBody,
  FormControl,
  Input,
  FormHelperText,
  Button,
  Container,
} from "@chakra-ui/react";
import { BiLogIn } from "react-icons/bi";

const LoginInput = ({ type, placeholder }) => (
  <Input
    m={2}
    borderRadius={0}
    borderStyle="solid"
    borderWidth="medium"
    borderColor="#19A7CE"
    type={type}
    placeholder={placeholder}
  />
);

const LoginDrawer = ({ isOpen, onOpen, onClose }) => (
  <Drawer
    isOpen={isOpen}
    onClose={onClose}
    placement="right"
    size={{ base: "full", md: "lg" }}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <Container p={10} alignItems="center" justifyContent="center" maxW="lg" minH={"100vh"}>
        <DrawerHeader>
          <Stack direction="column">
            <Icon as={BiLogIn} fontSize="5xl" color="#146C94" />
            <Heading as="h2" variant="landing-mini-title">
              Login to online account
            </Heading>
          </Stack>
        </DrawerHeader>

        <DrawerBody height="100%">
          <FormControl>
            <LoginInput type="string" placeholder="User Id" />
            <LoginInput type="password" placeholder="Password" />
            <FormHelperText></FormHelperText>
            <Button
              bg="#19A7CE"
              color="#F6F1F1"
              position="absolute"
              right={0}
              borderRadius={0}
              _hover={{
                color: "#19A7CE",
                bg: "#F6F1F1",
                borderStyle: "solid",
                borderColor: "#19A7CE",
              }}
              type="submit"
            >
              Login
            </Button>
          </FormControl>
        </DrawerBody>
      </Container>
    </DrawerContent>
  </Drawer>
);

export default LoginDrawer;
