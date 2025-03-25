import { create } from 'zustand';
import { FormType, DetailWorkingTime } from '@/types';

type State = {
  salarySelected: string;
  detailToggle: boolean;
  detailForm: { id: string; day: string; time: string }[];
  // formData: FormType;
  dailyWorkingHours: number | DetailWorkingTime[];
  hourlyWage: number;
  weeklyAllowance: boolean;
  weeklyWorkDays: number;
  tax: number;
  overTimeWorkingHours: number;
  nightWorkingHours: number;
  holidayWorkingHours: number;
};

type Actions = {
  selectedSalaryOption: (selectedSalary: string) => void;
  detailToggleHandle: () => void;
  resetToggleHandle: () => void;
  addDetailForm: () => void;
  updateForm: (id: string, day: string, time: string) => void;
  removeForm: (id: string) => void;
  resetForm: () => void;
  setFormData: <T extends keyof FormType>(
    section: T,
    data: FormType[T]
  ) => void;
};

export const useFormStore = create<State & Actions>((set) => ({
  salarySelected: 'month',
  detailToggle: false,
  detailForm: [],
  // formData: {
  //   dailyWorkingHours: 0,
  //   hourlyWage: 0,
  //   weeklyAllowance: false,
  //   weeklyWorkDays: 0,
  //   tax: 0,
  // },
  dailyWorkingHours: 0,
  hourlyWage: 0,
  weeklyAllowance: false,
  weeklyWorkDays: 0,
  tax: 0,
  overTimeWorkingHours: 0,
  nightWorkingHours: 0,
  holidayWorkingHours: 0,
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
    set({
      detailForm: [],
      dailyWorkingHours: 0,
      hourlyWage: 0,
      weeklyAllowance: false,
      weeklyWorkDays: 0,
      tax: 0,
      overTimeWorkingHours: 0,
      nightWorkingHours: 0,
      holidayWorkingHours: 0,
    });
  },
  setFormData: <T extends keyof FormType>(section: T, data: FormType[T]) => {
    set((state) => ({
      ...state,
      [`${section}`]: data,
    }));
  },
}));

// state[`${section}`]:
//         ...state[`${section}`],
//         [section]: data,
//       },
