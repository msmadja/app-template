import { render, screen,   } from '@testing-library/react';
import App from './App';

jest.mock("./Products/Products.service");

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("main");
  expect(linkElement).toBeInTheDocument();
});
