import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Dumbbell" className="text-orange-500" size={32} />
            <span className="text-2xl font-bold text-gray-900">GymPro</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Главная
            </a>
            <a
              href="#equipment"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Тренажеры
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Услуги
            </a>
            <a
              href="#delivery"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Доставка
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Контакты
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Главная
              </a>
              <a
                href="#equipment"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Тренажеры
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Услуги
              </a>
              <a
                href="#delivery"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Доставка
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
