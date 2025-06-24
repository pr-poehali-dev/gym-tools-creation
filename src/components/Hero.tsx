import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section id="home" className="bg-white py-20 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Профессиональное оснащение спортивных залов
              <span className="block text-blue-600 mt-2">под ключ</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Полный комплекс услуг: от консультации до установки. Работаем с
              залами любого масштаба по всей России.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
                Получить расчет
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Посмотреть каталог
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">залов оснащено</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">15</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  24/7
                </div>
                <div className="text-sm text-gray-600">поддержка</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
              alt="Современный спортивный зал"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" className="text-green-500" size={24} />
                <div>
                  <div className="font-semibold text-gray-900">
                    Гарантия качества
                  </div>
                  <div className="text-sm text-gray-600">5 лет гарантии</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
