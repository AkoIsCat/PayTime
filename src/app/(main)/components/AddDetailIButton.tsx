import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useFormStore } from '@/store/form';

export default function AddDetailIButton() {
  const { addDetailForm } = useFormStore();

  return (
    <Button
      type="button"
      variant="outline"
      className={cn('w-add h-10 bg-white border-black mt-1')}
      onClick={() => {
        addDetailForm();
      }}
    >
      +
    </Button>
  );
}
