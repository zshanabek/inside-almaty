import type { Category, District, GuideRoute, Place } from '~/types/content'

export const categories: Category[] = [
  { id: 1, name: 'Еда', slug: 'food', icon: '🍜' },
  { id: 2, name: 'Кофе', slug: 'coffee', icon: '☕' },
  { id: 3, name: 'Горы', slug: 'mountains', icon: '⛰️' },
  { id: 4, name: 'Гулять', slug: 'walks', icon: '🚶' },
  { id: 5, name: 'Вечером', slug: 'night', icon: '🌙' },
]

const districts: District[] = [
  { id: 1, name: 'Медеуский', slug: 'medeuskiy' },
  { id: 2, name: 'Бостандыкский', slug: 'bostandykskiy' },
  { id: 3, name: 'Алмалинский', slug: 'almalinskiy' },
]

export const places: Place[] = [
  {
    id: 1, title: 'Зелёный базар', slug: 'green-bazaar', category: categories[0], district: districts[0],
    short_description: 'Шумный, живой и очень алматинский рынок — сюда стоит идти голодным.',
    description: 'Лучше приходить утром, пройти мясные и молочные ряды, попробовать сухофрукты и закончить прогулку быстрым обедом рядом.',
    verdict: 'Must visit в первый приезд. Не ради сувениров — ради атмосферы и еды.', address: 'ул. Жибек Жолы, 53',
    latitude: 43.2637, longitude: 76.9564, price_level: 1, average_check: 4500, recommended: true,
    best_time: 'Утро или ранний обед', duration_minutes: 75,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80', tags: ['local pick', 'еда', 'первый визит']
  },
  {
    id: 2, title: 'Парк 28 панфиловцев', slug: 'panfilov-park', category: categories[3], district: districts[0],
    short_description: 'Центральная прогулка, которую удобно связать с собором и Зелёным базаром.',
    description: 'Сам парк небольшой, поэтому не выделяйте на него полдня. Его сила — в связке с окружающими точками центра.',
    verdict: 'Стоит пройти, но лучше как часть маршрута, а не отдельную поездку.', address: 'ул. Гоголя',
    latitude: 43.2588, longitude: 76.9532, price_level: 1, recommended: true,
    best_time: 'После обеда', duration_minutes: 45,
    image: 'https://images.unsplash.com/photo-1568480289356-5a75d0fd47fc?auto=format&fit=crop&w=1400&q=80', tags: ['архитектура', 'центр', 'прогулка']
  },
  {
    id: 3, title: 'Шымбулак', slug: 'shymbulak', category: categories[2], district: districts[0],
    short_description: 'Самый простой способ показать человеку, зачем Алматы нужны горы.',
    description: 'Поднимайтесь выше базовой станции, если погода позволяет. В выходные приезжайте раньше из-за очередей.',
    verdict: 'Дороже обычной прогулки, но для первого визита в Алматы — один из лучших вариантов.', address: 'ущелье Медеу',
    latitude: 43.1286, longitude: 77.0800, price_level: 3, average_check: 12000, recommended: true,
    best_time: 'Утро буднего дня', duration_minutes: 240,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80', tags: ['горы', 'must visit', 'вид']
  },
  {
    id: 4, title: 'Кофе после прогулки', slug: 'coffee-after-walk', category: categories[1], district: districts[3] || districts[2],
    short_description: 'Пример карточки локальной кофейни для будущего наполнения.',
    description: 'В реальном проекте сюда попадут только лично проверенные места с конкретным заказом и честным комментарием.',
    verdict: 'Хорошая остановка, если вы уже рядом. Специально через весь город ехать не нужно.', address: 'центр Алматы',
    latitude: 43.2448, longitude: 76.9342, price_level: 2, average_check: 3500, recommended: false, hidden_gem: true,
    best_time: 'Днём', duration_minutes: 50,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80', tags: ['coffee', 'hidden gem']
  }
]

export const routes: GuideRoute[] = [
  {
    id: 1, title: 'Первый день в Алматы', slug: 'first-day-almaty',
    description: 'Без гонки по чек-листу: рынок, старый центр, прогулка и городская еда.',
    duration_hours: 7, estimated_budget: 18000,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    stops: [
      { place: places[0], position: 1, stay_minutes: 75, note: 'Начните с завтрака и рынка.' },
      { place: places[1], position: 2, stay_minutes: 45, note: 'Идите пешком — это рядом.' },
      { place: places[3], position: 3, stay_minutes: 50, note: 'Кофейная пауза.' },
    ]
  },
  {
    id: 2, title: 'Один день в горах', slug: 'one-day-mountains',
    description: 'Маршрут для человека без специальной подготовки, который хочет увидеть горы.',
    duration_hours: 6, estimated_budget: 22000,
    image: places[2].image,
    stops: [{ place: places[2], position: 1, stay_minutes: 240, note: 'Выезжайте утром.' }]
  }
]
