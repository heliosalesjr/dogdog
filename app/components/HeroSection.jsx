// HeroSection.jsx
export default function HeroSection() {
    return (
      <section className="bg-gradient-to-r from-pink-300 via-orange-200 to-baby-blue-200 text-center py-16">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4">Welcome to the Game Zone</h2>
          <p className="text-lg text-white mb-6">Challenge yourself with fun and engaging games!</p>
          <button className="px-6 py-2 text-lg font-semibold bg-orange-300 text-white rounded-md hover:bg-orange-400">
            Get Started
          </button>
        </div>
      </section>
    );
  }
  