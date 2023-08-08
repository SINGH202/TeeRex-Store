const BASE_URL =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"; // Replace with your API URL

export const fetchProducts = async () => {
  try {
    const response = await fetch(BASE_URL).then((res) => res.json());
    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
