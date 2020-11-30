import { createContext } from "react";

export const RoutinesContext = createContext();

const placeholderRoutines = [
  {
    id: 0,
    title: "Main Routine",
    tasks: [
      {
        name: "Minor Pentatonic Scale",
        duration: 300,
      },
      {
        name: "Chords",
        duration: 600,
      },
      {
        name: "Song Practice",
        duration: 1800,
      },
    ],
  },
  {
    id: 1,
    title: "Routine 2",
    tasks: [
      {
        name: "Minor Pentatonic Scale",
        duration: 300,
      },
      {
        name: "Chords",
        duration: 600,
      },
      {
        name: "Song Practice",
        duration: 1800,
      },
    ],
  },
  {
    id: 2,
    title: "Routine 3",
    tasks: [
      {
        name: "Minor Pentatonic Scale",
        duration: 300,
      },
      {
        name: "Chords",
        duration: 600,
      },
      {
        name: "Song Practice",
        duration: 1800,
      },
    ],
  },
];

export const RoutinesProvider = ({ children }) => (
  <RoutinesContext.Provider value={placeholderRoutines}>
    {children}
  </RoutinesContext.Provider>
);
