// import { cva, type VariantProps } from 'class-variance-authority';
// import {
//   motion,
//   MotionProps,
//   MotionValue,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from 'framer-motion'; // Corrected the import for 'motion'
// import React, { PropsWithChildren, useRef } from 'react';

// import { cn } from '@/lib/utils';

// export interface DockProps extends VariantProps<typeof dockVariants> {
//   className?: string;
//   iconSize?: number;
//   iconMagnification?: number;
//   iconDistance?: number;
//   direction?: 'top' | 'middle' | 'bottom';
//   children: React.ReactNode;
// }

// const DEFAULT_SIZE = 40;
// const DEFAULT_MAGNIFICATION = 60;
// const DEFAULT_DISTANCE = 140;

// const dockVariants = cva(
//   'supports-backdrop-blur:bg-black/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md',
// );

// const Dock = React.forwardRef<HTMLDivElement, DockProps>(
//   (
//     {
//       className,
//       children,
//       iconSize = DEFAULT_SIZE,
//       iconMagnification = DEFAULT_MAGNIFICATION,
//       iconDistance = DEFAULT_DISTANCE,
//       direction = 'middle',
//       ...props
//     },
//     ref,
//   ) => {
//     const mouseX = useMotionValue(Infinity);

//     const renderChildren = () => {
//       return React.Children.map(children, (child) => {
//         if (React.isValidElement(child) && child.type === DockIcon) {
//           return React.cloneElement(child, {
//             ...child.props,
//             mouseX: mouseX,
//             size: iconSize,
//             magnification: iconMagnification,
//             distance: iconDistance,
//           });
//         }
//         return child;
//       });
//     };

//     return (
//       <motion.div
//         ref={ref}
//         onMouseMove={(e) => mouseX.set(e.pageX)}
//         onMouseLeave={() => mouseX.set(Infinity)}
//         {...props}
//         className={cn(dockVariants({ className }), {
//           'items-start': direction === 'top',
//           'items-center': direction === 'middle',
//           'items-end': direction === 'bottom',
//         })}
//       >
//         {renderChildren()}
//       </motion.div>
//     );
//   },
// );

// Dock.displayName = 'Dock';

// export interface DockIconProps
//   extends Omit<MotionProps & React.HTMLAttributes<HTMLDivElement>, 'children'> {
//   size?: number;
//   magnification?: number;
//   distance?: number;
//   mouseX?: MotionValue<number>;
//   className?: string;
//   children?: React.ReactNode;
//   props?: PropsWithChildren;
// }

// const DockIcon = ({
//   size = DEFAULT_SIZE,
//   magnification = DEFAULT_MAGNIFICATION,
//   distance = DEFAULT_DISTANCE,
//   mouseX,
//   className,
//   children,
//   ...props
// }: DockIconProps) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const padding = Math.max(6, size * 0.2);
//   const defaultMouseX = useMotionValue(Infinity);

//   const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
//     const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
//     return val - bounds.x - bounds.width / 2;
//   });

//   const sizeTransform = useTransform(
//     distanceCalc,
//     [-distance, 0, distance],
//     [size, magnification, size],
//   );

//   const scaleSize = useSpring(sizeTransform, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       style={{ width: scaleSize, height: scaleSize, padding }}
//       className={cn(
//         'flex aspect-square cursor-pointer items-center justify-center rounded-full',
//         className,
//       )}
//       {...props}
//     >
//       {children}
//     </motion.div>
//   );
// };

// DockIcon.displayName = 'DockIcon';

// export { Dock, DockIcon, dockVariants };

// import { CalendarIcon, MailIcon } from 'lucide-react'; // Removed unused imports
// import Link from 'next/link';
// import React from 'react';

// import { ModeToggle } from '@/components/mode-toggle';
// import { buttonVariants } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from '@/components/ui/tooltip';
// import { cn } from '@/lib/utils';
// import { Dock, DockIcon } from '@/components/magicui/dock';

// export type IconProps = React.HTMLAttributes<SVGElement>;

// const Icons = {
//   calendar: (props: IconProps) => <CalendarIcon {...props} />,
//   email: (props: IconProps) => <MailIcon {...props} />,
//   linkedin: (props: IconProps) => (
//     <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
//       <title>LinkedIn</title>
//       <path
//         fill="currentColor"
//         d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
//       />
//     </svg>
//   ),
//   x: (props: IconProps) => (
//     <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
//       <title>X</title>
//       <path
//         fill="currentColor"
//         d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
//       />
//     </svg>
//   ),
//   youtube: (props: IconProps) => (
//     <svg
//       width="32px"
//       height="32px"
//       viewBox="0 0 32 32"
//       fill="currentColor"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <title>youtube</title>
//       <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z" />
//     </svg>
//   ),
//   github: (props: IconProps) => (
//     <svg viewBox="0 0 438.549 438.549" {...props}>
//       <path
//         fill="currentColor"
//         d="M216.616 0c-119.332 0-216.616 97.283-216.616 216.616 0 95.939 61.84 177.208 147.264 206.314 10.751 1.977 14.612-4.679 14.612-10.385 0-5.107-.172-18.68-.254-36.679-59.523 12.946-72.015-28.626-72.015-28.626-9.723-24.68-23.739-31.273-23.739-31.273-19.345-13.217 1.416-12.982 1.416-12.982 21.417 1.506 32.615 22.028 32.615 22.028 19.02 32.386 50.108 23.043 62.17 17.638 1.944-13.826 7.441-23.043 13.694-28.345-50.835-5.774-104.928-25.745-104.928-114.359 0-25.215 9.004-45.914 23.73-62.139-2.373-5.773-10.181-29.091 1.697-60.514 0 0 19.499-6.245 63.79 23.793 18.585-5.172 38.451-7.77 58.103-7.853 19.705.08 39.448 2.618 58.029 7.793 44.285-30.036 63.774-23.79 63.774-23.79 11.879 31.431 4.08 54.741 1.698 60.514 14.725 16.225 23.73 36.924 23.73 62.139 0 88.709-54.136 108.553-104.971 114.326 7.592 6.647 14.352 19.74 14.352 40.698 0 29.354-.273 53.006-.273 60.015 0 5.707 3.888 12.395 14.634 10.417 85.354-29.107 147.248-110.44 147.248-206.314 0-119.332-97.283-216.616-216.616-216.616z"
//       />
//     </svg>
//   ),
// };

// export function MagicUI() {
//   return (
//     <div className="px-4 py-8">
//       <Dock>
//         <DockIcon>
//           <Icons.github className="w-7 h-7" />
//         </DockIcon>
//         <DockIcon>
//           <Icons.youtube className="w-7 h-7" />
//         </DockIcon>
//         <DockIcon>
//           <Icons.linkedin className="w-7 h-7" />
//         </DockIcon>
//       </Dock>
//     </div>
//   );
// }
