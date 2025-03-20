import { create } from 'zustand';

type State = {
  salarySelected: string;
  detailToggle: boolean;
  detailForm: { id: string; day: string; time: string }[];
};

type Actions = {
  selectedSalaryOption: (selectedSalary: string) => void;
  detailToggleHandle: () => void;
  resetToggleHandle: () => void;
  addDetailForm: () => void;
  updateForm: (id: string, day: string, time: string) => void;
  removeForm: (id: string) => void;
  resetForm: () => void;
};

export const useFormStore = create<State & Actions>((set) => ({
  salarySelected: 'month',
  detailToggle: false,
  detailForm: [],
  selectedSalaryOption: (selectedSalary: string) => {
    set({ salarySelected: selectedSalary });
  },
  detailToggleHandle: () => {
    set((state) => ({ detailToggle: !state.detailToggle }));
  },
  resetToggleHandle: () => {
    set({ detailToggle: false });
  },
  addDetailForm: () => {
    set((state) => {
      if (state.detailForm.length >= 7) {
        return state;
      }
      const newValue = { id: Date.now().toString(), day: '', time: '0' };
      return {
        ...state,
        detailForm: [...state.detailForm, newValue],
      };
    });
  },
  updateForm: (id: string, day?: string, time?: string) => {
    set((state) => ({
      ...state,
      detailForm: state.detailForm.map((item) =>
        item.id === id
          ? { ...item, day: day ?? item.day, time: time ?? item.time }
          : item
      ),
    }));
  },
  removeForm: (id: string) => {
    set((state) => ({
      ...state,
      detailForm: state.detailForm.filter((item) => item.id !== id),
    }));
  },
  resetForm: () => {
    set({ detailForm: [] });
  },
}));
