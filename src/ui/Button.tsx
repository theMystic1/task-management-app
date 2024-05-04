import styled, { css } from "styled-components";

type ButtonProps<T = HTMLButtonElement> = {
  btnType?: string;
  onClick?: (event: React.MouseEvent<T>) => void;
};

const defaultProps: Partial<ButtonProps<unknown>> = {
  btnType: "primary",
  onClick: () => {}, // Default onClick function is an empty function
};

const Button = styled.button<ButtonProps>`
  /* background-color: var(--color-brand-600); */

  min-height: 4rem;
  min-width: 20rem;
  border-radius: 2rem;
  font-weight: 600;
  border: none;

  ${(props) => {
    if (props.btnType === "primary") {
      return css`
        background-color: var(--color-brand-600);
        color: #fff;

        &:hover {
          background-color: var(--color-brand-500);
        }
      `;
    }

    if (props.btnType === "secondary") {
      return css`
        background-color: var(--color-brand-100);
        color: var(--color-brand-600);

        &:hover {
          background-color: var(--color-brand-200);
        }
      `;
    }

    if (props.btnType === "danger") {
      return css`
        background-color: var(--color-red-200);
        color: #fff;
        &:hover {
          background-color: var(--color-red-100);
        }
      `;
    }
  }}
`;

export default Button;

// type = "primary" | "secondary" | "danger";

Button.defaultProps = defaultProps;
