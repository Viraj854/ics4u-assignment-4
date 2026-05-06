import { Loading, Pagination } from '@/components'
import { TV_ENDPOINT } from '@/core/constants'
import type { ReviewsResponse } from '@/core/types'
import { useTmdb } from '@/hooks'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const TvReviewsView = () => {
  const { id } = useParams()
  const [page, setPage] = useState(1)
  const { data, loading } = useTmdb<ReviewsResponse>(
    `${TV_ENDPOINT}/${id}/reviews`,
    { page },
    [id, page],
  )

  if (loading) return <Loading />
  if (!data) return null

  return (
    <div className="py-6 space-y-6 bg-white">
      {data.results.length ? (
        <>
          <div className="space-y-4">
            {data.results.map((review) => (
              <div
                key={review.id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">
                    {review.author}
                  </p>
                  <p className="text-xs text-gray-400">
                    {review.created_at
                      ? new Date(review.created_at).toLocaleDateString()
                      : ''}
                  </p>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-4">
                  {review.content}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Pagination
              page={page}
              maxPages={data.total_pages}
              onClick={setPage}
            />
          </div>
        </>
      ) : (
        <p className="py-12 text-center text-gray-400">
          No reviews available.
        </p>
      )}
    </div>
  )
}