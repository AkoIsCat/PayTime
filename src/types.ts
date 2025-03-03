import React, { FormEvent } from 'react';

export interface Children {
  children: React.ReactNode;
}

export interface ButtonType {
  btnType: 'submit' | 'reset';
  onClick?: () => void;
}

export interface ContentsType {
  splash: 0 | 1; // splash 페이지면 1, 아니면 0
}

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
