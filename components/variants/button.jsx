import { Button as BaseButton } from "react-bootstrap";
import styles from "./styles.module.css";

function Button({ children, variants }) {
  return (
    <>
      <style type="text/css">
        {`
                .btn-primary {
                    color: #F5D9D9
                }
                .btn-primary:hover {
                    color: #F5D9D9;
                    background-color: #E84D4D
                }
                .btn-secondary {
                    color: #FBF2DA
                }
            `}
      </style>
      <BaseButton variants={variants} size="lg" className={styles.primaryactv}>
        {children}
      </BaseButton>
    </>
  );
}

export default Button;
