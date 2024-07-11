import config from "@/config";
const getALlProducts = async () => {
  const products = await fetch(`${config.apiUrl}/api/products`).then((data) =>
    data.json()
  );
  return products;
};
const getProductById = async (id: string) => {
  const product = await fetch(`${config.apiUrl}/api/products/${id}`).then(
    (data) => data.json()
  );
  return product;
};
export { getALlProducts, getProductById };