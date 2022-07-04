import SignUpPage from "./SignUpPage";
import { render, screen } from "@testing-library/react"

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
            const input = screen.getByPlaceholderText("password");
            expect(input).toBeInTheDocument();
            expect(input.type).toBe("password");
        });
    });
});

