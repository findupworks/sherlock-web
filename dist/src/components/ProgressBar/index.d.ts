import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ProgressBarTypeKanbanVariant } from '../../types';
export interface IProps {
    progress: number;
    type?: string;
    isFinished?: ProgressBarTypeKanbanVariant;
}
export declare const ProgressBar: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map