function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold mb-6">
            The Future of Smart Farming
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            Connect farmers, buyers, and agricultural services on one powerful platform.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold">
              Get Started
            </button>

            <button className="border border-white px-8 py-4 rounded-lg font-bold">
              Explore Marketplace
            </button>
          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-4xl font-bold text-green-700">500+</h2>
            <p>Farmers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-green-700">2000+</h2>
            <p>Products</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-green-700">100+</h2>
            <p>Villages</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-green-700">10000+</h2>
            <p>Orders</p>
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Why FarmTech?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                🌾 Direct Selling
              </h3>

              <p>
                Farmers sell directly to buyers and maximize profits.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                📈 Market Insights
              </h3>

              <p>
                Track crop prices and market demand in real time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                🤖 AI Assistance
              </h3>

              <p>
                Get crop recommendations and farming guidance.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Featured Products */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-12">
            Featured Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="shadow-lg rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c"
                alt=""
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold">
                  Fresh Tomatoes
                </h3>

                <p>₹40 / kg</p>
              </div>
            </div>

            <div className="shadow-lg rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b"
                alt=""
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold">
                  Organic Rice
                </h3>

                <p>₹65 / kg</p>
              </div>
            </div>

            <div className="shadow-lg rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518977676601-b53f82aba655"
                alt=""
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold">
                  Fresh Potatoes
                </h3>

                <p>₹30 / kg</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-20">

        <div className="text-center max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-6">
            Join the FarmTech Revolution
          </h2>

          <p className="text-xl mb-8">
            Empowering farmers through technology and direct market access.
          </p>

          <button className="bg-white text-green-700 px-10 py-4 rounded-lg font-bold">
            Register Today
          </button>

        </div>

      </section>

    </div>
  );
}

export default Home;