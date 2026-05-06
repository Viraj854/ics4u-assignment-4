import { useNavigate } from 'react-router-dom'

export const HomeView = () => {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-white px-6">
      <section className="w-full max-w-3xl space-y-10 text-center">

        <h1 className="text-6xl font-semibold tracking-tight text-gray-900">
          TMDB Explorer
        </h1>

        <p className="mx-auto max-w-xl text-base text-gray-500">
          Search movies and TV shows.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => navigate('/movies')}
            className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Browse Movies
          </button>

          <button
            onClick={() => navigate('/television')}
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Browse TV
          </button>
        </div>
      </section>
    </main>
  )
}