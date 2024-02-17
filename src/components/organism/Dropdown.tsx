import React from 'react';
import { createPortal } from 'react-dom';
import SearchInput from '../atom/SearchInput';
import List from '../molecules/List';

export default function Dropdown({
  withSearch,
  onSearch,
  list,
  single = false,
  onSelect,
  search,
  withPortal,
  width,
}: {
  withSearch?: boolean;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  list: Array<string>;
  single?: boolean;
  onSelect: (data: string, single: boolean) => void;
  search: string;
  withPortal?: boolean;
  width: { label: number; dropdown: number };
}) {
  if (withPortal) {
    return createPortal(
      <div
        style={{ width: width.dropdown, left: width.label + 42 }}
        className={`absolute rounded-md border sm:top-[80px] bg-white shadow-lg`}
      >
        {withSearch && <SearchInput onSearch={onSearch} />}
        <List list={list} single={single} onSelect={onSelect} search={search} />
      </div>,
      document.body
    );
  }

  return (
    <div
      style={{ width: width.dropdown, left: width.label + 24 }}
      className={`absolute rounded-md  border top-[50px] bg-white shadow-lg`}
    >
      {withSearch && <SearchInput onSearch={onSearch} />}
      <List list={list} single={single} onSelect={onSelect} search={search} />
    </div>
  );
}
