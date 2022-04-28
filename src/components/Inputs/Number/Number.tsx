import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { Button, Input, StyledNumber } from './StyledNumber';

type Props = {
  min: number;
  max: number;
  value: number;
  step?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  name: string;
  disabled?: boolean;
};

export const NumberInput = ({
  min,
  name,
  max,
  step = 1,
  disabled,
  register,
  value: defaultValue,
}: Props) => {
  const [value, setValue] = useState(defaultValue);

  const increment = () => {
    if (value < max) {
      setValue(value + step);
    }
  };

  const decrement = () => {
    if (value > min) {
      setValue(value - step);
    }
  };
  console.log(value);

  return (
    <StyledNumber>
      <Button variant="secondary" type="button" onClick={decrement} disabled={disabled}>
        -
      </Button>
      <Input type="number" value={value} readOnly {...register(name)} disabled={disabled} />
      <Button variant="secondary" type="button" onClick={increment} disabled={disabled}>
        +
      </Button>
    </StyledNumber>
  );
};
