import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Icon name="Dumbbell" className="text-blue-600" size={36} />
            <span className="text-2xl font-bold text-gray-900">GymPro</span>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Главная
            </a>
            <a
              href="#equipment"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Оборудование
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Услуги
            </a>
            <a
              href="#delivery"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Доставка
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                +7 (495) 123-45-67
              </div>
              <div className="text-sm text-gray-500">Звонок бесплатный</div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Заказать звонок
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 mb-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Главная
              </a>
              <a
                href="#equipment"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Оборудование
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Услуги
              </a>
              <a
                href="#delivery"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Доставка
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Контакты
              </a>
            </nav>
            <div className="pt-4 border-t border-gray-100">
              <div className="text-xl font-bold text-blue-600 mb-1">
                +7 (495) 123-45-67
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full">
                Заказать звонок
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
