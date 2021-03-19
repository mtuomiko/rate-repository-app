import React from 'react';
import { Picker } from '@react-native-picker/picker';

export type OrderState = 'latest' | 'highestRated' | 'lowestRated';

const OrderPicker = ({ order, setOrder }: {
  order: OrderState;
  setOrder: React.Dispatch<React.SetStateAction<OrderState>>
}) => {
  const options: Array<{ label: string, value: OrderState }> = [
    { label: 'Latest repositories', value: 'latest' },
    { label: 'Highest rated repositories', value: 'highestRated' },
    { label: 'Lowest rated repositories', value: 'lowestRated' },
  ];

  return (
    <Picker
      selectedValue={order}
      onValueChange={(itemValue) => {
        // This is still hacky but didn't find a clean solution.
        setOrder(itemValue as OrderState);
      }}
    >
      {options.map((o, i) => {
        return (
          <Picker.Item key={i} label={o.label} value={o.value} />
        );
      })}
    </Picker>
  );
};

export default OrderPicker;