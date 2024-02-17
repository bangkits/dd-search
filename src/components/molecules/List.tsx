import React from 'react';
import HighlightText from '../atom/HighlightText';

export default function List({
  list,
  search,
  single,
  onSelect,
}: {
  list: Array<string>;
  search: string;
  single: boolean;
  onSelect: (data: string, single: boolean) => void;
}) {
  return (
    <ul className="p-2">
      {list.length > 0 &&
        list.map((data, index) => (
          <li key={index} onClick={() => onSelect(data, single)} className='hover:bg-green-100'>
            <HighlightText text={data} highlight={search} />
          </li>
        ))}
    </ul>
  );
}
