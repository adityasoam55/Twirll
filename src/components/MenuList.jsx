import { useEffect, useState } from "react";
import axios from "axios";
import MenuItemCard from "./MenuItemCard";
import ProductModal from "./ProductModal";

const TOKEN =
  "cd7ea4a8293465160efa9945e896c4e94d26ce1ff2ad022229ccfc358fbddd4f";

function MenuList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await axios.post(
          `/api/businessinventory/get_outlet_menu_items.json?access_token=${TOKEN}`,
          {
            business_location_id: "2029",
            businessprofile_id: "1989",
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        setItems(res.data.items || []);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setError("⚠️ Failed to load menu. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Filtered items for search
  const filteredItems = items.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase())
  );

  //  Loading state
  if (loading) {
    return <p className="p-6 text-center">Loading menu...</p>;
  }

  //  Error state
  if (error) {
    return <p className="p-6 text-center text-red-500">{error}</p>;
  }

  //  Empty state
  if (!loading && items.length === 0) {
    return (
      <p className="p-6 text-center text-gray-500">
        No items available right now.
      </p>
    );
  }

  return (
    <div className="p-6 mt-16">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-full md:w-1/2 shadow-sm focus:outline-none focus:border-green-300"
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
              aria-label={`View details for ${item.product_name}`}
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
