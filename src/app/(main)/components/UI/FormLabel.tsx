import { MergeChildrenFor } from '@/types';
import TaxTooltip from './TaxTooltip';
import TooltipInfo from './TootipInfo';
import { Tooltip } from 'react-tooltip';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function FormLabel({
  children,
  htmlFor,
  itemType,
}: MergeChildrenFor) {
  return (
    <label className="text-black m-0 text-sm flex " htmlFor={htmlFor}>
      <div className="relative flex items-center">
        <div className="flex items-center">
          <div className="mr-1">{children}</div>
        </div>
        {itemType === 'time' && (
          <div>
            <a
              data-tooltip-id="formTooltip"
              data-tooltip-html="<div>
              야간/휴일 근무시간은 해당 일일 근무시간에서 시간을 제외해주세요.
            </div>"
            >
              <RiErrorWarningLine className="ml-1" />
            </a>
            <Tooltip id="formTooltip"></Tooltip>
          </div>
        )}
        {itemType === 'tax' && (
          <TooltipInfo>
            <TaxTooltip />
          </TooltipInfo>
        )}
      </div>
    </label>
  );
}
