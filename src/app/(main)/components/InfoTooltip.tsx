import {  Children } from '@/types';

export default function InfoTooltip({ children }: Children) {
  return (
    <div className="absolute left-full w-44 ml-1 p-2 text-sm border bg-white">
      {children}
    </div>
  );
}
