import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <h1 className="title">Mavel's Fearless</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
        molestias earum eveniet.
      </p>

      <style jsx>{`
        .title,
        .subtitle {
          width: 60rem;
          max-width: 100%;
        }

        .title {
          font-size: 7.2rem;
        }

        .subtitle {
          margin-bottom: 3rem;
        }
      `}</style>
    </Fragment>
  );
};

export default Header;
