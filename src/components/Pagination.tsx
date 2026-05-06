import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type PaginationProps = {
  page: number;
  maxPages: number;
  onClick: (page: number) => void;
};

export const Pagination = ({ page, maxPages, onClick }: PaginationProps) => {
  const capped = Math.min(maxPages, 500);

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={() => onClick(page - 1)}
        disabled={page <= 1}
        className="flex items-center gap-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 disabled:opacity-30"
      >
        <FiChevronLeft size={16} />
        Prev
      </button>

      <span className="text-sm text-gray-600">
        Page <span className="font-medium text-gray-900">{page}</span> of{' '}
        <span className="font-medium text-gray-900">{capped}</span>
      </span>

      <button
        onClick={() => onClick(page + 1)}
        disabled={page >= capped}
        className="flex items-center gap-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 disabled:opacity-30"
      >
        Next
        <FiChevronRight size={16} />
      </button>
    </div>
  );
};