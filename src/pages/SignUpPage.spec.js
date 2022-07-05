import SignUpPage from "./SignUpPage";
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";

describe('Sign Up Page', () => {
    describe('Layout', () => {
        it("has header", () => {
            render(<SignUpPage />);
            const header = screen.queryByRole("heading", { name: "Sign Up"});
            expect(header).toBeInTheDocument();
        })
        it('has username input', () => {
            render(<SignUpPage />);
            const input = screen.getByPlaceholderText("username");
            expect(input).toBeInTheDocument();
        });
        it('has email input', () => {
            render(<SignUpPage />);
            const input = screen.getByPlaceholderText("email");
            expect(input).toBeInTheDocument();
        });
        it('has password input', () => {
            render(<SignUpPage />);
            const input = screen.getByLabelText("Password");
            expect(input).toBeInTheDocument();
            expect(input.type).toBe("password");
        });
        it('has password repeat input', () => {
            render(<SignUpPage />);
            const input = screen.getByLabelText("Password Repeat");
            expect(input).toBeInTheDocument();
            expect(input.type).toBe("password");
        });
        it('should have Sign Up button and initially disabled', () => {
            render(<SignUpPage />);
            const button = screen.queryByRole('button', {name: 'Sign Up', type: 'submit'});
            expect(button).toBeInTheDocument();
            expect(button).toBeDisabled();
        });
    });

    describe('Interactions', () => {
        it('should enable sign up button if password and reapeat password have the same value', () => {
            render(<SignUpPage />);
            const passwordInput = screen.getByLabelText("Password");
            const repeatPasswordInput = screen.getByLabelText("Password Repeat");
            userEvent.type(passwordInput, "s0m3p4ssw0rd1234");
            userEvent.type(repeatPasswordInput, "s0m3p4ssw0rd1234");
            const button = screen.queryByRole('button', {name: 'Sign Up', type: 'submit'});
            expect(button).not.toBeDisabled();
        });
    });
});

