import React from "react";

function MenuCardItem({ item, onClick }) {
  return (
    <div
      className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer transition"
      onClick={() => onClick(item.product_id)} // ✅ Pass product_id
    >
      <img
        src={item.productpic}
        alt={item.product_name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{item.product_name}</h2>
      <p className="text-sm text-gray-600 line-clamp-2">
        {item.item_short_description || "No description"}
      </p>
      <p className="text-green-600 font-semibold mt-2">
        {item.currency} {item.selling_price}
      </p>
    </div>
  );
}

export default MenuCardItem;
