import axios from "axios";

const TOKEN =
  "cd7ea4a8293465160efa9945e896c4e94d26ce1ff2ad022229ccfc358fbddd4f";

//  Fetch menu items
export const getMenuItems = async () => {
  const response = await axios.post(
    `/api/businessinventory/get_outlet_menu_items.json?access_token=${TOKEN}`,
    {
      business_location_id: "2029",
      businessprofile_id: "1989",
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data.items || [];
};

//  Fetch product details
export const getProductDetails = async (productId) => {
  const response = await axios.get(
    `/api/businessinventory/${productId}/public_product_detail.json?access_token=${TOKEN}`
  );
  return response.data;
};
