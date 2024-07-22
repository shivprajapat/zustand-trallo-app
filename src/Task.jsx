/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useStore } from "./store/useStore";
import { DeleteIcon } from "@chakra-ui/icons";

const Task = ({ item }) => {
  const { title } = item;
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const deleteTask = useStore((store) => store.deleteTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const btnColor =
    task.state === "planned"
      ? "gray"
      : task.state === "ongoing"
      ? "orange"
      : task.state === "done"
      ? "green"
      : "";
  const [trashBtn, setTrashBtn] = useState(false);
  return (
    <Box
      padding="20px"
      borderRadius="5px"
      bg="white"
      draggable
      onDragStart={() => setDraggedTask(task.title)}
      onMouseOver={() => setTrashBtn(true)}
      onMouseLeave={() => setTrashBtn(false)}
    >
      <Text
        textTransform="capitalize"
        marginBottom="20px"
        fontSize="md"
        color="pink.800"
      >
        {title}
      </Text>
      <Flex justifyContent="space-between" alignItems="start">
        <IconButton
          colorScheme="red"
          size="sm"
          icon={<DeleteIcon />}
          onClick={() => deleteTask(task.title)}
          style={{ visibility: trashBtn ? "visible" : "hidden" }}
        />
        <Box minWidth="100px" textAlign="right">
          <Button
            colorScheme={btnColor}
            size="sm"
            textTransform="capitalize"
            fontWeight="600"
          >
            {task.state}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Task;
