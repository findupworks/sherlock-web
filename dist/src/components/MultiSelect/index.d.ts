import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
export declare type OptionsProps = {
    value: any;
    label: any;
};
export interface IProps {
    options: Array<OptionsProps>;
    onChange: (option: any) => void;
    onClickButton?: (event: any) => void;
    labelButton?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
}
export declare const MultiSelect: React.FC<IProps>;
//# sourceMappingURL=index.d.ts.map