// AboutUs.jsx
export default function AboutUs() {
    return (
      <section className="bg-gradient-to-br from-[#FFB6C1] to-[#ADD8E6] py-16 text-center">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">About Me</h2>
          
          <p className="text-lg text-white max-w-3xl mx-auto mb-6 leading-relaxed">
            Hi! I’m a passionate developer with a love for dogs and a drive to create games that are both fun and accessible.
            <span className="font-semibold"> Guess The Woof</span> started as a playful experiment with a dog breed recognition API,
            but quickly grew into a game designed to bring joy to people of all ages.
          </p>
  
          <p className="text-lg text-white max-w-3xl mx-auto mb-6 leading-relaxed">
            My goal was to make a game simple enough for my grandparents to enjoy but engaging enough for everyone to have a
            great time. Whether you’re a dog lover or a casual gamer, I hope Guess The Woof brings a smile to your face!
          </p>
          
          <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-200 mt-8">
            Learn More
          </button>
        </div>
      </section>
    );
  }
  