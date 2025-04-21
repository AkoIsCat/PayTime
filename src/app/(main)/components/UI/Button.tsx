'use client';
import { Button } from '@/components/ui/button';
import { MergeBtnClick } from '@/types';

export default function CustomButton({ btnType, onClick }: MergeBtnClick) {
  const buttonDynamicCss = {
    submit: 'bg-submitBtn w-submitBtn',
    reset: 'bg-resetBtn w-resetBtn',
  };

  return (
    <Button
      type={btnType === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      variant={btnType === 'submit' ? 'default' : 'outline'}
      className={`${buttonDynamicCss[btnType]} h-input`}
    >
      {btnType === 'submit' ? '계산하기' : '초기화'}
    </Button>
  );
}
