import { FaTshirt, FaFemale, FaShoePrints, FaShoppingBag } from "react-icons/fa";

function Categories() {
  const categories = [
    {
      id: 1,
      title: "Men",
      icon: <FaTshirt size={40} />,
    },
    {
      id: 2,
      title: "Women",
      icon: <FaFemale size={40} />,
    },
    {
      id: 3,
      title: "Shoes",
      icon: <FaShoePrints size={40} />,
    },
    {
      id: 4,
      title: "Accessories",
      icon: <FaShoppingBag size={40} />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-12">
          Shop By Category
        </h2>

        <div className="grid grid-cols-4 gap-8">

          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl"
            >
              {item.icon}

              <h3 className="mt-5 text-xl font-semibold">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;