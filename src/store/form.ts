import { create } from 'zustand';

type State = {
  salarySelected: string;
  detailToggle: boolean;
};

type Actions = {
  selectedSalaryOption: (selectedSalary: string) => void;
  detailToggleHandle: () => void;
};

export const useFormStore = create<State & Actions>((set) => ({
  salarySelected: 'month',
  detailToggle: false,
  selectedSalaryOption: (selectedSalary: string) => {
    set({ salarySelected: selectedSalary });
  },
  detailToggleHandle: () => {
    set((state) => ({ detailToggle: !state.detailToggle }));
  },
}));
