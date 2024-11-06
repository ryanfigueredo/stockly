import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { cachedGetProducts } from "../_data-acess/product/get-products";
import ProductList from "./_components/procuts-list";

const ProductsPage = async () => {
  await cachedGetProducts();
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-ls font-semibold">Produtos</h2>
        </div>
        <Button className="gap-2">
          <PlusIcon size={20} /> Novo Produto
        </Button>
      </div>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
