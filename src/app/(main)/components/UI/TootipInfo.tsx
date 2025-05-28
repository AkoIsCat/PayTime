import { Tooltip as ReactTooltip } from 'react-tooltip';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Children } from '@/types';

export default function TooltipInfo({ children }: Children) {
  return (
    <div>
      <a data-tooltip-id="my-tooltip">
        <RiErrorWarningLine />
      </a>
      <ReactTooltip id="my-tooltip" style={{ maxWidth: '350px' }}>
        {children}
      </ReactTooltip>
    </div>
  );
}
