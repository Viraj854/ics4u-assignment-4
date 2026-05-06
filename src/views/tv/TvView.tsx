import { LinkGroup, Loading, Modal } from '@/components'
import { IMAGE_BASE_URL, ORIGINAL_IMAGE_BASE_URL, TV_ENDPOINT } from '@/core/constants'
import type { MovieRepsonse } from '@/core/types'
import { useTmdb } from '@/hooks'
import { FiStar } from 'react-icons/fi'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

export const TvView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, loading } = useTmdb<MovieRepsonse>(`${TV_ENDPOINT}/${id}`, {}, [id])

  if (loading) {
    return (
      <Modal onClose={() => navigate(-1)}>
        <Loading />
      </Modal>
    )
  }

  if (!data) return null

  const title = data.name ?? data.title ?? 'Unknown'
  const year = data.first_air_date ? new Date(data.first_air_date).getFullYear() : ''
  const score = typeof data.vote_average === 'number' ? data.vote_average.toFixed(1) : '—'

  return (
    <Modal onClose={() => navigate(-1)}>

      {data.backdrop_path && (
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={`${ORIGINAL_IMAGE_BASE_URL}${data.backdrop_path}`}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
      )}

      <div className="relative -mt-16 flex flex-col gap-6 bg-white px-6 pb-6 pt-4 sm:flex-row">

        {data.poster_path && (
          <img
            src={`${IMAGE_BASE_URL}${data.poster_path}`}
            alt={title}
            className="w-40 shrink-0 rounded-lg border border-gray-200 shadow-md"
          />
        )}

        <div className="flex-1 space-y-3 pt-2 sm:pt-8">
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            {year && <span>{year}</span>}
            {data.number_of_seasons && (
              <span>{data.number_of_seasons} Season{data.number_of_seasons !== 1 ? 's' : ''}</span>
            )}
            <span className="flex items-center gap-1 font-medium text-gray-700">
              <FiStar size={14} />
              {score}
            </span>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-gray-600">
            {data.overview}
          </p>
        </div>
      </div>

      <div className="bg-white px-6 pb-4">
        <LinkGroup
          links={[
            { label: 'Credits', to: `/tv/${id}/credits` },
            { label: 'Trailers', to: `/tv/${id}/trailers` },
            { label: 'Reviews', to: `/tv/${id}/reviews` },
            { label: 'Seasons', to: `/tv/${id}/seasons` },
          ]}
        />
        <div className="pt-4">
          <Outlet />
        </div>
      </div>

    </Modal>
  )
}