import React, { ReactNode } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
export interface IProps {
  children?: ReactNode;
}
export interface ITableHeadProps {
  children?: ReactNode;
  divider?: boolean;
  dividerLabel?: string;
}

export interface IThProps {
  children?: ReactNode;
  status?: boolean;
}

export interface ITrProps {
  children?: ReactNode;
}

export interface ITdProps {
  status?: boolean;
  statusColor?: string;
  children?: ReactNode;
}

export const TableHead: React.FC<ITableHeadProps> = ({ children }) => {
  return <thead className="border-b-2 border-grey">{children}</thead>;
};

export const Th: React.FC<IThProps> = ({ children, status }) => {
  if (status) {
    return <td className="">{children}</td>;
  }
  return <td className="p-3 text-base text-dark font-semibold tracking-wide text-left">{children}</td>;
};

export const TableBody: React.FC<IProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const Tr: React.FC<ITrProps> = ({ children }) => {
  return <tr className="border-b-2 border-grey items-center">{children}</tr>;
};

export const Td: React.FC<ITdProps> = ({ children, status, statusColor }) => {
  if (status) {
    return (
      <td className="">
        <div className={`w-2 pt-2 ml-1 pb-10 bg-${statusColor}`}></div>
      </td>
    );
  }
  return <td className="p-3 text-sm text-dark">{children}</td>;
};

export const Table: React.FC<IProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto bg-white rounded-lg mb-6 w-full">{children}</table>
    </div>
  );
};
