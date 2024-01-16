import getBillboard from "@/actions/billboards";
import getProducts from "@/actions/products";
import Billboard from "@/components/Billboard";
import Container from "@/components/Container";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

export default async function Home() {
  const billboard = await getBillboard("81f7d8c5-b3db-41ab-80b0-415aff143250");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title='Featured Products' items={products} />
      </div>
      </div>
    </Container>
  );
}
