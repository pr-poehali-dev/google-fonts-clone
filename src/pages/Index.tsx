import React, { useState } from "react";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const FONT_CATEGORIES = [
  "Все",
  "Serif",
  "Sans Serif",
  "Display",
  "Handwriting",
  "Monospace",
];

const SAMPLE_FONTS = [
  {
    name: "Inter",
    category: "Sans Serif",
    popularity: 95,
    weights: "9 styles",
  },
  {
    name: "Roboto",
    category: "Sans Serif",
    popularity: 92,
    weights: "12 styles",
  },
  {
    name: "Open Sans",
    category: "Sans Serif",
    popularity: 89,
    weights: "10 styles",
  },
  {
    name: "Montserrat",
    category: "Sans Serif",
    popularity: 87,
    weights: "18 styles",
  },
  {
    name: "Playfair Display",
    category: "Serif",
    popularity: 84,
    weights: "6 styles",
  },
  {
    name: "Source Sans Pro",
    category: "Sans Serif",
    popularity: 82,
    weights: "12 styles",
  },
  {
    name: "Oswald",
    category: "Sans Serif",
    popularity: 79,
    weights: "6 styles",
  },
  {
    name: "Merriweather",
    category: "Serif",
    popularity: 76,
    weights: "8 styles",
  },
  {
    name: "Raleway",
    category: "Sans Serif",
    popularity: 74,
    weights: "18 styles",
  },
  {
    name: "Poppins",
    category: "Sans Serif",
    popularity: 71,
    weights: "18 styles",
  },
  {
    name: "Fira Code",
    category: "Monospace",
    popularity: 68,
    weights: "5 styles",
  },
  {
    name: "Dancing Script",
    category: "Handwriting",
    popularity: 65,
    weights: "4 styles",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [previewText, setPreviewText] = useState("Почти перед самым");
  const [fontSize, setFontSize] = useState(32);

  const filteredFonts = SAMPLE_FONTS.filter((font) => {
    const matchesSearch = font.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Все" || font.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#1A1A1A]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fonts
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Избранное
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Значки
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Icon
                name="User"
                size={20}
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Search */}
          <div className="relative max-w-2xl">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              type="text"
              placeholder="Поиск шрифтов"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-[#2D2D2D] border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {FONT_CATEGORIES.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Preview Controls */}
          <div className="bg-[#2D2D2D] rounded-lg p-4 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Введите текст для предпросмотра"
                  value={previewText}
                  onChange={(e) => setPreviewText(e.target.value)}
                  className="bg-[#1A1A1A] border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">Размер:</span>
                <input
                  type="range"
                  min="12"
                  max="72"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value))}
                  className="w-32"
                />
                <span className="text-sm text-gray-300 w-8">{fontSize}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Font Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid gap-6">
          {filteredFonts.map((font, index) => (
            <Card
              key={font.name}
              className="bg-[#2D2D2D] border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Font Header */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-white">
                        {font.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{font.category}</span>
                        <span>{font.weights}</span>
                        <div className="flex items-center space-x-1">
                          <Icon name="TrendingUp" size={14} />
                          <span>{font.popularity}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white"
                      >
                        <Icon name="Heart" size={16} className="mr-1" />
                        Добавить
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white"
                      >
                        <Icon name="Download" size={16} className="mr-1" />
                        Скачать
                      </Button>
                    </div>
                  </div>

                  {/* Font Preview */}
                  <div className="space-y-3">
                    <div
                      className="text-white leading-relaxed"
                      style={{
                        fontFamily: font.name.replace(" ", ""),
                        fontSize: `${fontSize}px`,
                      }}
                    >
                      {previewText}
                    </div>

                    {/* Size Variants */}
                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <span
                        style={{
                          fontFamily: font.name.replace(" ", ""),
                          fontSize: "12px",
                        }}
                      >
                        {previewText} 12px
                      </span>
                      <span
                        style={{
                          fontFamily: font.name.replace(" ", ""),
                          fontSize: "14px",
                        }}
                      >
                        {previewText} 14px
                      </span>
                      <span
                        style={{
                          fontFamily: font.name.replace(" ", ""),
                          fontSize: "16px",
                        }}
                      >
                        {previewText} 16px
                      </span>
                    </div>
                  </div>

                  {/* Font Styles */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-700">
                    {["Regular", "Medium", "Bold"].map((weight) => (
                      <span
                        key={weight}
                        className="px-2 py-1 text-xs bg-[#1A1A1A] text-gray-300 rounded"
                        style={{
                          fontFamily: font.name.replace(" ", ""),
                          fontWeight:
                            weight === "Regular"
                              ? "400"
                              : weight === "Medium"
                                ? "500"
                                : "700",
                        }}
                      >
                        {weight}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white"
          >
            Загрузить ещё шрифты
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Fonts</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  О проекте
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  API
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Лицензии
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Каталог</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Популярные
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Новые
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Trending
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Помощь</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Поддержка
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Сообщество</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Fonts. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
