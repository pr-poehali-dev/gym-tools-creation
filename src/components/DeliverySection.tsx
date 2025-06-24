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
    <section
      id="delivery"
      className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Доставка и установка</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Профессиональная логистика и монтаж оборудования
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Что включено в услугу:
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <Icon name={feature.icon as any} size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-blue-100">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-xl">
              <h4 className="text-xl font-semibold mb-3">Этапы работы:</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    1
                  </span>
                  <span>Консультация и расчет</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    2
                  </span>
                  <span>Доставка на объект</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    3
                  </span>
                  <span>Монтаж и настройка</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    4
                  </span>
                  <span>Обучение и сдача в эксплуатацию</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1558664835-f13134e0d4ad?w=600"
              alt="Доставка оборудования"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
