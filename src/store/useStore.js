import { create } from "zustand";
import { persist } from "zustand/middleware"; // localStorage use
const store = (set) => ({
  tasks: [{ title: "Test Task 1", state: "planned" }],
  draggedTask: null,
  addTask: (title, state) => {
    set((store) => ({
      tasks: [...store.tasks, { title, state }],
    }));
  },
  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, state) =>
    set((store)=>({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      )
    })),
});

export const useStore = create(persist(store, { name: "zustand" }));
