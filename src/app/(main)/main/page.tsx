'use client';
import Background from '@/app/components/Background';
import Contents from '@/app/components/Contents';
import SalaryResultsBox from '../components/UI/SalaryResultsBox';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import HourlyWageInfo from '../components/UI/HourlyWageInfo';
import WorkForm from '../components/form/WorkForm';

import { useFormStore } from '@/store/form';
import { useEffect, useState } from 'react';

export default function Main() {
  const [daySalary, setDaySalary] = useState<number>(0);
  const [weekSalary, setWeekSalary] = useState<number>(0);
  const [WHsalary, setWHsalary] = useState<number>(0);
  const [monthSalary, setMonthSalary] = useState<number>(0);

  const salarySelected = useFormStore((state) => state.salarySelected);
  const dailyWorkingHours = useFormStore((state) => +state.dailyWorkingHours);
  const hourlyWage = useFormStore((state) => +state.hourlyWage);
  const weeklyWorkDays = useFormStore((state) => +state.weeklyWorkDays);
  const weeklyAllowance = useFormStore((state) => +state.weeklyAllowance);
  const detailForm = useFormStore((state) => state.detailForm);
  const tax = useFormStore((state) => +state.tax);
  const nightWorkingHours = useFormStore((state) => +state.nightWorkingHours);
  const holidayWorkingHours = useFormStore(
    (state) => +state.holidayWorkingHours
  );
  const overTimeWokringHours = useFormStore(
    (state) => +state.overTimeWorkingHours
  );

  const isCalculated = useFormStore((action) => action.isCalculated);

  useEffect(() => {
    onClickCalculate();
  }, [isCalculated]);

  const onClickCalculate = () => {
    const detailWorkingHours = detailForm.reduce(
      (sum, current) => (sum += +current.time),
      0
    );

    const overTimeSalary = (overTimeWokringHours / 60) * (hourlyWage * 1.5);
    const nightTimeSalary = (nightWorkingHours / 60) * (hourlyWage * 1.5);
    const holiydaySalary = (holidayWorkingHours / 60) * (hourlyWage * 1.5);
    const weekSalary = // 주급
      detailForm.length > 0
        ? hourlyWage * (detailWorkingHours / 60) // 상세 입력시 계산식
        : hourlyWage * (dailyWorkingHours / 60) * weeklyWorkDays; // 단순 입력시 계산식
    const weekWorkingHours =
      detailForm.length > 0 // detailForm에 배열이 존재할 시
        ? detailWorkingHours / 60
        : (dailyWorkingHours * weeklyWorkDays) / 60;
    const WHA = // 주휴수당
      weekWorkingHours > 40
        ? detailForm.length > 0
          ? (detailWorkingHours / 60 / detailForm.length) * hourlyWage
          : (dailyWorkingHours / 60) * hourlyWage
        : detailForm.length < 0
          ? ((detailWorkingHours * 8) / 40) * hourlyWage
          : ((weekWorkingHours * 8) / 40) * hourlyWage;

    // 일급
    if (salarySelected) {
      const salary = hourlyWage * (dailyWorkingHours / 60);
      setDaySalary(
        salarySelected === 'day'
          ? Math.floor(
              salary + overTimeSalary + nightTimeSalary + holiydaySalary
            )
          : Math.floor(salary)
      );
    }
    // 주휴 & 주급
    if (salarySelected === 'week' || salarySelected === 'month') {
      setWeekSalary(
        salarySelected === 'week'
          ? Math.floor(
              weekSalary + overTimeSalary + nightTimeSalary + holiydaySalary
            )
          : Math.floor(weekSalary)
      );
      setWHsalary(Math.floor(WHA));
    }
    // 월급
    if (salarySelected === 'month') {
      const monthSalary =
        weekSalary * 4.345 + overTimeSalary + nightTimeSalary + holiydaySalary;
      setMonthSalary(Math.floor(monthSalary - monthSalary * (tax / 100)));
    }
  };

  return (
    <Background>
      <Contents splash={0}>
        <Header />
        <HourlyWageInfo year={2025} hourlyWage={10030} />
        <WorkForm />
        {salarySelected && isCalculated && (
          <SalaryResultsBox resultsType="day" salary={daySalary} />
        )}
        {(salarySelected === 'week' || salarySelected === 'month') &&
          !!weeklyAllowance &&
          isCalculated && (
            <SalaryResultsBox resultsType="WH" salary={WHsalary} />
          )}
        {(salarySelected === 'week' || salarySelected === 'month') &&
          isCalculated && (
            <SalaryResultsBox resultsType="week" salary={weekSalary} />
          )}
        {salarySelected === 'month' && isCalculated && (
          <SalaryResultsBox resultsType="month" salary={monthSalary} />
        )}
        <Footer />
      </Contents>
    </Background>
  );
}
