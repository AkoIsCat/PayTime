import FormLabel from './FormLabel';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function HourlyWageForm() {
  return (
    <div>
      <FormLabel htmlFor="work_hours">시급</FormLabel>
      <label className="flex relative flex-col">
        <Input
          type="number"
          id="work_hours"
          name="work_hours"
          className={cn(
            'w-input h-input outline-none pl-2 text-base border bg-white border-black text-right pr-7'
          )}
        />
        <span className="absolute right-0 top-50% -translate-y-50% pr-2">
          원
        </span>
      </label>
    </div>
  );
}
