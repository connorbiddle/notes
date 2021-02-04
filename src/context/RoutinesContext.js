import { createContext, useReducer } from "react";

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
  const [routines, dispatch] = useReducer((state, action) => {
    let newRoutines;

    switch (action.type) {
      case "ADD_ROUTINE":
        newRoutines = [...state, action.payload];
        break;
      case "EDIT_ROUTINE":
        newRoutines = [...state];
        const oldRoutineIndex = newRoutines.findIndex(
          routine => routine.id === action.payload.id
        );
        newRoutines[oldRoutineIndex] = action.payload;
        break;
      case "DELETE_ROUTINE":
        newRoutines = [...state].filter(
          routine => routine.id !== action.payload.id
        );
        break;
      default:
        throw new Error("Invalid action.type.");
    }

    localStorage.setItem(LS_KEY, JSON.stringify(newRoutines));
    return newRoutines;
  }, JSON.parse(localStorage.getItem(LS_KEY)) || []);

  const addRoutine = routine => {
    dispatch({
      type: "ADD_ROUTINE",
      payload: routine,
    });
  };

  const editRoutine = routine => {
    dispatch({
      type: "EDIT_ROUTINE",
      payload: routine,
    });
  };

  const deleteRoutine = id => {
    dispatch({
      type: "DELETE_ROUTINE",
      payload: {
        id,
      },
    });
  };

  return (
    <RoutinesContext.Provider
      value={{ routines, addRoutine, editRoutine, deleteRoutine }}
    >
      {children}
    </RoutinesContext.Provider>
  );
};
