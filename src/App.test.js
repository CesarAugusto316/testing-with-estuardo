/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import userEv from '@testing-library/user-event';
import App from './App';


describe('<App/>', () => {

  it('renderiza el "button" increment', () => {
    render(<App />);

    const BtnIncement = screen.getByRole('button', { name: /increment/i })
    const BtnDecrement = screen.getByRole('button', { name: /decrement/i })
    screen.debug(BtnDecrement)

    expect(BtnDecrement).toBeInTheDocument() // true | false
    expect(BtnIncement).toBeInTheDocument() // true | false
  });

  it('should increment by 1 when click button increment', () => {
    render(<App />);

    const BtnIncement = screen.getByRole('button', { name: /increment/i });
    const text = screen.getByText('0')

    userEv.click(BtnIncement)

    expect(text).toHaveTextContent('1')
    screen.debug(text)
  })
})
