interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger"; // optional
}

const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
