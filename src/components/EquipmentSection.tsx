import Icon from "@/components/ui/icon";

const EquipmentSection = () => {
  const categories = [
    {
      title: "Кардиотренажеры",
      icon: "Heart",
      description: "Беговые дорожки, велотренажеры, эллипсы",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    },
    {
      title: "Силовые тренажеры",
      icon: "Dumbbell",
      description: "Многофункциональные станции, грузоблочные",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400",
    },
    {
      title: "Свободные веса",
      icon: "Weight",
      description: "Гантели, штанги, стойки, скамьи",
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400",
    },
    {
      title: "Функциональное",
      icon: "Activity",
      description: "TRX, медболы, канаты, петли",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400",
    },
  ];

  return (
    <section id="equipment" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Каталог оборудования
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Широкий ассортимент профессионального оборудования для
            фитнес-клубов, спортивных залов и реабилитационных центров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Icon
                      name={category.icon as any}
                      className="text-blue-600"
                      size={20}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-1" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
            Скачать полный каталог
          </button>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
