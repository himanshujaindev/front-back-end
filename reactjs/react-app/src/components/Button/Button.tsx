import styles from "./Button.module.css";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger"; // optional
}

const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    // {"btn btn-" + color}
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
