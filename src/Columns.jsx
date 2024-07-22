/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Task from "./Task";
import { useStore } from "./store/useStore";
import TaskModal from "./TaskModal";
import { useState } from "react";
const Columns = ({ state }) => {
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [drop, setDrop] = useState(false);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  return (
    <Flex
      style={{ background: drop }}
      height="100%"
      flexDirection="column"
      bg="gray.100"
      padding="20px"
      borderRadius="5px"
      onDragOver={(e) => {
        setDrop(true), e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false), e.preventDefault();
      }}
      onDrop={() => {
        setDrop(true);
        moveTask(draggedTask, state);
        setDraggedTask(null);
      }}
    >
      <Flex
        mb="10px"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="10px"
      >
        <Heading as="h2" size="md" textTransform="uppercase">
          {state}
        </Heading>
        <Button colorScheme="purple" size="sm" onClick={onOpen}>
          Add
        </Button>
      </Flex>
      {/* {tasks.length > 0 ? (
        <Box height="100%" maxH="400px" style={{ overflowY: "scroll" }}>
          <Flex
            flexDirection="column"
            gap="10px"
            border="dashed"
            borderWidth="1px"
            borderColor="gray"
            p={2}
          >
            {tasks.map((item, index) => (
              <Task item={item} key={index} />
            ))}
          </Flex>
        </Box>
      ) : (
        <Text textAlign="center" fontWeight="500" as="p" my="auto">
          No Task Brother 🙁
        </Text>
      )} */}
      <Box height="100%" maxH="400px" style={{ overflowY: "scroll" }}>
        <Flex
          flexDirection="column"
          gap="10px"
          border="dashed"
          borderWidth="1px"
          borderColor="gray"
          p={2}
        >
          {tasks.map((item, index) => (
            <Task item={item} key={index} />
          ))}
        </Flex>
      </Box>

      <TaskModal isOpen={isOpen} onClose={onClose} state={state} />
    </Flex>
  );
};

export default Columns;
