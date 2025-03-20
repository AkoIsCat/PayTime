import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { DetailDayType } from '@/types';

export default function DetailDaySelect({ getDay }: DetailDayType) {
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  return (
    <Select onValueChange={(value) => getDay(value)}>
      <SelectTrigger
        className={cn(
          '[&>svg]:hidden w-dayInput h-select m-0 p-0 border-b border-t-0 border-l-0 border-r-0 rounded-none border-black flex justify-center'
        )}
      >
        <SelectValue placeholder="선택" className={cn('m-0 p-0 text-[10px]')} />
      </SelectTrigger>
      <SelectContent className={cn('bg-white')}>
        {days.map((item) => (
          <SelectItem key={item} value={item} className={cn('cursor-pointer')}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
