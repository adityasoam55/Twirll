import { useEffect, useState } from "react";
import MenuItemCard from "./MenuItemCard";
import ProductModal from "./ProductModal";
import { getMenuItems } from "../services/api";

function MenuList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const data = await getMenuItems();
        setItems(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setError("Failed to load menu. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="p-6 text-center">Loading menu...</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 mt-16">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-full md:w-1/2 shadow-sm focus:outline-none focus:ring focus:ring-green-300"
        />
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <MenuItemCard
              key={item.product_id}
              item={item}
              onClick={(id) => setSelectedProductId(id)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">
            No items match your search.
          </p>
        )}
      </div>

      {/* Product Modal */}
      {selectedProductId && (
        <ProductModal
          productId={selectedProductId}
          onClose={() => setSelectedProductId(null)}
        />
      )}
    </div>
  );
}

export default MenuList;
