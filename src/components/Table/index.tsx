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
}

export interface ITrProps {
  children?: ReactNode;
}

export const TableHead: React.FC<ITableHeadProps> = ({ children, divider, dividerLabel }) => {
  return (
    <>
      {divider ? (
        <div>
          <div className="flex flex-col">
            <thead className="flex my-4 mx-4">
              <tr className="flex justify-between w-full">{children}</tr>
            </thead>
          </div>
          <div className="flex items-center bg-white w-full h-8">
            <p className="text-sm text-dark font-bold ml-4">{dividerLabel ?? "Nome da divisão"}</p>
          </div>
        </div>
      ) : (
        <thead className="flex my-4 mx-4">
          <tr className="flex justify-between w-full">{children}</tr>
        </thead>
      )}
    </>
  );
};

export const Th: React.FC<IThProps> = ({ children }) => {
  return <th className="text-base text-dark">{children}</th>;
};

export const TableBody: React.FC<IProps> = ({ children }) => {
  return <tbody className="flex flex-col mx-4">{children}</tbody>;
};

export const Tr: React.FC<ITrProps> = ({ children }) => {
  return <tr className="flex flex-row w-full border-t-2 border-grey items-center h-16">{children}</tr>;
};

export const Td: React.FC<ITrProps> = ({ children }) => {
  return <td className="flex">{children}</td>;
};

export const Table: React.FC<IProps> = ({ children }) => {
  return <table className="table-auto w-full h-full bg-white rounded-lg mb-6">{children}</table>;
};
