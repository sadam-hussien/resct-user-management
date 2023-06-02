import React, { useMemo } from "react";

import { useTable, useRowSelect } from "react-table";

import { Table, Alert } from "react-bootstrap";

import Actions from "./Actions";

import InnerActions from "./InnerActions";

import Checkbox from "./Checkbox";

export default function MainTable({
  actions,
  innerActions,
  selection,
  data,
  columns,
}) {
  // table data
  const tableData = useMemo(() => data || [], [data]);

  // table columns
  const tableColumns = useMemo(() => columns || [], [columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    selectedFlatRows,
  } = useTable(
    {
      columns: tableColumns,
      data: tableData,
    },
    useRowSelect,

    // handle selection -> checkbox
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        if (selection) {
          return [
            {
              id: "selection",
              Header: ({ getToggleAllRowsSelectedProps }) => (
                <Checkbox {...getToggleAllRowsSelectedProps()} />
              ),
              Cell: ({ row }) => (
                <Checkbox {...row.getToggleRowSelectedProps()} />
              ),
              style: {
                width: "60px",
              },
              class: "select-inp",
            },
            ...columns,
          ];
        }
        return columns;
      });
    },

    // handle actions {deleting, view, edit, message}
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        if (innerActions) {
          return [
            ...columns,
            {
              id: "innerActions",
              Header: "actions",
              Cell: ({ row }) => (
                <InnerActions
                  {...row.getToggleRowSelectedProps()}
                  data={row.original}
                  actions={innerActions}
                />
              ),
              style: {
                minWidth: "200px",
                maxWidth: "300px",
              },
            },
          ];
        }
        return columns;
      });
    }
  );

  return (
    <section className="main-table-section">
      {/* top area  */}
      <div className="main-table__header-area">
        {actions ? (
          <Actions actions={actions} selectedRows={selectedFlatRows} />
        ) : null}
      </div>

      <div className="main-table-content">
        <Table responsive hover {...getTableProps()} className="main-table m-0">
          {/* head  */}
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th
                      {...column.getHeaderProps()}
                      style={column.style}
                      className={`${column.class} text-capitalize`}
                    >
                      {column.render("Header")}
                    </th>
                  ))
                }
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td
                          {...cell.getCellProps()}
                          className={cell.column.class}
                          style={cell.column.style}
                        >
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {!tableData.length && (
        <Alert variant="secondary" className="table-not-found text-capitalize">
          No items found
        </Alert>
      )}
    </section>
  );
}
