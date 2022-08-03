import React from 'react';

import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvgSelector';

import { ItemType } from './ThisDayInfo';
import s from './ThisDayInfo.module.scss';

export const ThisDayItem = ({ item }: ThisDayItemPropsType) => {
  const { iconId, name, value } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={iconId} />
      </div>
      <div className={s.indicatorName}>{name}</div>
      <div className={s.indicatorValue}>{value}</div>
    </div>
  );
};

type ThisDayItemPropsType = {
  item: ItemType;
};
