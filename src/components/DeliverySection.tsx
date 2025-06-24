import Icon from "@/components/ui/icon";

const DeliverySection = () => {
  const features = [
    {
      icon: "MapPin",
      title: "География доставки",
      description: "Доставляем по всей России и СНГ",
    },
    {
      icon: "Clock",
      title: "Сроки поставки",
      description: "От 3 до 14 рабочих дней",
    },
    {
      icon: "Shield",
      title: "Страхование груза",
      description: "Полное страхование при транспортировке",
    },
  ];

  return (
    <section id="delivery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Доставка и монтаж
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная логистика и установка оборудования с гарантией
            качества по всей России
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl"
                >
                  <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                    <Icon
                      name={feature.icon as any}
                      className="text-blue-600"
                      size={24}
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">
                Этапы работы:
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                    1
                  </span>
                  <span className="text-gray-700">
                    Консультация и техническое задание
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                    2
                  </span>
                  <span className="text-gray-700">
                    Логистика и доставка на объект
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                    3
                  </span>
                  <span className="text-gray-700">Профессиональный монтаж</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                    4
                  </span>
                  <span className="text-gray-700">
                    Настройка и обучение персонала
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1558664835-f13134e0d4ad?w=700&h=500&fit=crop"
              alt="Профессиональная доставка оборудования"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
