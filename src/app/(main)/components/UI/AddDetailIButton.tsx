import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useFormStore } from '@/store/form';

export default function AddDetailIButton() {
  const { addDetailForm, clearDailyWorkingHours } = useFormStore();

  return (
    <Button
      type="button"
      variant="outline"
      className={cn('w-full max-w-add h-10 bg-white border-black mt-1')}
      onClick={() => {
        addDetailForm();
        clearDailyWorkingHours();
      }}
    >
      +
    </Button>
  );
}
