import './button.styles.scss'

const Button = ({ children, buttonType, ...otherProps }) => (
  <button className={`${buttonType} button-container`} {...otherProps}>
    {children}
  </button>
);
export default Button;
