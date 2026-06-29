// Premium SearchFilterBar.jsx

import { FaSearch, FaFilter } from "react-icons/fa";

function SearchFilterBar({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <div className="bg-white rounded-[30px] shadow-xl p-6 mb-10 border border-green-100">

      <div className="grid lg:grid-cols-4 gap-5">

        {/* Search */}

        <div className="lg:col-span-3 relative">

          <FaSearch className="absolute left-5 top-5 text-green-600 text-xl" />

          <input
            type="text"
            placeholder="Search vegetables, fruits, grains..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border border-green-200 rounded-2xl py-4 pl-14 pr-5 outline-none focus:ring-2 focus:ring-green-500"
          />

        </div>

        {/* Category */}

        <div className="relative">

          <FaFilter className="absolute left-5 top-5 text-green-600" />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="w-full border border-green-200 rounded-2xl py-4 pl-14 pr-5 outline-none focus:ring-2 focus:ring-green-500 bg-white"
          >
            <option value="">
              All Categories
            </option>

            <option value="Vegetables">
              🥦 Vegetables
            </option>

            <option value="Fruits">
              🍎 Fruits
            </option>

            <option value="Grains">
              🌾 Grains
            </option>

            <option value="Seeds">
              🌱 Seeds
            </option>

            <option value="Organic">
              🌿 Organic
            </option>

          </select>

        </div>

      </div>

    </div>
  );
}

export default SearchFilterBar;