import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-orange-500 via-orange-600 to-blue-600 text-white py-20 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Оснащение спортивных залов
          <span className="block text-3xl md:text-4xl mt-2 text-orange-200">
            под ключ
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Консультации экспертов • Поставка оборудования • Установка и настройка
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Получить консультацию
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
            Каталог оборудования
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-4 rounded-full mb-4">
              <Icon name="Users" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">500+ залов</h3>
            <p className="text-orange-200">успешно оснащено</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-4 rounded-full mb-4">
              <Icon name="Award" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">15 лет</h3>
            <p className="text-orange-200">опыта на рынке</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-4 rounded-full mb-4">
              <Icon name="Truck" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Доставка</h3>
            <p className="text-orange-200">по всей России</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
