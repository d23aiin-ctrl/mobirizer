import { Header, Footer } from '@/components';
import { HomePageContent } from './HomePageContent';

export default function HomePage() {
  return (
    <>
      <Header activePage="home" />
      <HomePageContent />
      <Footer />
    </>
  );
}
