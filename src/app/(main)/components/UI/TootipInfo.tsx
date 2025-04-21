import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Children } from '@/types';

export default function TooltipInfo({ children }: Children) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger type="button" className="cursor-default">
          <RiErrorWarningLine className="ml-1" />
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5} className="bg-white">
          {children}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
