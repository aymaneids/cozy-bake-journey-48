
import Hero from '@/components/Hero';
import FeaturedItems from '@/components/FeaturedItems';
import Testimonials from '@/components/Testimonials';
import LocationAndHours from '@/components/LocationAndHours';
import NewsletterSignup from '@/components/NewsletterSignup';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Hero />
        <FeaturedItems />
        <div className="bg-bakery-peach/30 py-16 md:py-24">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-6">Our Philosophy</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              At Bang Bang, we believe that the best food comes from quality ingredients, 
              time-honored techniques, and a lot of love. Everything is made from scratch daily, 
              using locally-sourced ingredients whenever possible.
            </p>
          </div>
        </div>
        <Testimonials />
        <LocationAndHours />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
