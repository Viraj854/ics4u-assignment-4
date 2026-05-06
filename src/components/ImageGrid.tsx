import { IMAGE_BASE_URL } from '@/core/constants';

type ImageGridProps = {
  results: Array<{
    id: number;
    imagePath: string | null;
    primaryText: string;
    secondaryText?: string;
  }>;
  onClick?: (id: number) => void;
};

export const ImageGrid = ({ results, onClick }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {results.map((result) => (
        <div
          key={result.id}
          onClick={() => onClick?.(result.id)}
          className={`group overflow-hidden rounded-xl bg-white shadow-sm transition ${onClick ? 'cursor-pointer hover:shadow-md' : ''
            }`}
        >
          {result.imagePath ? (
            <img
              className="h-64 w-full object-cover rounded-t-xl"
              src={`${IMAGE_BASE_URL}${result.imagePath}`}
              alt={result.primaryText}
            />
          ) : (
            <div className="flex h-64 w-full items-center justify-center bg-gray-100 text-xs text-gray-400">
              {result.primaryText}
            </div>
          )}

          <div className="p-3">
            <p className="truncate text-sm font-medium text-gray-900">{result.primaryText}</p>
            {result.secondaryText && (
              <p className="truncate text-xs text-gray-500">{result.secondaryText}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};