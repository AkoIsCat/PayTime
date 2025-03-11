import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useState } from 'react';

import { SalarySelectType } from '@/types';

export default function SalarySelectForm({ type }: SalarySelectType) {
  const defaultValue = type === 'start' ? 'hour' : 'month';

  const [selectedOption, setSelectedOption] = useState(defaultValue);

  return (
    <Select
      value={selectedOption}
      onValueChange={(value) => setSelectedOption(value)}
    >
      <SelectTrigger
        className={cn(
          'bg-white border-black border w-select h-input rounded-lg text-center justify-center pr-0 peer',
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
            <SelectItem value="hour" className={cn('cursor-pointer')}>
              시급
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
