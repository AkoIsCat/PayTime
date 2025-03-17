import WeeklyAllowanceToggle from './WeeklyAllowanceToggle';
import CustomButton from './Button';
import { WorkFormType } from '@/types';
import { FormEvent } from 'react';

export default function WorkDetailsForm({ onSubmit }: WorkFormType) {
  const formData = ['a', 'v', 0, 1000, false];

  return (
    <form onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e, formData)}>
      <div>시급</div>
      <WeeklyAllowanceToggle />
      <div>
        <CustomButton
          btnType="submit"
          onClick={() => console.log('계산하기')}
        />
        <CustomButton btnType="reset" onClick={() => console.log('초기화')} />
      </div>
    </form>
  );
}
