export default function ImageModal({ isOpen, onClose, imageUrl }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
          <img src={imageUrl} alt="Full size dog" className="max-w-full max-h-[80vh] object-contain" />
          <button 
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  
  