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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр тренажеров для любого типа спортивного зала
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Icon name={category.icon as any} size={32} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                  Подробнее →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
