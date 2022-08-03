import React from 'react';

import { GlobalSvgSelector } from '../../../assets/icons/global/GlobalSvgSelector';
import { ItemType } from '../../home/components/thisDayInfo/ThisDayInfo';
import { ThisDayItem } from '../../home/components/thisDayInfo/ThisDayItem';

import s from './Popup.module.scss';

export const Popup = () => {
  const items = [
    {
      iconId: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      iconId: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      iconId: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      iconId: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];
  return (
    <>
      <div className={s.blur} />
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.dayTemp}>20°</div>
          <div className={s.dayName}>Среда</div>
          <div className={s.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={s.dayTime}>
            Время: <span>21:00</span>{' '}
          </div>
          <div className={s.dayCity}>
            Город: <span>CityOfAngels</span>{' '}
          </div>
        </div>
        <div className={s.thisDayInfo}>
          <div className={s.thisDayInfoItems}>
            {items.map((item: ItemType) => (
              <ThisDayItem item={item} key={item.iconId} />
            ))}
          </div>
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};

type PopupType = {};
