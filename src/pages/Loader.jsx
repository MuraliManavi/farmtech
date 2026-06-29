// Premium Loader.jsx

import { FaLeaf } from "react-icons/fa";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50">

      <div className="text-center">

        <div className="relative w-32 h-32 mx-auto">

          <div className="absolute inset-0 rounded-full border-[8px] border-green-200"></div>

          <div className="absolute inset-0 rounded-full border-[8px] border-transparent border-t-green-600 animate-spin"></div>

          <div className="absolute inset-5 rounded-full bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center shadow-2xl">

            <FaLeaf className="text-white text-5xl animate-pulse" />

          </div>

        </div>

        <h1 className="mt-8 text-5xl font-extrabold text-green-700">
          FarmTech
        </h1>

        <p className="mt-4 text-gray-500 text-lg">
          Growing the Future of Agriculture...
        </p>

        <div className="w-72 h-3 bg-green-100 rounded-full mx-auto mt-10 overflow-hidden">

          <div className="h-full bg-gradient-to-r from-green-500 to-green-700 animate-[loading_2s_linear_infinite]"></div>

        </div>

      </div>

      <style>{`
        @keyframes loading{
          0%{width:0%;}
          100%{width:100%;}
        }
      `}</style>

    </div>
  );
}

export default Loader;