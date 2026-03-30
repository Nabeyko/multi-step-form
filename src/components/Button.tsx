export const ButtonNext = () => {
  return (
    <button
      className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium mt-6 hover:bg-blue-700 cursor-pointer transition-colors"
      type="button"
    >
      Next →
    </button>
  );
};

export const ButtonBack = () => {
  return (
    <button
      className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg font-medium mt-6 hover:bg-gray-300 cursor-pointer transition-colors"
      type="button"
    >
      ← Back
    </button>
  );
};

export const ButtonSubmit = () => {
  return (
    <button
      className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium mt-6 hover:bg-green-700 cursor-pointer transition-colors"
      type="submit"
    >
      Submit ✓
    </button>
  );
};
