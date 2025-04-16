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

  // 연장, 야간, 휴일은 시급의 1.5배 o
  // 야간, 휴일 근무시간 입력 시 일일 근무시간에서 해당되는 시간은 제외 후 입력해야함 o
  // 전부 야간(휴일) 근무 시 일일 근무시간 0으로 입력. o
  // 일일 근무시간이 0일 경우 야간(휴일) 근무시간이 입력되어 있지 않으면 경고창 띄우기 o
  // 세금도 급여에서 계산하기 o
  // 4/8 새벽 ===> 주휴수당 계산 이상함(40시간 미만) o
  // 상세 입력 시 주휴수당은 모든 요일의 시간을 더한 후 근무 일수를 나누고 시급을 곱함 o
  // 상세 입력 폼에서도 마찬가지. 해당 근무 요일의 시간을 조정해야함. o
  // 근무시간 입력 폼에서 ! 아이콘으로 야간/휴일 근무시간은 해당 일일 근무시간에서 시간을 제외하도록 표기(물론 상세폼도 표기) o
  // 월급 계산 시 주휴수당을 포함하지 않은 금액이라고 안내 ! o
  // 주 근무 15시간 이상시에만 주휴수당 포함버튼 활성화 되도록 수정 o
  // 폼 데이터 변경시 주휴수당 여부가 true일 시 false로 초기화해주는 액션함수 필요할듯 => 이미 false면 아무런 반응이 없도록 구현. o
  // 세금 툴팁으로 어떤 종류가 있는지 표시하기(알바천국, 알바몬 참고) ! o
  // 툴팁 렌더링 시 월급과 폼 부분에서 위치 조정이 필요함 o

  // 시급 -> 월급 이부분 정렬 안맞는 부분 맞추기
  // 주간 근무시간을 야간 근무 시간 전까지로 범위를 지정해놓고, 야간 근무시간도 해당 근무 범위 만큼만 렌더링 할 지 고민해볼것.
  // 그러려면 주간 근무시간/야간 근무시간/휴일, 연장 근무시간 이렇게 배열을 3개로 생성해야 할듯.
 // 상세 입력 시 요일 및 시간을 모두 입력해주셔야합니다.
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
