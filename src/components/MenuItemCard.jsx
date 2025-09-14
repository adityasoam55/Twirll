import React from "react";

function MenuCardItem({ item, onClick }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl cursor-pointer transform hover:scale-105 transition duration-300 p-4 flex flex-col"
      onClick={() => onClick(item.product_id)} // ✅ Pass product_id
    >
      {/* Image */}
      <div className="relative">
        <img
          src={item.productpic || "https://via.placeholder.com/150"}
          alt={item.product_name}
          className="w-full h-40 object-cover rounded-xl"
        />

        {/* Availability Badge */}
        <span
          className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${
            item.product_availability
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {item.product_availability ? "Available" : "Unavailable"}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col mt-3">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {item.product_name}
        </h2>
        <p className="text-sm text-gray-500">{item.cataloguename}</p>

        <p className="text-sm text-gray-600 line-clamp-2 mt-1">
          {item.item_short_description || "No description available"}
        </p>

        {/* Price & Discount */}
        <div className="mt-auto flex items-center justify-between">
          <p className="text-green-600 font-bold">
            {item.currency} {item.selling_price}
          </p>

          {item.discount_perc && (
            <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-lg">
              {item.discount_perc}% off
            </span>
          )}

          {item.discount_flat_amt && (
            <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-lg">
              Save {item.currency} {item.discount_flat_amt}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuCardItem;
