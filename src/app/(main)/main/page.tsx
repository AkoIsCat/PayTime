'use client';
import Background from '@/app/components/Background';
import Contents from '@/app/components/Contents';
import HourlyWageForm from '../components/HourlyWageForm';
import SelectWorkHours from '../components/SelectWorkHours';
import DetailHoursToggle from '../components/DetailHoursToggle';
import CustomButton from '../components/Button';
import SalaryResultsBox from '../components/SalaryResultsBox';
import SalarySelectForm from '../components/SalarySelectForm';
import AddDetailIButton from '../components/AddDetailIButton';
import DetailInputForm from '../components/DetailInputForm';
import WeeklyAllowanceToggle from '../components/WeeklyAllowanceToggle';

export default function Main() {
  return (
    <Background>
      <Contents splash={0}>
        <div>
          <HourlyWageForm />
          <SalarySelectForm type="start" />
          <SalarySelectForm type="end" />
          <DetailInputForm />
          <DetailHoursToggle>상세하게 입력</DetailHoursToggle>
          <SelectWorkHours itemType="time" />
          <DetailHoursToggle>상세하게 입력</DetailHoursToggle>
          <SelectWorkHours itemType="day" />
          <DetailHoursToggle>상세하게 입력</DetailHoursToggle>
          <SelectWorkHours itemType="tax" />
          <WeeklyAllowanceToggle />
        </div>
        <AddDetailIButton onClick={() => console.log('+')} />
        <CustomButton
          btnType="submit"
          onClick={() => console.log('계산하기')}
        />
        <CustomButton btnType="reset" onClick={() => console.log('초기화')} />
        <SalaryResultsBox resultsType="day" salary={100000} />
        <SalaryResultsBox resultsType="WH" salary={100000} />
        <SalaryResultsBox resultsType="week" salary={100000} />
        <SalaryResultsBox resultsType="month" salary={100000} />
      </Contents>
    </Background>
  );
}
