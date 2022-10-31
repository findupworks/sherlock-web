import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { PaginationVariant, PaginationEntrieOrientation } from "../../types";
export declare enum PaginationEntries {
    ten = 10,
    twenty = 20,
    fifty = 50,
    hundred = 100
}
export interface IProps {
    variant?: PaginationVariant;
    entrieOrientation?: PaginationEntrieOrientation;
    currentPage: number;
    totalPages: number;
    totalEntries: number;
    entrieLabel?: string;
    showingLabel?: string;
    ofLabel?: string;
    toLabel?: string;
    onChangePage: (page: number) => void;
}
export declare const Pagination: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map