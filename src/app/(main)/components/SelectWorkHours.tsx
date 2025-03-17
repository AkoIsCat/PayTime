import { SelectType, TaxType } from '@/types';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

export default function SelectWorkHours({ itemType }: SelectType) {
  const workHours: number[] = [];
  for (let i = 30; i <= 1440; i += 30) {
    workHours.push(i);
  }

  const workDays: number[] = [];
  for (let i = 1; i <= 7; i++) {
    workDays.push(i);
  }

  const workTax: { tax: number; type: TaxType }[] = [
    {
      tax: 9.4,
      type: 'FourSocialInsurances',
    },
    {
      tax: 3.3,
      type: 'incomeTax',
    },
  ];

  return (
    <Select>
      <SelectTrigger className={cn('bg-white')}>
        <SelectValue
          placeholder={
            itemType === 'time'
              ? '근무 시간을 선택해주세요'
              : itemType === 'day'
                ? '근무 일수를 선택해주세요'
                : '선택안함'
          }
        />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectItem value="0" className={cn('cursor-pointer')}>
          {itemType === 'time'
            ? '시간선택'
            : itemType === 'day'
              ? '일수선택'
              : '미적용'}
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
        {itemType === 'tax' && // 세금 항목
          workTax.map((item) => (
            <SelectItem
              key={item.type}
              value={item.tax.toString()}
              className={cn('cursor-pointer')}
            >
              {item.tax}%
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}
