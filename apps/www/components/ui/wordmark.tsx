"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import React, { useCallback, useEffect, useRef } from "react";
import { cn } from "@workspace/ui/lib/utils";

export const Wordmark = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-8 lg:gap-12">
        {/* Logo SVG */}
        <div className="flex w-full items-center justify-center overflow-hidden">
          <div className="max-w-full">
            <MagicSVG
              className="h-auto w-full max-w-5xl lg:max-w-5xl xl:max-w-6xl"
              gradientFrom="#95EB00"
              gradientSize={100}
              gradientTo="#E6E44B"
              height={240}
              strokeColor="#2C2C2C"
              width={1166}
            >
              <defs>
                <mask
                  fill="black"
                  height="150"
                  id="path-1-outside-1_76_6"
                  maskUnits="userSpaceOnUse"
                  width="1166"
                  x="0"
                  y="-1"
                >
                  <rect fill="white" height="150" width="1166" y="-1" />
                  <path d="M29.8068 2.54545L67.6619 117.034H69.1534L106.938 2.54545H135.915L84.6364 148H52.108L0.900568 2.54545H29.8068ZM181.423 2.54545V148H155.073V2.54545H181.423ZM209.956 148V2.54545H264.501C275.676 2.54545 285.051 4.48674 292.626 8.36931C300.25 12.2519 306.002 17.697 309.885 24.7045C313.815 31.6648 315.78 39.785 315.78 49.0653C315.78 58.393 313.791 66.4896 309.814 73.3551C305.884 80.1733 300.084 85.4526 292.413 89.1932C284.743 92.8864 275.321 94.733 264.146 94.733H225.297V72.858H260.595C267.129 72.858 272.48 71.9583 276.646 70.1591C280.813 68.3125 283.891 65.6373 285.879 62.1335C287.915 58.5824 288.933 54.2263 288.933 49.0653C288.933 43.9044 287.915 39.5009 285.879 35.8551C283.843 32.1619 280.742 29.3684 276.575 27.4744C272.409 25.5331 267.035 24.5625 260.453 24.5625H236.305V148H209.956ZM285.098 82.0909L321.107 148H291.703L256.334 82.0909H285.098ZM358.713 148H330.588L381.795 2.54545H414.324L465.602 148H437.477L398.628 32.375H397.491L358.713 148ZM359.636 90.9688H436.341V112.134H359.636V90.9688ZM484.761 148V2.54545H511.11V125.912H575.173V148H484.761ZM726.7 42.5312C726.037 36.3286 723.243 31.4991 718.319 28.0426C713.442 24.5862 707.097 22.858 699.285 22.858C693.792 22.858 689.081 23.6866 685.151 25.3438C681.221 27.0009 678.215 29.25 676.131 32.0909C674.048 34.9318 672.983 38.1752 672.935 41.821C672.935 44.8513 673.622 47.4792 674.995 49.7045C676.415 51.9299 678.333 53.8239 680.748 55.3864C683.163 56.9015 685.838 58.1799 688.773 59.2216C691.709 60.2633 694.668 61.1392 697.651 61.8494L711.288 65.2585C716.78 66.5369 722.059 68.2651 727.126 70.4432C732.239 72.6212 736.808 75.3674 740.833 78.6818C744.905 81.9962 748.125 85.9972 750.492 90.6847C752.86 95.3722 754.043 100.865 754.043 107.162C754.043 115.685 751.865 123.189 747.509 129.676C743.153 136.116 736.856 141.158 728.617 144.804C720.426 148.402 710.506 150.202 698.859 150.202C687.542 150.202 677.718 148.45 669.384 144.946C661.098 141.442 654.612 136.329 649.924 129.605C645.284 122.882 642.774 114.69 642.396 105.031H668.319C668.698 110.098 670.26 114.312 673.006 117.673C675.753 121.035 679.327 123.545 683.731 125.202C688.182 126.859 693.153 127.688 698.646 127.688C704.375 127.688 709.394 126.835 713.702 125.131C718.058 123.379 721.468 120.964 723.93 117.886C726.392 114.761 727.647 111.116 727.694 106.949C727.647 103.161 726.534 100.036 724.356 97.5739C722.178 95.0644 719.124 92.9811 715.194 91.3239C711.311 89.6193 706.766 88.1042 701.558 86.7784L685.009 82.517C673.03 79.4394 663.56 74.7756 656.6 68.5256C649.687 62.2282 646.231 53.8712 646.231 43.4545C646.231 34.8845 648.551 27.3797 653.191 20.9403C657.879 14.5009 664.247 9.50568 672.296 5.95454C680.345 2.35605 689.46 0.556813 699.64 0.556813C709.962 0.556813 719.005 2.35605 726.771 5.95454C734.583 9.50568 740.715 14.4536 745.165 20.7983C749.616 27.0956 751.913 34.34 752.055 42.5312H726.7ZM777.534 148V2.54545H803.884V125.912H867.946V148H777.534ZM917.165 2.54545V148H890.815V2.54545H917.165ZM1070.2 51.6222H1043.64C1042.88 47.2661 1041.48 43.4072 1039.45 40.0455C1037.41 36.6364 1034.88 33.7481 1031.85 31.3807C1028.82 29.0133 1025.36 27.2377 1021.48 26.054C1017.64 24.8229 1013.5 24.2074 1009.05 24.2074C1001.14 24.2074 994.136 26.196 988.028 30.1733C981.92 34.1032 977.138 39.8797 973.681 47.5028C970.225 55.0786 968.496 64.3352 968.496 75.2727C968.496 86.3996 970.225 95.7746 973.681 103.398C977.185 110.973 981.967 116.703 988.028 120.585C994.136 124.42 1001.12 126.338 1008.98 126.338C1013.34 126.338 1017.41 125.77 1021.2 124.634C1025.03 123.45 1028.46 121.722 1031.49 119.449C1034.57 117.176 1037.15 114.383 1039.24 111.068C1041.37 107.754 1042.83 103.966 1043.64 99.7045L1070.2 99.8466C1069.21 106.759 1067.05 113.246 1063.74 119.307C1060.47 125.367 1056.19 130.718 1050.88 135.358C1045.58 139.951 1039.38 143.549 1032.27 146.153C1025.17 148.71 1017.29 149.989 1008.62 149.989C995.84 149.989 984.429 147.029 974.391 141.111C964.353 135.192 956.446 126.646 950.67 115.472C944.893 104.297 942.005 90.8977 942.005 75.2727C942.005 59.6004 944.917 46.2008 950.741 35.0739C956.565 23.8996 964.496 15.3532 974.533 9.43465C984.571 3.51609 995.935 0.556813 1008.62 0.556813C1016.72 0.556813 1024.25 1.69318 1031.21 3.9659C1038.17 6.23863 1044.37 9.5767 1049.82 13.9801C1055.26 18.3362 1059.74 23.6866 1063.24 30.0312C1066.79 36.3286 1069.11 43.5256 1070.2 51.6222ZM1094.33 148V2.54545H1188.93V24.6335H1120.68V64.1222H1184.03V86.2102H1120.68V125.912H1189.5V148H1094.33Z" />
                </mask>
              </defs>
              <g id="VIRALSLICE">
                <path
                  d="M29.8068 2.54545L67.6619 117.034H69.1534L106.938 2.54545H135.915L84.6364 148H52.108L0.900568 2.54545H29.8068ZM181.423 2.54545V148H155.073V2.54545H181.423ZM209.956 148V2.54545H264.501C275.676 2.54545 285.051 4.48674 292.626 8.36931C300.25 12.2519 306.002 17.697 309.885 24.7045C313.815 31.6648 315.78 39.785 315.78 49.0653C315.78 58.393 313.791 66.4896 309.814 73.3551C305.884 80.1733 300.084 85.4526 292.413 89.1932C284.743 92.8864 275.321 94.733 264.146 94.733H225.297V72.858H260.595C267.129 72.858 272.48 71.9583 276.646 70.1591C280.813 68.3125 283.891 65.6373 285.879 62.1335C287.915 58.5824 288.933 54.2263 288.933 49.0653C288.933 43.9044 287.915 39.5009 285.879 35.8551C283.843 32.1619 280.742 29.3684 276.575 27.4744C272.409 25.5331 267.035 24.5625 260.453 24.5625H236.305V148H209.956ZM285.098 82.0909L321.107 148H291.703L256.334 82.0909H285.098ZM358.713 148H330.588L381.795 2.54545H414.324L465.602 148H437.477L398.628 32.375H397.491L358.713 148ZM359.636 90.9688H436.341V112.134H359.636V90.9688ZM484.761 148V2.54545H511.11V125.912H575.173V148H484.761ZM726.7 42.5312C726.037 36.3286 723.243 31.4991 718.319 28.0426C713.442 24.5862 707.097 22.858 699.285 22.858C693.792 22.858 689.081 23.6866 685.151 25.3438C681.221 27.0009 678.215 29.25 676.131 32.0909C674.048 34.9318 672.983 38.1752 672.935 41.821C672.935 44.8513 673.622 47.4792 674.995 49.7045C676.415 51.9299 678.333 53.8239 680.748 55.3864C683.163 56.9015 685.838 58.1799 688.773 59.2216C691.709 60.2633 694.668 61.1392 697.651 61.8494L711.288 65.2585C716.78 66.5369 722.059 68.2651 727.126 70.4432C732.239 72.6212 736.808 75.3674 740.833 78.6818C744.905 81.9962 748.125 85.9972 750.492 90.6847C752.86 95.3722 754.043 100.865 754.043 107.162C754.043 115.685 751.865 123.189 747.509 129.676C743.153 136.116 736.856 141.158 728.617 144.804C720.426 148.402 710.506 150.202 698.859 150.202C687.542 150.202 677.718 148.45 669.384 144.946C661.098 141.442 654.612 136.329 649.924 129.605C645.284 122.882 642.774 114.69 642.396 105.031H668.319C668.698 110.098 670.26 114.312 673.006 117.673C675.753 121.035 679.327 123.545 683.731 125.202C688.182 126.859 693.153 127.688 698.646 127.688C704.375 127.688 709.394 126.835 713.702 125.131C718.058 123.379 721.468 120.964 723.93 117.886C726.392 114.761 727.647 111.116 727.694 106.949C727.647 103.161 726.534 100.036 724.356 97.5739C722.178 95.0644 719.124 92.9811 715.194 91.3239C711.311 89.6193 706.766 88.1042 701.558 86.7784L685.009 82.517C673.03 79.4394 663.56 74.7756 656.6 68.5256C649.687 62.2282 646.231 53.8712 646.231 43.4545C646.231 34.8845 648.551 27.3797 653.191 20.9403C657.879 14.5009 664.247 9.50568 672.296 5.95454C680.345 2.35605 689.46 0.556813 699.64 0.556813C709.962 0.556813 719.005 2.35605 726.771 5.95454C734.583 9.50568 740.715 14.4536 745.165 20.7983C749.616 27.0956 751.913 34.34 752.055 42.5312H726.7ZM777.534 148V2.54545H803.884V125.912H867.946V148H777.534ZM917.165 2.54545V148H890.815V2.54545H917.165ZM1070.2 51.6222H1043.64C1042.88 47.2661 1041.48 43.4072 1039.45 40.0455C1037.41 36.6364 1034.88 33.7481 1031.85 31.3807C1028.82 29.0133 1025.36 27.2377 1021.48 26.054C1017.64 24.8229 1013.5 24.2074 1009.05 24.2074C1001.14 24.2074 994.136 26.196 988.028 30.1733C981.92 34.1032 977.138 39.8797 973.681 47.5028C970.225 55.0786 968.496 64.3352 968.496 75.2727C968.496 86.3996 970.225 95.7746 973.681 103.398C977.185 110.973 981.967 116.703 988.028 120.585C994.136 124.42 1001.12 126.338 1008.98 126.338C1013.34 126.338 1017.41 125.77 1021.2 124.634C1025.03 123.45 1028.46 121.722 1031.49 119.449C1034.57 117.176 1037.15 114.383 1039.24 111.068C1041.37 107.754 1042.83 103.966 1043.64 99.7045L1070.2 99.8466C1069.21 106.759 1067.05 113.246 1063.74 119.307C1060.47 125.367 1056.19 130.718 1050.88 135.358C1045.58 139.951 1039.38 143.549 1032.27 146.153C1025.17 148.71 1017.29 149.989 1008.62 149.989C995.84 149.989 984.429 147.029 974.391 141.111C964.353 135.192 956.446 126.646 950.67 115.472C944.893 104.297 942.005 90.8977 942.005 75.2727C942.005 59.6004 944.917 46.2008 950.741 35.0739C956.565 23.8996 964.496 15.3532 974.533 9.43465C984.571 3.51609 995.935 0.556813 1008.62 0.556813C1016.72 0.556813 1024.25 1.69318 1031.21 3.9659C1038.17 6.23863 1044.37 9.5767 1049.82 13.9801C1055.26 18.3362 1059.74 23.6866 1063.24 30.0312C1066.79 36.3286 1069.11 43.5256 1070.2 51.6222ZM1094.33 148V2.54545H1188.93V24.6335H1120.68V64.1222H1184.03V86.2102H1120.68V125.912H1189.5V148H1094.33Z"
                  fill="#292524"
                  mask="url(#path-1-outside-1_76_6)"
                />
              </g>
            </MagicSVG>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MagicSVGProps {
  children: React.ReactNode;
  width: number;
  height: number;
  className?: string;
  gradientSize?: number;
  gradientFrom?: string;
  gradientTo?: string;
  strokeWidth?: number;
  fill?: string;
  strokeColor?: string;
}

export function MagicSVG({
  children,
  width,
  height,
  className,
  gradientSize = 50,
  gradientFrom = "#121212",
  gradientTo = "#FFFFFF",
  strokeWidth = 2,
  fill = "none",
  strokeColor = "#2C2C2C",
}: MagicSVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const animatedX = useMotionValue(-gradientSize * 2);
  const animatedY = useMotionValue(-gradientSize * 2);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (svgRef.current) {
        const { left, top } = svgRef.current.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;
        const newX = clientX - left;
        const newY = clientY - top;

        animate(animatedX, newX, {
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 0.8,
        });

        animate(animatedY, newY, {
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 0.8,
        });
      }
    },
    [animatedX, animatedY]
  );

  const handleMouseLeave = useCallback(() => {
    animate(animatedX, -gradientSize * 2, {
      type: "spring",
      stiffness: 100,
      damping: 30,
    });

    animate(animatedY, -gradientSize * 2, {
      type: "spring",
      stiffness: 100,
      damping: 30,
    });
  }, [animatedX, animatedY, gradientSize]);

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (svgElement) {
      svgElement.addEventListener("mouseenter", handleMouseEnter);
      svgElement.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (svgElement) {
        svgElement.removeEventListener("mouseenter", handleMouseEnter);
        svgElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseEnter, handleMouseLeave, handleMouseMove]);

  useEffect(() => {
    animatedX.set(-gradientSize * 2);
    animatedY.set(-gradientSize * 2);
  }, [gradientSize, animatedX, animatedY]);

  const gradientId = "magic-gradient-wordmark";
  const maskId = "magic-mask-wordmark";

  return (
    <motion.svg
      aria-label="Viral Slice Co. SVG"
      className={cn("cursor-pointer transition-all duration-300", className)}
      fill="none"
      height={height}
      ref={svgRef}
      style={{ maxWidth: "100%", height: "auto" }}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Magic SVG</title>
      <defs>
        <motion.radialGradient
          cx={useMotionTemplate`${animatedX}px`}
          cy={useMotionTemplate`${animatedY}px`}
          gradientUnits="userSpaceOnUse"
          id={gradientId}
          r={gradientSize}
        >
          <stop offset="0%" stopColor={gradientFrom} />
          <stop offset="70%" stopColor={gradientTo} />
          <stop offset="100%" stopColor="transparent" />
        </motion.radialGradient>

        <mask id={maskId}>
          <rect fill="black" height="100%" width="100%" />
          <motion.circle
            cx={useMotionTemplate`${animatedX}px`}
            cy={useMotionTemplate`${animatedY}px`}
            fill="white"
            r={gradientSize}
          />
        </mask>
      </defs>

      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childType = (child as React.ReactElement).type;
          if (
            childType === "defs" ||
            childType === "mask" ||
            childType === "clipPath"
          ) {
            return child;
          }
        }
        return null;
      })}

      <g>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const childType = (child as React.ReactElement).type;
            if (
              childType !== "defs" &&
              childType !== "mask" &&
              childType !== "clipPath"
            ) {
              return React.cloneElement(
                child as React.ReactElement<React.SVGProps<SVGElement>>,
                {
                  stroke: strokeColor,
                  strokeWidth,
                  fill,
                }
              );
            }
          }
          return null;
        })}
      </g>

      <g mask={`url(#${maskId})`}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const childType = (child as React.ReactElement).type;
            if (
              childType !== "defs" &&
              childType !== "mask" &&
              childType !== "clipPath"
            ) {
              return React.cloneElement(
                child as React.ReactElement<React.SVGProps<SVGElement>>,
                {
                  stroke: `url(#${gradientId})`,
                  strokeWidth: strokeWidth + 1,
                  fill,
                }
              );
            }
          }
          return null;
        })}
      </g>
    </motion.svg>
  );
}
