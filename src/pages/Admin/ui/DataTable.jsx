import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { useState } from "react"
import icons from "@/icons"
import PrimaryButton from "@/components/Ui/Button/PrimaryButton"

export function DataTable({ data, columns, searchValue }) {
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})

  const { SortAlphabetDesc, SortAlphabetAsc, Sort } = icons

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <div className="w-full">
      {searchValue ?
        <div className="flex items-center py-4">
          <input
            placeholder="جست و جو ایمیل"
            value={table.getColumn(searchValue)?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn(searchValue)?.setFilterValue(event.target.value)
            }
            className="max-w-sm bg-gray-200 pr-4 w-72 py-2 rounded-lg text-sm"
          />
        </div>
        :
        ""}

      <div className="overflow-hidden rounded-md border mt-5 bg-gray-200 border-gray-400">
        <Table className="border-gray-400">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      header.column.getCanSort() ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          <span>
                            {header.column.getIsSorted() === "asc"
                              ? <SortAlphabetDesc />
                              : header.column.getIsSorted() === "desc"
                                ? <SortAlphabetAsc />
                                : <Sort />}
                          </span>
                        </Button>
                      ) : (
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                      )
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between py-4">
        {/* کنترل سایز صفحه */}
        <div className="flex items-center gap-2">
          <span>تعداد در صفحه:</span>
          <select
            className="bg-gray-200 px-2 py-1 rounded"
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* شماره صفحات */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            قبلی
          </Button>

          <span>
            صفحه{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} از{" "}
              {table.getPageCount()}
            </strong>
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            بعدی
          </Button>
        </div>
      </div>

    </div>
  )
}
