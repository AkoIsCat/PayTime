import React, { FormEvent } from 'react';

export interface Children {
  children: React.ReactNode;
}

export interface ClickType {
  onClick: () => void;
}

export interface FormClickType {
  onClick: (e: FormEvent) => void;
}

export interface Id {
  id: string;
}

// 버튼의 필요 type
export interface ButtonType {
  btnType: 'submit' | 'reset'; // 전송 | 초기화
}

// 콘텐츠 영역 필요 type
export interface ContentsType {
  splash: 0 | 1; // splash 페이지면 1, 아니면 0
}

// form 항목들 label의 필요 type
export interface LabelForType {
  htmlFor: string;
  itemType: SelectItem;
}

type SelectItem =
  | 'time'
  | 'day'
  | 'tax'
  | 'overTime'
  | 'nightShift'
  | 'holiday';

// select 아이템의 type
export type SelectType = {
  itemType: SelectItem;
  getTime?: (time: string) => void;
  componentType: 'detail' | 'simple';
  id?: string;
};

// 계산 결과 type
export interface ResultsType {
  resultsType: 'day' | 'week' | 'month' | 'WH'; // WH는 주휴를 뜻함
  salary: number;
}

// 급여 변환 type
export interface SalarySelectType {
  type: 'start' | 'end';
  resetToggle?: () => void;
}

// 세금 타입 종류
export type TaxType = 'FourSocialInsurances' | 'incomeTax'; // 4대보험, 소득세

// Children과 ContentsType을 병합
export type MergeChildrenSplash = Children & ContentsType;

// 최저시급 안내 컴포넌트의 년도와 최저시급 정보 작성
export interface HourlyWageInfoType {
  year: number;
  hourlyWage: number;
}

export interface WorkFormType {
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    formData: (number | boolean | string)[]
  ) => void;
}

export interface FormFieldType {
  label: string;
  hasToggle: boolean;
  itemType: SelectItem;
  onClick?: () => void;
  detailToggle?: boolean;
}

export interface DetailToggleType {
  onClick: () => void;
}

export interface DetailDayType {
  id: string;
  getDay: (day: string) => void;
  setSelectedDays: React.Dispatch<
    React.SetStateAction<{ [id: string]: string }>
  >;
  selectDays: { [id: string]: string };
}

// 일일 근무시간 자세한 입력
export interface DetailWorkingTime {
  id: string;
  day: string;
  time: string;
}

export interface DetailType {
  selectDays: { [id: string]: string };
  setSelectedDays: React.Dispatch<
    React.SetStateAction<{ [id: string]: string }>
  >;
}

export type FormType = {
  dailyWorkingHours: number | DetailWorkingTime[];
  hourlyWage: number;
  weeklyAllowance: boolean;
  weeklyWorkDays: number;
  tax: number;
  overTimeWorkingHours: number;
  nightWorkingHours: number;
  holidayWorkingHours: number;
};

export type TooltipType = {
  text: string;
};

export type MergeChildrenFor = Children & LabelForType;

export type MergeBtnClick = ButtonType & FormClickType;

export type MergeChildrenDetailBtn = Children & DetailToggleType;

export type MergeDetailId = Id & DetailType;
