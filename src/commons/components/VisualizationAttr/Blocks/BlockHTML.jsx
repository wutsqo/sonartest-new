import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";

const BlockHTML = ({ content, label }) => {
  return (
    <>
      <Label label={label} />
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

BlockHTML.propTypes = {
  content: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default BlockHTML;
