import { useNavigate } from 'react-router-dom'

export const ErrorView = () => {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 bg-white text-center px-6">
      
      <p className="text-6xl font-semibold text-gray-900">404</p>

      <h1 className="text-xl font-medium text-gray-800">
        Page not found
      </h1>

      <p className="text-sm text-gray-500">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <button
        onClick={() => navigate('/')}
        className="rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Go Home
      </button>

    </main>
  )
}