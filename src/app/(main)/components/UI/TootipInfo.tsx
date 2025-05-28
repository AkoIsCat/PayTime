import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Children } from '@/types';

export default function TooltipInfo({ children }: Children) {
  console.log(children);
  return (  
    <div>
      <a data-tooltip-id="my-tooltip">
        <RiErrorWarningLine />
      </a>
      <ReactTooltip id="my-tooltip">{children}</ReactTooltip>
    </div>
  );
}
