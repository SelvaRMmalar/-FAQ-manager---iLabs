function Button({ name, className, onClick, type, disabled }) {
  return (
    <div>
      <button
        className={
          className
            ? className
            : `px-4 md:mx-2 text-xs text-orange-600 text-center border border-solid border-orange-600 rounded-md hover:bg-orange-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1 hover:drop-shadow-xl_custom w-full h-8`
        }
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {name}
      </button>
    </div>
  );
}
export default Button;
