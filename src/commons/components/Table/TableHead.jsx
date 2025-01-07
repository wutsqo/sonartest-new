import React from "react";
import PropTypes from "prop-types";

const TableHead = (props) => {
  return <thead>{props.children}</thead>;
};

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableHead;
