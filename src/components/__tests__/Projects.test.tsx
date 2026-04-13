import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "../Projects";
import { ThemeProvider } from "../../contexts/ThemeContext";

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe("Projects Component", () => {
  it("renders the projects section", () => {
    renderWithTheme(<Projects />);
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();
  });

  it("displays project titles", () => {
    renderWithTheme(<Projects />);
    expect(
      screen.getByText("Cryptocurrency Price Tracker"),
    ).toBeInTheDocument();
    expect(screen.getByText("QuickCart E-Commerce App")).toBeInTheDocument();
    expect(screen.getByText("FilmFinder Movie App")).toBeInTheDocument();
  });
});
