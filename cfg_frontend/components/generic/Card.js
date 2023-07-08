function Card(props) {
  return (
    <div
      className={`bg-${props?.color || "white"} rounded-lg shadow-md p-4 ${
        props?.className
      }`}
      onClick={props?.onClick}
    >
      {props?.children}
    </div>
  );
}

export default Card;
