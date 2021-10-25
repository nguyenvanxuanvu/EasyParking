import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'
import Button from '../Button/Button'

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    //canPreviousPage,
    //canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    //setPageSize,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    usePagination
  )

  const { pageIndex, pageSize } = state

  return (
    <div style={{ textAlign: "center", width: "1200px" }}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button btnName="<<" bgcolor="#211931" onClick={() => gotoPage(0)} />
        <Button btnName="Previous" bgcolor="#211931" onClick={() => previousPage()} />
        <Button btnName="Next" bgcolor="#211931" onClick={() => nextPage()} />
        <Button btnName=">>" bgcolor="#211931" onClick={() => gotoPage(pageCount - 1)} />
        <span id="numPage">
          <strong>Page{' '}{pageIndex + 1} of {pageOptions.length}</strong>
        </span>
      </div>
    </div>
  )
}
