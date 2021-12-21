import PropTypes from 'prop-types';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Diagonal({
  className, flipX, flipY, bgClass, bgCorner, preserveRatio, cta,
}) {
  const classeNames = [`${className} w-full block`];

  if (flipX) {
    classeNames.push('-scale-x-100');
  }

  if (flipY) {
    classeNames.push('-scale-y-100');
  }

  return (
    <div className="relative">
      <svg
        className={classeNames.join(' ')}
        height="361"
        preserveAspectRatio={preserveRatio ? 'xMinYMin meet' : 'xMidYMax slice'}
        viewBox="0 0 1920 361"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className={bgClass} d="M1349 234L1920 0v361H0z" fill="#000" />
        <path className={bgCorner} d="M1445 197.5L1920 4v249z" fill="#BE4C4C" />
      </svg>

      {cta?.href && (
      <Link href={cta.href}>
        <a className="absolute left-1/2 bottom-3 -translate-x-1/2 w-20 h-20 bg-gray-dark text-gray hover:text-white rounded-full flex flex-col items-center pt-3">
          <div>{cta.icon}</div>
          <div className="mt-1 text-sm text-center leading-4">
            {Array.isArray(cta.title)
              ? cta.title.map((ttl) => <Fragment key={ttl}>{ttl}</Fragment>)
              : <>ttl</>}
          </div>
        </a>
      </Link>
      )}
    </div>
  );
}

Diagonal.propTypes = {
  bgClass: PropTypes.string,
  bgCorner: PropTypes.string,
  className: PropTypes.string,
  flipX: PropTypes.bool,
  flipY: PropTypes.bool,
  cta: PropTypes.shape({
    icon: PropTypes.node,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
    href: PropTypes.string,
  }),
  preserveRatio: PropTypes.bool,
};

Diagonal.defaultProps = {
  bgClass: '',
  bgCorner: '',
  className: '',
  flipX: false,
  flipY: false,
  preserveRatio: false,
  cta: {},
};
