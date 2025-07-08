import React, {createContext, useContext, ReactNode} from 'react';

type ContextType<T> = {
  selectedValue: T;
  onValueChange: (value: T) => void;
};

const CheckboxGroupContext = createContext<ContextType<any> | null>(null);

export function CheckboxGroup<T>({
  value,
  onValueChange,
  children,
}: {
  value: T;
  onValueChange: (value: T) => void;
  children: ReactNode;
}) {
  return (
    <CheckboxGroupContext.Provider
      value={{selectedValue: value, onValueChange}}>
      {children}
    </CheckboxGroupContext.Provider>
  );
}

export function useCheckboxGroup<T>(): ContextType<T> {
  const ctx = useContext(CheckboxGroupContext) as ContextType<T> | null;
  if (!ctx) throw new Error('Checkbox must be used within a CheckboxGroup');
  return ctx;
}
