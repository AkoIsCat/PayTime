import React from 'react';

export interface Children {
  children: React.ReactNode;
}

export interface ButtonType {
  btnType: 'submit' | 'clear';
  onClick: () => {};
}
