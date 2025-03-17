import SelectWorkHours from './SelectWorkHours';
import DetailDaySelect from './DetailDaySelect';

export default function DetailInputForm() {
  return (
    <div className="flex">
      <div className="flex text-sm mx-2 text-center items-center">
        <DetailDaySelect />
        <p className="mx-1 w-days">요일</p>
      </div>
      <SelectWorkHours itemType="time" />
    </div>
  );
}
