import Card from "./Card";

function CardWithHeader(props) {
  return (
    <div className={`space-y-4 ${props?.className}`}>
      {props?.header}
      <Card className={props?.cardClassName} color={props?.color}>
        {props?.children}
      </Card>
    </div>
  );
}

export default CardWithHeader;
