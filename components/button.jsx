//bouton
const Button = (props) => {
  const { type, classname, textinside } = props;

  return (
    <Button type={type} className={classname}>
      {textinside}
    </Button>
  );
};

export default Button;

