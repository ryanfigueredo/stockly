"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { DayTotalRevenueDto } from "@/app/_data-access/dashboard/getDashboard";

const chartConfig = {
  totalRevenue: {
    label: "Receita",
  },
} satisfies ChartConfig;

interface RevenueChartProps {
  data: DayTotalRevenueDto[];
}

const RevenueChart = ({ data }: RevenueChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-0 w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="totalRevenue" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default RevenueChart;
