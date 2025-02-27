import React from 'react';

export interface Children {
  children: React.ReactNode;
}

export interface ButtonType {
  btnType: 'submit' | 'clear';
  onClick: () => {};
}

export interface ContentsType {
  splash: 0 | 1; // splash 페이지면 1, 아니면 0
}

// Children과 ContentsType을 병합
export type MergeChildrenSplash = Children & ContentsType;
