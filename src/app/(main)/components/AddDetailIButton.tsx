import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { ClickType } from '@/types';

export default function AddDetailIButton({ onClick }: ClickType) {
  return (
    <Button
      type="button"
      variant="outline"
      className={cn('w-add h-10 bg-white border-black mt-1')}
      onClick={onClick}
    >
      +
    </Button>
  );
}
