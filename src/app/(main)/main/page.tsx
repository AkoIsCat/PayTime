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
import Footer from '../components/Footer';
import WeeklyAllowanceToggle from '../components/WeeklyAllowanceToggle';
import Header from '../components/Header';
import HourlyWageInfo from '../components/HourlyWageInfo';
import FormLabel from '../components/FormLabel';
import { BsArrowRight } from 'react-icons/bs';

export default function Main() {
  return (
    <Background>
      <Contents splash={0}>
        <Header />
        <HourlyWageInfo year={2025} hourlyWage={10030} />
        <form className="w-full p-5">
          <div className="flex justify-around">
            <SalarySelectForm type="start" />
            <BsArrowRight size={26} />
            <SalarySelectForm type="end" />
          </div>
          <HourlyWageForm />
          <div className="my-4">
            <FormLabel htmlFor="dayWorkTime">일일 근무시간</FormLabel>
            <DetailHoursToggle>상세하게 입력</DetailHoursToggle>
            <SelectWorkHours itemType="time" />
          </div>
          <div className="my-4">
            <FormLabel htmlFor="weekWork">일주 근무일수</FormLabel>
            <DetailHoursToggle>상세하게 입력</DetailHoursToggle>
            <SelectWorkHours itemType="day" />
          </div>
          <div className="my-4">
            <FormLabel htmlFor="WH">주휴수당</FormLabel>
            <WeeklyAllowanceToggle />
          </div>
          <div className="my-4">
            <FormLabel htmlFor="dayWorkTime">월 연장 근무시간</FormLabel>
            <SelectWorkHours itemType="overTime" />
          </div>
          <div className="my-4">
            <FormLabel htmlFor="weekWork">월 야간 근무시간</FormLabel>
            <SelectWorkHours itemType="nightShift" />
          </div>
          <div className="my-4">
            <FormLabel htmlFor="weekWork">월 휴일 근무시간</FormLabel>
            <SelectWorkHours itemType="holiday" />
          </div>
          <div className="my-4">
            <FormLabel htmlFor="tax">세금</FormLabel>
            <SelectWorkHours itemType="tax" />
          </div>
          <div className="flex justify-between">
            <CustomButton
              btnType="submit"
              onClick={() => console.log('계산하기')}
            />
            <CustomButton
              btnType="reset"
              onClick={() => console.log('초기화')}
            />
          </div>
        </form>
        <SalaryResultsBox resultsType="day" salary={100000} />
        <SalaryResultsBox resultsType="WH" salary={100000} />
        <SalaryResultsBox resultsType="week" salary={100000} />
        <SalaryResultsBox resultsType="month" salary={100000} />
        <Footer />
      </Contents>
    </Background>
  );
}
