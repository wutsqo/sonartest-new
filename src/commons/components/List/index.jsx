import React from "react";
import PropTypes from "prop-types";

const List = ({ className, children }) => {
  return (
    <ul
      className={`grid w-full gap-6 ${className}`}
      style={{ gridTemplateColumns: `repeat(auto-fill, minmax(290px, 1fr))` }}
    >
      {children}
    </ul>
  );
};

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default List;
