import './game.css';

export const metadata = {
  title: 'Европа 1936',
  description: 'Пошаговая стратегия на карте Европы.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
