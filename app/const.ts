const features = [
  { icon: 'insert_emoticon', title: 'Комфорт', text: 'Шумопоглощающие стены' },
  { icon: 'location_city', title: 'Удобство', text: 'Окно в каждой из спален' },
  {
    icon: 'lock',
    title: 'Сейф',
    text: 'Номер оснащён сейфом высокой системы безопасности',
  },
  {
    icon: 'wifi',
    title: 'Быстрый Wi-Fi',
    text: 'Номер оснащен выделенной скоростной беспроводной точкой доступа',
  },
  {
    icon: 'heat_pump',
    title: 'Прохлада',
    text: 'Номер оборудован кондиционером',
  },
  {
    icon: 'sailing',
    title: 'Вид на море',
    text: 'Номер с живописным видом на море',
  },
  {
    icon: 'landscape',
    title: 'Вид на горы',
    text: 'Номер с живописным видом на горы',
  },
  {
    icon: 'shopping_bag',
    title: 'Хранение багажа',
    text: 'К номеру прилагается бесплатная камера хранения',
  },
];

const rating = [25, 50, 75];

const feedbacks = [
  {
    image: 'img/profile-pictures/author-1.jpg',
    name: 'Мурад Сарафанов',
    date: '5 дней назад',
    text: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
    likes: '11',
  },
  {
    image: 'img/profile-pictures/author-2.jpg',
    name: 'Патрисия Стёклышкова',
    date: 'Неделю назад',
    text: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
    likes: '2',
  },
  {
    image: 'img/profile-pictures/no-profile-picture.png',
    name: 'Василий Смирнов',
    date: 'Месяц назад',
    text: 'Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
    likes: '8',
  },
  {
    image: 'img/profile-pictures/no-profile-picture.png',
    name: 'Иван Петров',
    date: 'Год назад',
    text: 'Всё аккуратно, чисто.',
    likes: '1',
  },
  {
    image: 'img/profile-pictures/no-profile-picture.png',
    name: 'Настя Смирнова',
    date: '2 года назад',
    text: 'Обслуживание на высоте!',
    likes: '9',
  },
  {
    image: 'img/profile-pictures/no-profile-picture.png',
    name: 'Мурад Сарафан',
    date: '15 дней назад',
    text: 'Спасибо. Выкрикивал комплименты повару — никто не жаловался из соседей.',
    likes: '11',
  },
  {
    image: 'img/profile-pictures/author-2.jpg',
    name: 'Патриция Стёклышкова',
    date: 'Неделю назад',
    text: 'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
    likes: '2',
  },
  {
    image: 'img/profile-pictures/no-profile-picture.png',
    name: 'Василий Петров',
    date: 'Месяц назад',
    text: 'Завтраки в номер советую заказать.',
    likes: '8',
  },
  {
    image: 'img/profile-pictures/no-profile-picture.png',
    name: 'Петр Петров',
    date: '3 года назад',
    text: 'Чисто...',
    likes: '1',
  },
  {
    image: 'img/profile-pictures/no-profile-picture.png',
    name: 'Наталья Смирнова',
    date: '2 года назад',
    text: 'Обслуживание на высоте!',
    likes: '9',
  },
];

const dropdownOptions = {
  guest: {
    textPlural: 'Гостей',
    selectionText: 'Гость',
    items: [
      { id: 'adult', label: 'Взрослые', maxCount: 10, minCount: 0 },
      { id: 'child', label: 'Дети', maxCount: 10, minCount: 0 },
      { id: 'infant', label: 'Младенцы', maxCount: 10, minCount: 0 },
    ],
  },
  rooms: {
    textPlural: 'Комнат',
    selectionText: 'Комната',
    items: [
      { id: 'bedrooms', label: 'Спальни', maxCount: 10, minCount: 0 },
      { id: 'beds', label: 'Кровати', maxCount: 10, minCount: 0 },
      { id: 'bathrooms', label: 'Ванные комнаты', maxCount: 10, minCount: 0 },
    ],
  },
};

export { features, feedbacks, rating, dropdownOptions };
