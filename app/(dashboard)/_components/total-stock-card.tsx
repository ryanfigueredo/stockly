import { CircleDollarSign } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { getTotalStock } from "@/app/_data-acess/dashboard/get-total-stock";

const TotalStockCard = () => {
  const totalStock = getTotalStock();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <CircleDollarSign />
      </SummaryCardIcon>
      <SummaryCardTitle>Estoque total</SummaryCardTitle>
      <SummaryCardValue>{totalStock}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TotalStockCard;
