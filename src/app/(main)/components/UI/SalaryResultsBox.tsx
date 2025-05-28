import { ResultsType } from '@/types';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Tooltip } from 'react-tooltip';

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
          <div>
            <a
              data-tooltip-id="WHTooltip"
              data-tooltip-html="<div>주마다 나오는 주휴수당 금액 입니다.</div>"
            >
              <RiErrorWarningLine className="ml-1" />
            </a>
            <Tooltip id="WHTooltip"></Tooltip>
          </div>
        )}
        {resultsType === 'month' && (
          <div>
            <a
              data-tooltip-id="monthTooltip"
              data-tooltip-html="<div>주휴수당을 포함하지 않은 금액입니다.</div>"
            >
              <RiErrorWarningLine className="ml-1" />
            </a>
            <Tooltip id="monthTooltip" place="top"></Tooltip>
          </div>
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
