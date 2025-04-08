import { TooltipType } from '@/types';

export default function InfoTooltip({ text }: TooltipType) {
  return (
    <div className="absolute left-full w-44 ml-1 p-2 text-sm border">
      {text}
    </div>
  );
}
