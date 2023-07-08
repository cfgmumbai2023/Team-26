function Input(props) {
  return (
    <div className={props?.divClassName || "space-y-2 flex flex-col text-sm"}>
      {props?.label && (
        <label
          htmlFor={props?.input.id}
          className={
            props?.labelClassName ||
            "text-sm text-gray-600 font-medium"
          }
        >
          {props?.label}
          {props?.input?.requipurple && (
            <span className=" text-purple-600">*</span>
          )}
        </label>
      )}
      <input
        {...props?.input}
        className={
          props?.inputClassName ||
          "bg-white border border-gray-400 font-title focus:outline-none rounded-lg w-full p-3 text-sm"
        }
      />
      {props?.extra}
    </div>
  );
}

export default Input;
