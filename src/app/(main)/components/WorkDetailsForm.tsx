import WorkHoursForm from './WorkHoursForm';
import WeeklyAllowanceToggle from './WeeklyAllowanceToggle';
import HourlyRateForm from './HourlyRateForm';
import TaxSelectionForm from './TaxSelectionForm';
import CustomButton from './Button';
import { WorkFormType } from '@/types';
import { FormEvent } from 'react';

export default function WorkDetailsForm({ onSubmit }: WorkFormType) {
  const formData = ['a', 'v', 0, 1000, false];

  return (
    <form onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e, formData)}>
      <div>시급</div>
      <WorkHoursForm />
      <WorkHoursForm />
      <WeeklyAllowanceToggle />
      <HourlyRateForm />
      <HourlyRateForm />
      <HourlyRateForm />
      <TaxSelectionForm />
      <div>
        <CustomButton btnType="submit" />
        <CustomButton btnType="reset" onClick={() => console.log('초기화')} />
      </div>
    </form>
  );
}
