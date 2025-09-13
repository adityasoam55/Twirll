import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TOKEN =
  "cd7ea4a8293465160efa9945e896c4e94d26ce1ff2ad022229ccfc358fbddd4f";

function ProductDetailsPage({}) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(
          `/api/businessinventory/${productId}/public_product_detail.json?access_token=${TOKEN}`
        );

        if (!res.ok) {
          throw new Error(`Failed: ${res.status}`);
        }

        const data = await res.json();
        console.log("Product details:", data);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) return <p className="p-4">Loading product details...</p>;
  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        ← Back to Menu
      </Link>

      <h1 className="text-2xl font-bold">{product.product_name}</h1>

      <div className="flex gap-4 mt-4 flex-wrap">
        {product.product_photos_all?.map((photo, idx) => (
          <img
            key={idx}
            src={photo.photo_url}
            alt={product.product_name}
            className="w-40 h-40 object-cover rounded-lg"
          />
        ))}
      </div>

      <p className="mt-4 text-gray-700">
        {product.additional_data?.short_description ||
          "No description available."}
      </p>

      <p className="mt-2 text-green-600 font-bold">
        {product.product_var_inventory_lists?.[0]?.currency}{" "}
        {product.product_var_inventory_lists?.[0]?.selling_price}
      </p>
    </div>
  );
}

export default ProductDetailsPage;
