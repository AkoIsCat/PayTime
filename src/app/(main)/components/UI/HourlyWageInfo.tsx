import { HourlyWageInfoType } from '@/types';

export default function HourlyWageInfo({
  year,
  hourlyWage,
}: HourlyWageInfoType) {
  return (
    <div className="w-full max-w-contentsWidth mx-auto h-header text-2xl pl-4 bg-slate-400 flex flex-col justify-center">
      <div>{year}년 최저시급은</div>
      <div>{hourlyWage.toLocaleString()}원 입니다.</div>
    </div>
  );
}
