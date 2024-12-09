// import { create } from 'zustand';
// import { Input, InputValues } from '@/data/form-data';

// interface InputValuesStore {
//   inputValues: InputValues;
//   setInputValues: (inputValues: InputValues) => void;
//   updateInputValue: (identifier: string, input: Input) => void;
// }


// const useInputValues = create<InputValuesStore>((set) => ({
//     inputValues: {},
//     setInputValues: (inputValues) => {
//     //   localStorage.setItem(localStorageKey, JSON.stringify(inputValues));
//       set((state => { console.log(state, inputValues); return { ...state, inputValues }}));
//     },
//     updateInputValue: (identifier, input) =>
//       set((state) => {
//         const updatedInputValues = { 
//             ...state.inputValues,
//             [identifier]: {
//                 ...state.inputValues[identifier],
//                 [input.name]: input.value,
//             }
//         };

//         console.log(state);
//         console.log(updatedInputValues)
  
//         // localStorage.setItem(localStorageKey, JSON.stringify(updatedInputValues));
  
//         return { ...state, inputValues: updatedInputValues };
//       }),
//   }));

// export const localStorageKey = 'inputValues';
// export default useInputValues;

import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  // @ts-ignore
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearStore;