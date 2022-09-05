import { useAppSelector } from '../../hook';
import { colorToSecondary } from '../../utils/colorUtils';

import './Footer.css';

export const Footer = () => {
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const textColorSecondary = colorToSecondary(textColor);

  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="copyright" style={{ color: textColorSecondary }}>
          2022 ©{' '}
        </p>
        <p className="copyright">
          <a
            className="copyright__link"
            href="https://github.com/EvgeniaLeleo"
            target="_blank"
            rel="noreferrer"
            style={{ color: textColorSecondary }}
          >
            EvgeniaLeleo
          </a>
        </p>
        <p className="copyright" style={{ color: textColorSecondary }}>
          <a
            className="copyright__link"
            href="https://github.com/Rakhymbek"
            target="_blank"
            rel="noreferrer"
            style={{ color: textColorSecondary }}
          >
            Rakhymbek
          </a>
        </p>
        <p className="copyright" style={{ color: textColorSecondary }}>
          <a
            className="copyright__link"
            href="https://github.com/danikman89"
            target="_blank"
            rel="noreferrer"
            style={{ color: textColorSecondary }}
          >
            danikman89
          </a>
        </p>
      </div>
      <a
        className="footer__logo"
        href="https://rs.school/js/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="footer__logo-img"
          src="./rs_school_js.svg"
          alt="RS school logo"
        />
      </a>
    </footer>
  );
};
