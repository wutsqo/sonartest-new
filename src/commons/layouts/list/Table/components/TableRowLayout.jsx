import React from "react";

import { TableRow, TableCell } from "@/commons/components";

const TableRowLayout = ({
  item,
  detail,
  itemsAttrs,
  itemsEvents,
  itemsModals,
}) => {
  return (
    <TableRow distinct={false} onClick={() => detail(item)}>
      {/* Data Binding Pengeluaran Table Element*/}
      {itemsAttrs?.map((itemsAttr) => (
        <TableCell
          key={itemsAttr.id}
          id={itemsAttr.id}
          isCurrency={itemsAttr.condition.includes("isCurrency")}
          isHiddenMobile={itemsAttr.condition.includes("isHiddenMobile")}
        >
          {item[itemsAttr.featureName]}
        </TableCell>
      ))}
      {itemsEvents && (
        <>
          <TableCell isHiddenMobile>
            <div className="flex btn-group gap-2">
              {/* View Element Event Pengeluaran Table Element*/}
              {itemsEvents(item)?.map((event) => event)}
            </div>
          </TableCell>
          {itemsModals(item)?.map((modal) => modal)}
        </>
      )}
    </TableRow>
  );
};

export default TableRowLayout;
