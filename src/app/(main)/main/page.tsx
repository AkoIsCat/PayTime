'use client';
import Background from '@/app/components/Background';
import Contents from '@/app/components/Contents';
import Header from '../components/Header';

import SalaryResultBox from '../components/SalaryResultsBox';
import { FormEvent } from 'react';
import HourlyWageInfo from '../components/HourlyWageInfo';
import WorkDetailsForm from '../components/WorkDetailsForm';

export default function Main() {
  const onSubmit = (
    e: FormEvent<HTMLFormElement>,
    formData: (number | boolean | string)[]
  ) => {
    e.preventDefault();
    console.log('계산하기', formData);
  };

  return (
    <Background>
      <Contents splash={0}>
        <div>
          <Header />
          <HourlyWageInfo year={2025} hourlyWage={10030} />
          <WorkDetailsForm onSubmit={onSubmit} />
          <SalaryResultBox />
          <SalaryResultBox />
          <SalaryResultBox />
        </div>
      </Contents>
    </Background>
  );
}
