import React from 'react';
import { Picker } from '@react-native-picker/picker';

export type OrderState = 'latest' | 'highestRated' | 'lowestRated';

const OrderPicker = ({ order, setOrder }: {
  order: OrderState;
  setOrder: React.Dispatch<React.SetStateAction<OrderState>>
}): JSX.Element => {
  const options: Array<{ label: string, value: OrderState }> = [
    { label: 'Latest repositories', value: 'latest' },
    { label: 'Highest rated repositories', value: 'highestRated' },
    { label: 'Lowest rated repositories', value: 'lowestRated' },
  ];

  return (
    <Picker
      selectedValue={order}
      onValueChange={(itemValue) => {
        // Expo SDK 38 compatible Picker probably has lacking TS support?
        // Ended up with this hack
        // TODO 19.3.2021 check this for Expo 40?
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