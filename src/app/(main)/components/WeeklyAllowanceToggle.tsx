import { useEffect, useState } from 'react';
import { useFormStore } from '@/store/form';

export default function WeeklyAllowanceToggle() {
  const dailyWorkingHours = useFormStore((state) => +state.dailyWorkingHours);
  const weeklyWorkDays = useFormStore((state) => +state.weeklyWorkDays);
  const detailForm = useFormStore((state) => state.detailForm);

  const [selected, setSelected] = useState<'include' | 'exclude'>('exclude');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const { setFormData } = useFormStore();

  useEffect(() => {
    setFormData('weeklyAllowance', selected === 'include' ? true : false);
  }, [selected]);

  useEffect(() => {
    const hasDetailForm = detailForm.length > 0;
    const isEligibleForWHA = !hasDetailForm
      ? (dailyWorkingHours / 60) * weeklyWorkDays >= 15
      : detailForm.reduce((sum, current) => (sum += +current.time), 0) / 60 >=
        15;

    if (isEligibleForWHA) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [dailyWorkingHours, weeklyWorkDays, detailForm]);

  return (
    <div className="flex gap-4 my-2">
      <label
        className={`w-weekly border h-input border-black rounded-md text-sm flex items-center justify-center cursor-pointer ${
          selected === 'include' ? 'bg-selectBtn' : 'bg-white'
        }`}
      >
        <input
          type="radio"
          name="option"
          value="include"
          className="hidden"
          disabled={isButtonDisabled}
          checked={selected === 'include'}
          onChange={() => {
            setSelected('include');
          }}
        />
        포함
      </label>
      <label
        className={`w-weekly h-input border border-black rounded-md text-sm flex items-center justify-center cursor-pointer ${
          selected === 'exclude' ? 'bg-selectBtn' : 'bg-white'
        }`}
      >
        <input
          type="radio"
          name="option"
          value="exclude"
          className="hidden"
          checked={selected === 'exclude'}
          onChange={() => setSelected('exclude')}
        />
        미포함
      </label>
    </div>
  );
}
