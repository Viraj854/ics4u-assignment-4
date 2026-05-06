import { LinkGroup, Loading } from '@/components'
import { IMAGE_BASE_URL, PERSON_ENDPOINT } from '@/core/constants'
import type { PersonResponse } from '@/core/types'
import { useTmdb } from '@/hooks'
import { FiChevronLeft, FiMapPin } from 'react-icons/fi'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

export const PersonView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, loading } = useTmdb<PersonResponse>(`${PERSON_ENDPOINT}/${id}`, {}, [id])

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-8">
        <Loading />
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-6 py-8 bg-white">

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900"
      >
        <FiChevronLeft size={16} />
        Back
      </button>

      <div className="flex flex-col gap-8 sm:flex-row">

        {data.profile_path ? (
          <img
            src={`${IMAGE_BASE_URL}${data.profile_path}`}
            alt={data.name}
            className="w-48 shrink-0 rounded-lg border border-gray-200 shadow-sm"
          />
        ) : (
          <div className="flex h-64 w-48 items-center justify-center rounded-lg border border-gray-200 bg-gray-100">
            <span className="text-3xl text-gray-400">?</span>
          </div>
        )}

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-gray-900">{data.name}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">

            {data.known_for_department && (
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                {data.known_for_department}
              </span>
            )}

            {data.birthday && <span>Born: {data.birthday}</span>}
            {data.deathday && <span>Died: {data.deathday}</span>}

            {data.place_of_birth && (
              <span className="flex items-center gap-1">
                <FiMapPin size={13} />
                {data.place_of_birth}
              </span>
            )}
          </div>

          {data.biography && (
            <p className="max-w-2xl text-sm leading-relaxed text-gray-600">
              {data.biography}
            </p>
          )}
        </div>
      </div>

      <LinkGroup
        links={[
          { label: 'Career', to: `/person/${id}/career` },
          { label: 'Images', to: `/person/${id}/images` },
        ]}
      />

      <Outlet />
    </div>
  )
}