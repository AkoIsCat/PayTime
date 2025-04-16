import { RiErrorWarningLine } from 'react-icons/ri';
import InfoTooltip from './InfoTooltip';

import { MergeChildrenFor } from '@/types';
import { useState } from 'react';

export default function FormLabel({
  children,
  htmlFor,
  itemType,
}: MergeChildrenFor) {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const hoverIcon = () => {
    setShowTooltip(true);
  };

  const leaveIcon = () => {
    setShowTooltip(false);
  };
  return (
    <label className="text-black m-0 text-sm flex " htmlFor={htmlFor}>
      <div className="relative flex items-center">
        <div className="flex items-center">
          <div className="mr-1">{children}</div>
          {(itemType === 'tax' || itemType === 'time') && (
            <RiErrorWarningLine
              onMouseEnter={hoverIcon}
              onMouseLeave={leaveIcon}
            />
          )}
        </div>
        {showTooltip && (
          <InfoTooltip>
            <div>
              {itemType === 'time'
                ? '야간/휴일 근무시간은 해당 일일 근무시간에서 시간을 제외해주세요.'
                : '세금 싫어'}
            </div>
          </InfoTooltip>
        )}
      </div>
    </label>
  );
}
