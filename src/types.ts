import React from 'react';

export interface Children {
  children: React.ReactNode;
}

// 버튼의 필요 type
export interface ButtonType {
  btnType: 'submit' | 'reset'; // 전송 | 초기화
  onClick: () => void;
}

// 콘텐츠 영역 필요 type
export interface ContentsType {
  splash: 0 | 1; // splash 페이지면 1, 아니면 0
}

// form 항목들 label의 필요 type
export interface LabelForType {
  htmlFor: string;
}

// select 아이템의 type
export interface SelectType {
  itemType: 'time' | 'day' | 'tax';
}

// 세금 타입 종류
export type TaxType = 'FourSocialInsurances' | 'incomeTax'; // 4대보험, 소득세

// Children과 ContentsType을 병합
export type MergeChildrenSplash = Children & ContentsType;

export type MergeChildrenFor = Children & LabelForType;
