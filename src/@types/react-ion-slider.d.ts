declare module 'react-ion-slider' {
    import * as React from 'react';

    export interface IonRangeSliderProps {
      type?: string;
      skin?: string;
      min?: number;
      max?: number;
      from?: number;
      to?: number;
      step?: number;
      grid?: boolean;
      hide_min_max?: boolean;
      hide_from_to?: boolean;
      onChange?: (data: { from: number; to: number }) => void;
      onFinish?: (data: { from: number; to: number }) => void;
    }

    export default class IonRangeSlider extends React.Component<IonRangeSliderProps> {
      update(options: IonRangeSliderProps): void;
    }
  }
