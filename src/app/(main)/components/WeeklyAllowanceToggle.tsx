import { useEffect, useState } from 'react';
import { useFormStore } from '@/store/form';

export default function WeeklyAllowanceToggle() {
  const [selected, setSelected] = useState<'include' | 'exclude'>('include');
  const { setFormData } = useFormStore();

  useEffect(() => {
    setFormData('weeklyAllowance', selected === 'include' ? true : false);
  }, [selected]);

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
          checked={selected === 'include'}
          onChange={() => setSelected('include')}
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
