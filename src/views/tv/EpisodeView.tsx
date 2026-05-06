import { Loading } from '@/components'
import { IMAGE_BASE_URL, TV_ENDPOINT } from '@/core/constants'
import type { EpisodesResponse } from '@/core/types'
import { useTmdb } from '@/hooks'
import { useNavigate, useParams } from 'react-router-dom'

export const EpisodeView = () => {
  const { id, seasonNumber } = useParams()
  const navigate = useNavigate()
  const { data, loading } = useTmdb<EpisodesResponse>(
    `${TV_ENDPOINT}/${id}/season/${seasonNumber}`,
    {},
    [id, seasonNumber],
  )

  if (loading) { return <Loading /> }
  if (!data) { return null }

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-6 py-8 bg-white">
      <div className="space-y-4">
        <button
          onClick={() => navigate(-1)}
          className="text-sm font-medium text-gray-500 hover:text-gray-900"
        >
          Back
        </button>

        <h2 className="text-lg font-semibold text-gray-900">
          Season {seasonNumber} Episodes
        </h2>
      </div>

      <div className="space-y-3">
        {data.episodes.map((ep) => (
          <div
            key={ep.id}
            className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow-sm hover:bg-gray-50"
          >
            {ep.still_path ? (
              <img
                src={`${IMAGE_BASE_URL}${ep.still_path}`}
                className="h-20 w-32 shrink-0 rounded-lg object-cover"
              />
            ) : (
              <div className="flex h-20 w-32 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400">
                No image
              </div>
            )}

            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-gray-400">
                  EP {ep.episode_number}
                </span>

                <p className="font-medium text-gray-900">{ep.name}</p>

                {ep.vote_average > 0 && (
                  <span className="ml-auto text-xs font-medium text-gray-500">
                    ⭐ {ep.vote_average.toFixed(1)}
                  </span>
                )}
              </div>

              {ep.air_date && (
                <p className="text-xs text-gray-400">{ep.air_date}</p>
              )}

              {ep.overview && (
                <p className="line-clamp-2 text-xs text-gray-600">
                  {ep.overview}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}