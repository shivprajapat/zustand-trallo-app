/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useStore } from "./store/useStore";
const TaskModal = ({ isOpen, onClose, state }) => {
  const [text, setText] = useState("");
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const addTask = useStore((store) => store.addTask);
  const handleAdd = () => {
    addTask(text, state);
    setText("");
    onClose();
  };
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl mt={4}>
            <FormLabel>Task</FormLabel>
            <Input
              placeholder="enter your task"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleAdd}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskModal;
