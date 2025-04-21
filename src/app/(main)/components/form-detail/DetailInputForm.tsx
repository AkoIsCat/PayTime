import SelectWorkHours from '../form/SelectWorkHours';
import DetailDaySelect from './DetailDaySelect';

import { MergeDetailId } from '@/types';
import { useEffect, useState } from 'react';
import { useFormStore } from '@/store/form';
import RemoveDetailForm from './RemoveDetailForm';

export default function DetailInputForm({
  id,
  selectDays,
  setSelectedDays,
}: MergeDetailId) {
  const { updateForm } = useFormStore();
  const [value, setValue] = useState<{
    id: string;
    day?: string;
    time?: string;
  }>({ id });

  const dayValue = (day: string) => {
    setValue((state) => ({
      ...state,
      day,
    }));
  };

  const timeValue = (time: string) => {
    setValue((state) => ({
      ...state,
      time,
    }));
  };

  useEffect(() => {
    updateForm(value.id, value.day ?? '', value.time ?? '');
  }, [value]);

  return (
    <div className="flex" id={id}>
      <div className="flex text-sm mx-2 text-center items-center">
        <DetailDaySelect
          id={id}
          getDay={dayValue}
          selectDays={selectDays}
          setSelectedDays={setSelectedDays}
        />
        <p className="mx-1 w-days">요일</p>
      </div>
      <SelectWorkHours
        itemType="time"
        getTime={timeValue}
        componentType="detail"
        id={value.id}
      />
      <RemoveDetailForm
        id={value.id}
        selectDays={selectDays}
        setSelectedDays={setSelectedDays}
      />
    </div>
  );
}
