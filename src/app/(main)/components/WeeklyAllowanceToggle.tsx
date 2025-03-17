import { useState } from 'react';

export default function WeeklyAllowanceToggle() {
  const [selected, setSelected] = useState<'include' | 'exclude'>('include');

  return (
    <div className="flex gap-4">
      <label
        className={`w-weekly border h-select border-black rounded-md text-sm text-center cursor-pointer ${
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
        className={`w-weekly h-select border border-black rounded-md text-sm text-center cursor-pointer ${
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
