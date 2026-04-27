import type React from 'react'

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {}
export const Table = ({ className, ...props }: TableProps) => (
  <div style={{ overflowX: 'auto' }}>
    <table className={className} {...props} />
  </div>
)

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
export const TableHeader = ({ className, ...props }: TableHeaderProps) => <thead className={className} {...props} />

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
export const TableBody = ({ className, ...props }: TableBodyProps) => <tbody className={className} {...props} />

export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
export const TableFooter = ({ className, ...props }: TableFooterProps) => <tfoot className={className} {...props} />

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}
export const TableRow = ({ className, ...props }: TableRowProps) => <tr className={className} {...props} />

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}
export const TableHead = ({ className, ...props }: TableHeadProps) => <th className={className} {...props} />

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}
export const TableCell = ({ className, ...props }: TableCellProps) => <td className={className} {...props} />

export interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {}
export const TableCaption = ({ className, ...props }: TableCaptionProps) => <caption className={className} {...props} />
