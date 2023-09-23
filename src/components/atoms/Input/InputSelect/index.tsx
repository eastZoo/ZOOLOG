import { useEffect, useState } from "react";
import * as S from "../Input.style";

interface SelectProps {
  width?: string;
  size: string;
  layout: string;
  label?: string;
  themeType?: string;
  placeholder?: string;
  options: any;
  register?: any;
  onChange?: any;
  value?: any;
}

export const InputSelect: React.FC<SelectProps> = ({
  width,
  layout,
  size,
  options,
  label,
  themeType,
  placeholder,
  register,
  onChange,
  value,
}) => {
  return (
    <S.InputCommon
      themeType={themeType}
      layout={layout}
      size={size}
      width={width}
    >
      <label>
        {label && label}
        <select {...register} onChange={onChange} value={value}>
          {placeholder && <option>{placeholder}</option>}
          {options?.map((option: any, idx: number) => {
            return (
              <option key={idx} value={option?.id}>
                {option?.name}
              </option>
            );
          })}
        </select>
      </label>
    </S.InputCommon>
  );
};
