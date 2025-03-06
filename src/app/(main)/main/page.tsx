import Background from '@/app/components/Background';
import Contents from '@/app/components/Contents';
import HourlyWageForm from '../components/HourlyWageForm';
import SelectWorkHours from '../components/SelectWorkHours';
import DetailHoursToggle from '../components/DetailHoursToggle';

export default function Main() {
  return (
    <Background>
      <Contents splash={0}>
        <div>
          <HourlyWageForm />
          <DetailHoursToggle>상세하게 입력</DetailHoursToggle>
          <SelectWorkHours itemType="time" />
          <DetailHoursToggle>상세하게 입력</DetailHoursToggle>
          <SelectWorkHours itemType="day" />
          <DetailHoursToggle>상세하게 입력</DetailHoursToggle>
          <SelectWorkHours itemType="tax" />
        </div>
      </Contents>
    </Background>
  );
}
