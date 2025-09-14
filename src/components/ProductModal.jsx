import React, { useEffect, useState } from "react";
import { getProductDetails } from "../services/api";

function ProductModal({ productId, onClose }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    const loadProduct = async () => {
      try {
        const data = await getProductDetails(productId); // use service
        console.log(data);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  if (!productId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {loading ? (
          <p>Loading product...</p>
        ) : !product ? (
          <p>Product not found.</p>
        ) : (
          <>
            <h2 className="text-2xl font-bold">{product.product_name}</h2>

            <div className="flex gap-2 mt-3 overflow-x-auto">
              {product.map((item) => (
                <img
                  key={item.id}
                  src={item.productpic}
                  alt={item.product_name}
                  className="w-32 h-32 object-cover rounded"
                />
              ))}
            </div>

            <p className="mt-4 text-gray-700">
              {product[0].additional_data?.short_description ||
                "No description available."}
            </p>

            <p className="mt-2 text-green-600 font-bold">
              {product[0].product_var_inventory_lists?.[0]?.currency}{" "}
              {product[0].product_var_inventory_lists?.[0]?.selling_price}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductModal;
