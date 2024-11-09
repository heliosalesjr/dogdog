// NextButton.jsx
export default function NextButton({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
      >
        Next
      </button>
    );
  }
  