import { useEffect, useState } from "react";
import axios from "axios";
import MenuItemCard from "./MenuItemCard";
import ProductModal from "./ProductModal";

const TOKEN =
  "cd7ea4a8293465160efa9945e896c4e94d26ce1ff2ad022229ccfc358fbddd4f";

function MenuList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState(null);

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
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) return <p className="p-4">Loading menu...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {items.map((item) => (
        <MenuItemCard
          key={item.product_id}
          item={item}
          onClick={(id) => setSelectedProductId(id)} // open modal
        />
      ))}

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
