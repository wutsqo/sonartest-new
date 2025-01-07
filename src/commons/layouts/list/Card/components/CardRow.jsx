import React from "react";
import PropTypes from "prop-types";
import { ListItem, VisualizationAttr } from "@/commons/components";

const CardRow = ({ item, itemsAttrs, itemsEvents }) => {
  return (
    <ListItem>
      {/* Data Binding [singularName /] Card Element */}
      <div className="card-body justify-between">
        {itemsAttrs?.map((itemsAttr) => (
          <VisualizationAttr
            content={item[itemsAttr.featureName]}
            key={`${itemsAttr.label}-${item[itemsAttr.featureName]}`}
            label={itemsAttr.label}
          />
        ))}
        <div className="card-actions justify-end">
          {/* View Element Event [singularName /] Card Element*/}
          {itemsEvents(item)?.map((event) => event)}
        </div>
      </div>
    </ListItem>
  );
};

CardRow.propTypes = {
  item: PropTypes.object.isRequired,
  itemsAttrs: PropTypes.array.isRequired,
  itemsEvents: PropTypes.func.isRequired,
};

export default CardRow;
