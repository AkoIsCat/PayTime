import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { ClickType } from '@/types';

export default function AddDetailIButton({ onClick }: ClickType) {
  return (
    <Button
      variant="outline"
      className={cn('w-input h-input bg-white')}
      onClick={onClick}
    >
      +
    </Button>
  );
}
