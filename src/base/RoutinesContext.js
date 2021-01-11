import { createContext, useState } from "react";

const LS_KEY = "notes-routines-v1";

export const RoutinesContext = createContext();

// const placeholderRoutines = [
//   {
//     id: 0,
//     title: "Main Routine",
//     tasks: [
//       {
//         id: 0,
//         name: "Minor Pentatonic Scale",
//         duration: 300,
//       },
//       {
//         id: 1,
//         name: "Open Chords",
//         duration: 600,
//       },
//       {
//         id: 2,
//         name: "Song Practice",
//         duration: 1800,
//       },
//     ],
//   },
//   {
//     id: 1,
//     title: "Routine 2",
//     tasks: [
//       {
//         id: 0,
//         name: "Major Scale",
//         duration: 300,
//       },
//       {
//         id: 1,
//         name: "Barre Chords",
//         duration: 900,
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Routine 3",
//     tasks: [
//       {
//         id: 0,
//         name: "Chromatic Scale",
//         duration: 300,
//       },
//       {
//         id: 1,
//         name: "Sweep Picking",
//         duration: 600,
//       },
//       {
//         id: 2,
//         name: "Legato",
//         duration: 1800,
//       },
//       {
//         id: 3,
//         name: "Pentatonic Blues Licks",
//         duration: 2700,
//       },
//     ],
//   },
// ];

export const RoutinesProvider = ({ children }) => {
  const [routines, setRoutineState] = useState(
    JSON.parse(localStorage.getItem(LS_KEY)) || []
  );

  const setRoutines = newRoutineList => {
    setRoutineState(newRoutineList);
    localStorage.setItem(LS_KEY, JSON.stringify(newRoutineList));
  };

  return (
    <RoutinesContext.Provider value={[routines, setRoutines]}>
      {children}
    </RoutinesContext.Provider>
  );
};
