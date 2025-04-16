import { MergeChildrenFor } from '@/types';
import TaxTooltip from './TaxTooltip';
import TooltipInfo from './TootipInfo';

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
          <TooltipInfo>
            <div>
              야간/휴일 근무시간은 해당 일일 근무시간에서 시간을 제외해주세요.
            </div>
          </TooltipInfo>
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
