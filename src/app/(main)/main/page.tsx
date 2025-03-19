'use client';
import Background from '@/app/components/Background';
import Contents from '@/app/components/Contents';
import SalaryResultsBox from '../components/SalaryResultsBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HourlyWageInfo from '../components/HourlyWageInfo';
import WorkForm from '../components/WorkForm';

import { useFormStore } from '@/store/form';

export default function Main() {
  const salarySelected = useFormStore((state) => state.salarySelected);

  return (
    <Background>
      <Contents splash={0}>
        <Header />
        <HourlyWageInfo year={2025} hourlyWage={10030} />
        <WorkForm />
        <SalaryResultsBox resultsType="day" salary={100000} />
        <SalaryResultsBox resultsType="WH" salary={100000} />
        <SalaryResultsBox resultsType="week" salary={100000} />
        <SalaryResultsBox resultsType="month" salary={100000} />
        <Footer />
      </Contents>
    </Background>
  );
}
