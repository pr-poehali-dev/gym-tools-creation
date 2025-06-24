import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Dumbbell" className="text-orange-500" size={32} />
              <span className="text-2xl font-bold">GymPro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональное оснащение спортивных залов под ключ
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Icon name="Facebook" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Оборудование</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Кардиотренажеры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Силовые тренажеры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Свободные веса
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Функциональное
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Консультации
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Планировка зала
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Установка
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <p>+7 (495) 123-45-67</p>
              <p>info@gympro.ru</p>
              <p>г. Москва, ул. Спортивная, д. 15</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GymPro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
