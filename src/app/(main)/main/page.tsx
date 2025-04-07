'use client';
import Background from '@/app/components/Background';
import Contents from '@/app/components/Contents';
import SalaryResultsBox from '../components/SalaryResultsBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HourlyWageInfo from '../components/HourlyWageInfo';
import WorkForm from '../components/WorkForm';

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

  console.log(detailForm, dailyWorkingHours);

  useEffect(() => {
    onClickCalculate();
  }, [isCalculated]);

  const onClickCalculate = () => {
    const overTimeSalary = (overTimeWokringHours / 60) * (hourlyWage * 1.5);
    const nightTimeSalary = (nightWorkingHours / 60) * (hourlyWage * 1.5);
    const holiydaySalary = (holidayWorkingHours / 60) * (hourlyWage * 1.5);
    const weekSalary = hourlyWage * (dailyWorkingHours / 60) * weeklyWorkDays; // 주급
    const weekWorkingHours = (dailyWorkingHours * weeklyWorkDays) / 60;
    const WHA = // 주휴수당
      weekWorkingHours > 40
        ? (dailyWorkingHours / 60) * hourlyWage
        : ((weekWorkingHours * 8) / 40) * hourlyWage;

    if (salarySelected) {
      const salary = hourlyWage * (dailyWorkingHours / 60);
      setDaySalary(
        salarySelected === 'day'
          ? salary + overTimeSalary + nightTimeSalary + holiydaySalary
          : salary
      );
    }
    if (salarySelected === 'week' || salarySelected === 'month') {
      setWeekSalary(
        salarySelected === 'week'
          ? weekSalary + overTimeSalary + nightTimeSalary + holiydaySalary
          : weekSalary
      );
      setWHsalary(WHA);
    }
    if (salarySelected === 'month') {
      const monthSalary =
        weekSalary * 4 + overTimeSalary + nightTimeSalary + holiydaySalary;
      setMonthSalary(monthSalary - monthSalary * (tax / 100));
    }
  };

  // 연장, 야간, 휴일은 시급의 1.5배 o
  // 야간, 휴일 근무시간 입력 시 일일 근무시간에서 해당되는 시간은 제외 후 입력해야함 o
  // 전부 야간(휴일) 근무 시 일일 근무시간 0으로 입력. o
  // 일일 근무시간이 0일 경우 야간(휴일) 근무시간이 입력되어 있지 않으면 경고창 띄우기 o
  // 상세 입력 폼에서도 마찬가지. 해당 근무 요일의 시간을 조정해야함.
  // 상세 입력 시 주휴수당은 모든 요일의 시간을 더한 후 근무 일수를 나누고 시급을 곱함
  // 세금도 급여에서 계산하기 o
  // 근무시간 입력 폼에서 ! 아이콘으로 야간/휴일 근무시간은 해당 일일 근무시간에서 시간을 제외하도록 유도
  // 월급 계산 시 주휴수당을 포함하지 않은 금액이라고 안내
  // 세금 툴팁으로 어떤 종류가 있는지 표시하기(알바천국, 알바몬 참고)

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
