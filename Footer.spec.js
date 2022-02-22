import { render, screen } from '@testing-library/react';
    import Footer from './Footer.js';

    describe('Footer', () => {
      it('render...', () => {
        render(<Footer />);
        expect(screen.getByText('Footer')).toBeInTheDocument();
      });
    });
    