import FormLabel from './FormLabel';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useFormStore } from '@/store/form';

export default function HourlyWageForm() {
  const { setFormData } = useFormStore();

  return (
    <div className="my-4">
      <FormLabel htmlFor="work_hours">시급</FormLabel>
      <label className="flex relative flex-col">
        <Input
          type="number"
          id="work_hours"
          name="work_hours"
          placeholder="10030"
          className={cn(
            'w-wage h-input outline-none my-1 pl-2 text-base border rounded-lg bg-white border-black text-right pr-7'
          )}
          onChange={(e) => setFormData('hourlyWage', +e.target.value)}
        />
        <span className="absolute right-2 top-50% -translate-y-50% pr-2">
          원
        </span>
      </label>
    </div>
  );
}
