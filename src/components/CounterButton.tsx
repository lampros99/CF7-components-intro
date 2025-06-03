type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  label: string;
  addClass?: string;
};

const CounterButton = ({ onClick, disabled = false, label, addClass= "bg-black" }: ButtonProps) => {
  return (
    <>
    <button
      className={"disabled:bg-gray-600 text-white py-2 px-4 " + addClass}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
    </>
  );
};

export default CounterButton;
