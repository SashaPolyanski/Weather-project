import React from 'react';

import s from './Days.module.scss';

export const Tabs = () => {
  const tabs: TabType[] = [
    { value: 'На неделю' },
    { value: 'На 10 дней' },
    { value: 'На месяц' },
  ];
  return (
    <div className={s.tabs}>
      <div className={s.tabsWrapper}>
        {tabs.map((tab: TabType) => (
          <div className={`${s.tab} ${s.active}`} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
};

type TabType = {
  value: string;
};
