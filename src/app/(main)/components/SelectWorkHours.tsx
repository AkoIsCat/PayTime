import { SelectType } from '@/types';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const workHours: number[] = [];
for (let i = 30; i <= 1440; i += 30) {
  workHours.push(i);
}

const workDays: number[] = [];
for (let i = 1; i <= 7; i++) {
  workDays.push(i);
}

// 세금도 추가하기

export default function SelectWorkHours({ itemType }: SelectType) {
  return (
    <Select>
      <SelectTrigger className="bg-white">
        <SelectValue placeholder="근무 시간을 선택해주세요." />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectItem value="0" className={cn('cursor-pointer')}>
          {itemType === 'time' ? '시간선택' : '일수선택'}
        </SelectItem>
        {itemType === 'time' && // 시간 항목
          workHours.map((item) => (
            <SelectItem
              key={item.toString()}
              value={item.toString()}
              className={cn('cursor-pointer')}
            >
              {`${Math.floor(item / 60)}시간 ${item % 60}분`}
            </SelectItem>
          ))}
        {itemType === 'day' && // 일 수 항목
          workDays.map((item) => (
            <SelectItem
              key={item.toString()}
              value={item.toString()}
              className={cn('cursor-pointer')}
            >
              {item}일
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}
