import { create } from 'zustand';
import { FormType, DetailWorkingTime } from '@/types';

type State = {
  salarySelected: string;
  detailToggle: boolean;
  detailForm: { id: string; day: string; time: string }[];
  dailyWorkingHours: number | DetailWorkingTime[];
  hourlyWage: number | string;
  weeklyAllowance: boolean;
  weeklyWorkDays: number | string;
  tax: number | string;
  overTimeWorkingHours: number | string;
  nightWorkingHours: number | string;
  holidayWorkingHours: number | string;
  isCalculated: boolean;
};

type Actions = {
  selectedSalaryOption: (selectedSalary: string) => void;
  detailToggleHandle: () => void;
  resetToggleHandle: () => void;
  addDetailForm: () => void;
  updateForm: (id: string, day: string, time: string) => void;
  removeForm: (id: string) => void;
  resetForm: () => void;
  changeSalaryType: () => void;
  setFormData: <T extends keyof FormType>(
    section: T,
    data: FormType[T]
  ) => void;
  setIsCalculated: () => void;
  clearIsCalculated: () => void;
};

export const useFormStore = create<State & Actions>((set) => ({
  salarySelected: 'month',
  detailToggle: false,
  detailForm: [],
  dailyWorkingHours: 0,
  hourlyWage: '',
  weeklyAllowance: false,
  weeklyWorkDays: 0,
  tax: 0,
  overTimeWorkingHours: 0,
  nightWorkingHours: 0,
  holidayWorkingHours: 0,
  isCalculated: false,
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
  // 폼 초기화 액션
  resetForm: () => {
    set({
      detailForm: [],
      dailyWorkingHours: 0,
      hourlyWage: '',
      weeklyAllowance: false,
      weeklyWorkDays: '0',
      tax: '0',
      overTimeWorkingHours: '0',
      nightWorkingHours: '0',
      holidayWorkingHours: '0',
      isCalculated: false,
    });
  },
  // 최저시급을 제외한 모든항목 초기화 액션(급여 타입 변경 시)
  changeSalaryType: () => {
    set({
      detailForm: [],
      dailyWorkingHours: 0,
      weeklyAllowance: false,
      weeklyWorkDays: 0,
      tax: 0,
      overTimeWorkingHours: 0,
      nightWorkingHours: 0,
      holidayWorkingHours: 0,
      isCalculated: false,
    });
  },
  setFormData: <T extends keyof FormType>(section: T, data: FormType[T]) => {
    set((state) => ({
      ...state,
      [`${section}`]: data,
    }));
  },
  setIsCalculated: () => {
    set({ isCalculated: true });
  },
  clearIsCalculated: () => {
    set({ isCalculated: false });
  },
}));

// state[`${section}`]:
//         ...state[`${section}`],
//         [section]: data,
//       },
