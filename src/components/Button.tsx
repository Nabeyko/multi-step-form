interface ButtonProps {
  onClick?: () => void;
}

export const ButtonNext = ({ onClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium mt-6 hover:bg-blue-700 cursor-pointer transition-colors"
      type="button"
      onClick={onClick}
    >
      Next →
    </button>
  );
};

export const ButtonBack = ({ onClick }: ButtonProps) => {
  return (
    <button
      className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg font-medium mt-6 hover:bg-gray-300 cursor-pointer transition-colors"
      type="button"
      onClick={onClick}
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
