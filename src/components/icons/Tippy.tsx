import * as React from 'react';
import { Tooltip as TippyTooltip, TooltipProps } from 'react-tippy';

type TooltipTextProps = {
  content?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  spanClassName?: string;
  withUnderline?: boolean;
} & TooltipProps &
  Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>;

export default function Tooltip({
  content,
  children,
  className,
  spanClassName,
  withUnderline = false,
  ...rest
}: TooltipTextProps) {
  return (
    <TippyTooltip
      title='hai'
      trigger='mouseenter'
      interactive
      html={
        <div
          className='inline-block rounded-md bg-white p-2 text-gray-600 shadow-md dark:bg-dark dark:text-gray-200'
        >
          {content}
        </div>
      }
      {...rest}
    >
    </TippyTooltip>
  );
}
