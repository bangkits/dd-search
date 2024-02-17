import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';
import './tailwind.css';

import SelectedItems from './components/atom/SelectedItems';
import Dropdown from './components/organism/Dropdown';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  single?: boolean;
  withSearch?: boolean;
  list: Array<string>;
  withPortal?: boolean;
  withOutline?: boolean;
}

export const DropdownSearch: FC<Props> = ({
  label = 'label',
  single = false,
  withSearch = false,
  withPortal = false,
  withOutline = false,
  list = [],
}) => {
  const [selected, setSelected] = useState<Array<string>>([]);
  const [isOn, setOn] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [width, setWidth] = useState<{ label: number; dropdown: number }>({
    label: 0,
    dropdown: 0,
  });

  const ref = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (ref.current && labelRef.current) {
      setWidth({
        label: labelRef.current.offsetWidth,
        dropdown: ref.current.offsetWidth,
      });
    }
  }, [ref]);

  const handleClick = () => {
    setOn(prev => !prev);
  };

  const onSelect = (data: string, isSingle: boolean) => {
    if (selected.includes(data)) return;

    if (isSingle) {
      setSelected([data]);
      setOn(prev => !prev);
      return;
    }

    setSelected(prev => [...prev, data]);
  };

  const onRemove = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: string
  ) => {
    event.stopPropagation();
    setSelected(prev => [...prev.filter(val => val !== data)]);
  };

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  return (
    <div className="dropdown flex relative gap-6 items-center">
      <label ref={labelRef}>{label}</label>
      <div
        ref={ref}
        role="button"
        className={`w-[80vw] flex justify-between border rounded-md p-2 items-center h-12 ${!withOutline?'bg-gray-300 outline-none':''}`}
        onClick={handleClick}
      >
        <SelectedItems
          selected={selected}
          onRemove={onRemove}
          single={single}
        />
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
        </svg>
      </div>
      {isOn && (
        <Dropdown
          withSearch={withSearch}
          onSearch={onSearch}
          list={list}
          single={single}
          onSelect={onSelect}
          search={search}
          withPortal={withPortal}
          width={width}
        />
      )}
    </div>
  );
};
