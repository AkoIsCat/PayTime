import { DetailWorkingTime, SelectType, TaxType } from '@/types';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useFormStore } from '@/store/form';
import useSelectValue from '@/app/hook/useSelectValue';

export default function SelectWorkHours({
  itemType,
  getTime,
  componentType,
  id,
}: SelectType) {
  const { setFormData, clearIsCalculated } = useFormStore();

  const dataTable = {
    time: 'dailyWorkingHours',
    day: 'weeklyWorkDays',
    overTime: 'overTimeWorkingHours',
    nightShift: 'nightWorkingHours',
    holiday: 'holidayWorkingHours',
    tax: 'tax',
  } as const;

  const dataType = dataTable[`${itemType}`];

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

  const selectValue:
    | string
    | DetailWorkingTime[]
    | boolean
    | number
    | { id: string; day: string; time: string } = useSelectValue(
    componentType,
    dataType,
    id
  );

  return (
    <Select
      onValueChange={(value: string) => {
        getTime ? getTime(value) : () => {};
        setFormData(dataType, +value);
        clearIsCalculated();
      }}
      value={`${
        !id
          ? selectValue
          : typeof selectValue === 'object' &&
              selectValue !== null &&
              'time' in selectValue
            ? selectValue.time
            : '0'
      }`}
    >
      <SelectTrigger
        className={cn('bg-white border-black mt-1 hover:bg-selectBtn')}
      >
        <SelectValue
          placeholder={
            itemType === 'time' ||
            itemType === 'overTime' ||
            itemType === 'nightShift' ||
            itemType === 'holiday'
              ? '근무 시간을 선택해주세요'
              : itemType === 'day'
                ? '근무 일수를 선택해주세요'
                : '선택안함'
          }
        />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectItem value="0" className={cn('cursor-pointer')}>
          {itemType === 'time' ||
          itemType === 'overTime' ||
          itemType === 'nightShift' ||
          itemType === 'holiday'
            ? '시간선택'
            : itemType === 'day'
              ? '일수선택'
              : '미적용'}
        </SelectItem>
        {(itemType === 'time' ||
          itemType === 'overTime' ||
          itemType === 'nightShift' ||
          itemType === 'holiday') && // 시간 항목
          workHours.map((item) => (
            <SelectItem
              key={item.toString()}
              value={item.toString()}
              className={cn('cursor-pointer')}
            >
              {`${Math.floor(item / 60)}시간 ${item % 60}분`}
            </SelectItem>
          ))}
        {itemType === 'day' &&
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
