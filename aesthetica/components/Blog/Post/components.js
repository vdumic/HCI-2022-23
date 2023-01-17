export const H3 = (props) => (
  <h3
    className="md:text-3xl sm:text-2xl text-xl mt-12 capitalize "
    {...props}
  />
);

export const Ul = (props) => (
  <ul className=" sm:text-base text-sm my-4" {...props} />
);

export const Ol = (props) => <ol className="my-4" {...props} />;

export const Li = (props) => (
  <li className=" sm:text-base text-sm list-disc list-inside ml-4">
    <span className="font-semibold" {...props} />
  </li>
);

export const P = (props) => (
  <p
    className=" sm:text-base text-sm mt-4 leading-7 font-semibold"
    {...props}
  />
);
