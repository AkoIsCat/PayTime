import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { DetailDayType } from '@/types';

export default function DetailDaySelect({
  id,
  getDay,
  selectDays,
  setSelectedDays,
}: DetailDayType) {
  const days = ['월', '화', '수', '목', '금', '토', '일'];

  // 사용자가 선택중인 요일
  const usedDays = Object.entries(selectDays)
    .filter(([key]) => key !== id)
    .map(([, day]) => day);

  // 사용자가 선택 가능한 요일
  const availableDays = days.filter((d) => !usedDays.includes(d));

  return (
    <Select
      onValueChange={(value) => {
        getDay(value);
        setSelectedDays((prev) => ({ ...prev, [id]: value }));
      }}
    >
      <SelectTrigger
        className={cn(
          '[&>svg]:hidden w-dayInput h-select m-0 p-0 border-b border-t-0 border-l-0 border-r-0 rounded-none border-black flex justify-center'
        )}
      >
        <SelectValue placeholder="선택" className={cn('m-0 p-0 text-[10px]')} />
      </SelectTrigger>
      <SelectContent className={cn('bg-white')}>
        {availableDays.map((item) => (
          <SelectItem key={item} value={item} className={cn('cursor-pointer')}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
