type Option = { label: string; value: string };

type ButtonGroupProps = {
  value: string;
  options: Option[];
  onClick: (value: string) => void;
};

export const ButtonGroup = ({ value, options, onClick }: ButtonGroupProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onClick(opt.value)}
          className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-full transition ${
            value === opt.value
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};