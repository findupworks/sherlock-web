import React, { ReactNode } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import classname from "classnames";
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
}

export interface ITrProps {
  children?: ReactNode;
}

export interface ITdProps {
  badge?: boolean;
  badgeColor?: string;
  children?: ReactNode;
}

export const TableHead: React.FC<ITableHeadProps> = ({ children }) => {
  return (
    <thead className="border-b-2 border-grey">
      <tr>{children}</tr>
    </thead>
  );
};

export const Th: React.FC<IThProps> = ({ children }) => {
  return <th className="p-3 text-base text-dark font-semibold tracking-wide text-left">{children}</th>;
};

export const TableBody: React.FC<IProps> = ({ children }) => {
  return <tbody className="mx-4">{children}</tbody>;
};

export const Tr: React.FC<ITrProps> = ({ children }) => {
  return <tr className="border-b-2 border-grey items-center">{children}</tr>;
};

export const Td: React.FC<ITdProps> = ({ children, badge, badgeColor }) => {
  return (
    <>
      {badge ? (
        <td className={classname(`p-3 text-sm border-l-4 border-${badgeColor}`)}>{children}</td>
      ) : (
        <td className="p-3 text-sm">{children}</td>
      )}
    </>
  );
};

export const Table: React.FC<IProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto bg-white rounded-lg mb-6">{children}</table>
    </div>
  );
};
