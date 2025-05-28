import { Tooltip } from 'react-tooltip';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Children } from '@/types';

export default function TooltipInfo({ children }: Children) {
  return (
    <div>
      <a data-tooltip-id="taxTooltip">
        <RiErrorWarningLine />
      </a>
      <Tooltip id="taxTooltip" style={{ maxWidth: '350px' }}>
        {children}
      </Tooltip>
    </div>
  );
}
