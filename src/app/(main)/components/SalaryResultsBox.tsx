import { RiErrorWarningLine } from 'react-icons/ri';
import { ResultsType } from '@/types';
import { useState } from 'react';
import InfoTooltip from './InfoTooltip';

export default function SalaryResultsBox({ resultsType, salary }: ResultsType) {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const hoverIcon = () => {
    setShowTooltip(true);
  };

  const leaveIcon = () => {
    setShowTooltip(false);
  };

  return (
    <div className="flex justify-between w-input p-2 text-xl">
      <div className="flex items-center relative">
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
        {resultsType === 'month' && (
          <RiErrorWarningLine
            className="ml-1"
            onMouseEnter={hoverIcon}
            onMouseLeave={leaveIcon}
          />
        )}
        {showTooltip && (
          <InfoTooltip>
            <div>주휴수당을 포함하지 않은 금액입니다.</div>
          </InfoTooltip>
        )}
      </div>
      <div>
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
