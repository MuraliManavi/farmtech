import { useState } from "react";
import axios from "axios";

import {
  FaLeaf,
  FaCloudUploadAlt,
  FaSearch,
  FaSpinner,
  FaBug,
  FaShieldAlt,
  FaPrescriptionBottleAlt,
  FaCheckCircle,
} from "react-icons/fa";

function DiseaseDetection() {

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const imageHandler = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));

  };

  const analyzeDisease = async () => {

    if (!image) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();

    formData.append("image", image);

    try {

      setLoading(true);

      const { data } = await axios.post(
        "https://farmtech-s0md.onrender.com/api/disease/detect",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      setResult(data.result);

    } catch (error) {

      alert(
        error.response?.data?.message ||
          "Analysis Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

      {/* HERO */}

      <section className="bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 py-20 text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="w-28 h-28 mx-auto rounded-full bg-white flex items-center justify-center shadow-2xl">

            <FaLeaf className="text-6xl text-green-700" />

          </div>

          <h1 className="text-6xl font-extrabold mt-8">

            Crop Disease Detection

          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto text-green-100">

            Upload a crop or leaf image and let
            FarmTech AI identify diseases,
            recommend treatment and prevention.

          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-12">
        {/* Upload Card */}

<div className="bg-white rounded-[35px] shadow-2xl border border-green-100 p-10">

  <h2 className="text-3xl font-bold text-green-700 mb-8">

    📷 Upload Crop Image

  </h2>

  <div className="border-2 border-dashed border-green-300 rounded-3xl p-10 bg-green-50 text-center hover:bg-green-100 transition">

    <FaCloudUploadAlt className="mx-auto text-7xl text-green-600 mb-6" />

    <p className="text-lg text-gray-600 mb-6">

      Select a crop or leaf image

    </p>

    <input
      type="file"
      accept="image/*"
      onChange={imageHandler}
      className="w-full"
    />

  </div>

  {preview && (

    <div className="mt-10">

      <img
        src={preview}
        alt="Preview"
        className="w-full h-96 object-cover rounded-3xl shadow-xl"
      />

    </div>

  )}

  <button
    onClick={analyzeDisease}
    disabled={loading}
    className="mt-10 w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition flex justify-center items-center gap-4 disabled:opacity-70"
  >

    {loading ? (
      <>
        <FaSpinner className="animate-spin" />
        Analyzing...
      </>
    ) : (
      <>
        <FaSearch />
        Analyze Disease
      </>
    )}

  </button>

</div>
{/* RESULT CARD */}

<div className="bg-white rounded-[35px] shadow-2xl border border-green-100 p-10">

  <h2 className="text-3xl font-bold text-green-700 mb-8">
    🤖 AI Analysis Result
  </h2>

  {!result && !loading && (

    <div className="h-[650px] flex flex-col justify-center items-center text-center">

      <FaLeaf className="text-8xl text-green-200 mb-8" />

      <h3 className="text-3xl font-bold text-gray-600">
        No Analysis Yet
      </h3>

      <p className="text-gray-500 mt-5 max-w-md leading-8">
        Upload a crop image and click
        <span className="font-bold text-green-700">
          {" "}Analyze Disease
        </span>
        {" "}to receive an AI-powered diagnosis.
      </p>

    </div>

  )}

  {loading && (

    <div className="h-[650px] flex flex-col justify-center items-center">

      <FaSpinner className="animate-spin text-7xl text-green-600" />

      <h3 className="mt-8 text-3xl font-bold">
        AI is analyzing your crop...
      </h3>

      <p className="mt-4 text-gray-500">
        Please wait a few seconds.
      </p>

    </div>

  )}

  {result && !loading && (

    <div className="space-y-6">

      <div className="rounded-3xl bg-red-50 border border-red-200 p-6 flex gap-4">

        <FaBug className="text-4xl text-red-600 mt-1" />

        <div>

          <h3 className="text-2xl font-bold text-red-700">
            Disease Detection
          </h3>

          <p className="mt-3 whitespace-pre-line text-gray-700 leading-8">
            {result}
          </p>

        </div>

      </div>

      <div className="rounded-3xl bg-blue-50 border border-blue-200 p-6 flex gap-4">

        <FaPrescriptionBottleAlt className="text-4xl text-blue-600 mt-1" />

        <div>

          <h3 className="text-2xl font-bold text-blue-700">
            Treatment
          </h3>

          <p className="mt-3 text-gray-700">
            Follow the AI recommendations above and use approved
            fungicides, insecticides or organic treatments as advised.
          </p>

        </div>

      </div>

      <div className="rounded-3xl bg-yellow-50 border border-yellow-200 p-6 flex gap-4">

        <FaShieldAlt className="text-4xl text-yellow-600 mt-1" />

        <div>

          <h3 className="text-2xl font-bold text-yellow-700">
            Prevention
          </h3>

          <p className="mt-3 text-gray-700">
            Maintain field hygiene, monitor crops regularly,
            avoid overwatering and practice crop rotation.
          </p>

        </div>

      </div>

      <div className="rounded-3xl bg-green-50 border border-green-200 p-6 flex gap-4">

        <FaCheckCircle className="text-4xl text-green-600 mt-1" />

        <div>

          <h3 className="text-2xl font-bold text-green-700">
            AI Confidence
          </h3>

          <p className="mt-3 text-gray-700">
            This result is AI-generated. For severe infections,
            consult your local agricultural expert before taking action.
          </p>

        </div>

      </div>

    </div>

  )}

</div>
</div>

{/* FEATURES */}

<section className="mt-24">

  <div className="text-center mb-14">

    <h2 className="text-5xl font-extrabold text-green-700">

      Why Use FarmTech AI?

    </h2>

    <p className="mt-4 text-xl text-gray-600">

      Advanced Artificial Intelligence for Smart Farming

    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

      <FaLeaf className="text-5xl text-green-600 mb-6" />

      <h3 className="text-2xl font-bold">

        Disease Detection

      </h3>

      <p className="mt-4 text-gray-600">

        Detect crop diseases instantly from leaf images.

      </p>

    </div>

    <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

      <FaPrescriptionBottleAlt className="text-5xl text-blue-600 mb-6" />

      <h3 className="text-2xl font-bold">

        Treatment

      </h3>

      <p className="mt-4 text-gray-600">

        Receive AI-powered medicine and fertilizer suggestions.

      </p>

    </div>

    <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

      <FaShieldAlt className="text-5xl text-yellow-500 mb-6" />

      <h3 className="text-2xl font-bold">

        Prevention

      </h3>

      <p className="mt-4 text-gray-600">

        Learn preventive practices to reduce crop losses.

      </p>

    </div>

    <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

      <FaCheckCircle className="text-5xl text-emerald-600 mb-6" />

      <h3 className="text-2xl font-bold">

        Accurate Results

      </h3>

      <p className="mt-4 text-gray-600">

        Powered by Google's Gemini AI for fast agricultural guidance.

      </p>

    </div>

  </div>

</section>
      </section>
    </div>
  );
}

export default DiseaseDetection;