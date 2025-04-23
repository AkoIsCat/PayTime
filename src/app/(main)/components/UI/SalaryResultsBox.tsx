import { ResultsType } from '@/types';
import TooltipInfo from './TootipInfo';

export default function SalaryResultsBox({ resultsType, salary }: ResultsType) {
  return (
    <div className="flex justify-between w-full max-w-input p-2 text-xl">
      <div className="flex items-center relative mx-3">
        <span className="mr-1 inline-block">예상</span>
        <span>
          {resultsType === 'day'
            ? '일급'
            : resultsType === 'WH'
              ? '주휴수당'
              : resultsType === 'week'
                ? '주급'
                : '월급'}
        </span>
        {resultsType === 'WH' && (
          <TooltipInfo>
            <div>주마다 나오는 주휴수당 금액 입니다.</div>
          </TooltipInfo>
        )}
        {resultsType === 'month' && (
          <TooltipInfo>
            <div>주휴수당을 포함하지 않은 금액입니다.</div>
          </TooltipInfo>
        )}
      </div>
      <div className="mx-3">
        <span className="inline-block mr-1">
          {resultsType === 'day'
            ? '일'
            : resultsType === 'WH'
              ? '주휴'
              : resultsType === 'week'
                ? '주'
                : '월'}
        </span>
        <span>{salary.toLocaleString('en-US')}</span>
        <span>원</span>
      </div>
    </div>
  );
}
