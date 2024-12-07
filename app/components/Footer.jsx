// Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-pink-400 py-6">
        <div className="container mx-auto text-center my-8">
          <p className="text-white text-sm">&copy; {new Date().getFullYear()} <span className="font-black">Hélio Sales Jr.</span> All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-white hover:text-orange-200">Privacy Policy</a>
            <a href="#" className="text-white hover:text-orange-200">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  }
  