import { useKBar } from 'kbar'

export function KbarSearchTrigger() {
  const { query } = useKBar()

  return (
    <button
      className="flex w-full items-center rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      onClick={() => query.toggle()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <span className="flex-1 text-left">Quick search...</span>
      <span className="text-base text-gray-400">⌘K</span>
    </button>
  )
}
