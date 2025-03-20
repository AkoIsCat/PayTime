import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

import { SalarySelectType } from '@/types';
import { useFormStore } from '@/store/form';

export default function SalarySelectForm({
  type,
  resetToggle,
}: SalarySelectType) {
  const defaultValue = type === 'start' ? 'hour' : 'month';
  const { selectedSalaryOption } = useFormStore((state) => state);
  const { resetForm } = useFormStore();

  const [selectedOption, setSelectedOption] = useState(defaultValue);

  useEffect(() => {
    selectedSalaryOption(selectedOption);
    resetForm();
  }, [selectedOption]);

  return (
    <Select
      value={selectedOption}
      onValueChange={(value) => {
        setSelectedOption(value);
        resetToggle && resetToggle();
      }}
    >
      <SelectTrigger
        className={cn(
          'bg-white border-black border w-select mt-2 h-select rounded-2xl text-center justify-center peer',
          '[&>svg]:hidden'
        )}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent className={cn('bg-white')}>
        {type === 'start' && (
          <SelectItem value="hour" className={cn('cursor-pointer')}>
            시급
          </SelectItem>
        )}
        {type === 'end' && (
          <>
            <SelectItem value="day" className={cn('cursor-pointer')}>
              일급
            </SelectItem>
            <SelectItem value="week" className={cn('cursor-pointer')}>
              주급
            </SelectItem>
            <SelectItem value="month" className={cn('cursor-pointer')}>
              월급
            </SelectItem>
          </>
        )}
      </SelectContent>
    </Select>
  );
}
