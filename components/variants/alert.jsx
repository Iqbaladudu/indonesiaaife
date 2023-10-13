import { Alert as BaseAlert } from "react-bootstrap";

function Alert({ children, variants }) {
  return (
    <>
      <style>
        {`
            .alert-primary {
                background-color: #77C57D;
            }
            .alert-secondary {
                background-color: #CFF5D2
            }
            .alert-success {
                background-color: #CFF4FC
            }
            .alert-warning {
                background-color: #664D03
            }
            `}
      </style>
      <BaseAlert variant={variants}>{children}</BaseAlert>
    </>
  );
}

export default Alert;
