import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Calculator",
      title: "Планировка зала",
      description:
        "Создание эффективной планировки с учетом потоков посетителей",
    },
    {
      icon: "ShoppingCart",
      title: "Подбор оборудования",
      description: "Индивидуальный подбор тренажеров под ваш бюджет и задачи",
    },
    {
      icon: "Wrench",
      title: "Установка и настройка",
      description: "Профессиональный монтаж и настройка всего оборудования",
    },
    {
      icon: "Users",
      title: "Обучение персонала",
      description: "Обучение тренеров работе с новым оборудованием",
    },
    {
      icon: "Shield",
      title: "Гарантийное обслуживание",
      description: "Полная гарантия и техническая поддержка после установки",
    },
    {
      icon: "FileText",
      title: "Документооборот",
      description: "Помощь в оформлении всех необходимых документов",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексные решения для оснащения спортивных залов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                  <Icon
                    name={service.icon as any}
                    className="text-orange-600"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg">
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
