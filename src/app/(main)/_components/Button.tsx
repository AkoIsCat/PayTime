import { Button } from '@/components/ui/button';
import { ButtonType } from '@/types';

export default function CustomButton({ btnType, onClick }: ButtonType) {
  return (
    <Button
      type={btnType === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      variant={btnType === 'submit' ? 'default' : 'outline'}
    >
      {btnType === 'submit' ? '계산하기' : '초기화'}
    </Button>
  );
}
