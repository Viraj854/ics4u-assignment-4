import { Loading } from '@/components'
import { IMAGE_BASE_URL, TV_ENDPOINT } from '@/core/constants'
import type { SeasonsResponse } from '@/core/types'
import { useTmdb } from '@/hooks'
import { useNavigate, useParams } from 'react-router-dom'

export const SeasonsView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, loading } = useTmdb<SeasonsResponse>(`${TV_ENDPOINT}/${id}`, {}, [id])

  if (loading) { return <Loading /> }
  if (!data) { return null }

  return (
    <div className="py-6 space-y-3 bg-white">
      {data.seasons.length ? (
        data.seasons.map((season) => (
          <div
            key={season.id}
            onClick={() => navigate(`/tv/${id}/seasons/${season.season_number}`)}
            className="flex cursor-pointer gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:bg-gray-50 hover:shadow-sm"
          >
            {season.poster_path ? (
              <img
                src={`${IMAGE_BASE_URL}${season.poster_path}`}
                alt={season.name}
                className="h-24 w-16 shrink-0 rounded-lg object-cover"
              />
            ) : (
              <div className="flex h-24 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400">
                No image
              </div>
            )}

            <div className="flex-1 space-y-1">
              <p className="font-semibold text-gray-900">{season.name}</p>

              <p className="text-xs text-gray-500">
                {season.episode_count} Episodes
              </p>

              {season.overview && (
                <p className="line-clamp-2 text-xs text-gray-600">
                  {season.overview}
                </p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="py-12 text-center text-gray-400">
          No seasons available.
        </p>
      )}
    </div>
  )
}