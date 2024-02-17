import React from 'react';

export default function SelectedItems({
  selected,
  onRemove,
  single,
}: {
  selected: Array<string>;
  onRemove: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: string
  ) => void;
  single: boolean;
}) {
  return (
    <div className="flex gap-2 text-xs sm:text-base overflow-x-auto">
      {selected.map((data: string, index: number) => (
        <div
          key={index}
          className={`flex  ${
            !single ? 'bg-gray-200 py-1 px-2 rounded-full gap-1' : ''
          }`}
          onClick={e => e.stopPropagation()}
        >
          <span className="">{data}</span>
          {!single && (
            <button
              className="rounded-full border border-gray-400"
              onClick={e => onRemove(e, data)}
            >
              <svg
                className="h-4 sm:h-6 w-4 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g id="Menu / Close_SM">
                    {' '}
                    <path
                      id="Vector"
                      d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{' '}
                  </g>{' '}
                </g>
              </svg>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
