'use client'
import { clsx } from 'clsx'
import { Link } from '~/components/ui/link'
import { useEffect, useRef, useState } from 'react'

type TocItem = {
  value: string
  url: string
  depth: number
}

export function TableOfContents({ toc, className }: { toc: TocItem[]; className?: string }) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const headingsRef = useRef<HTMLElement[]>([])

  // Theo dõi các phần tử trong nội dung
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '0px 0px -80% 0px', // Điều chỉnh vùng quan sát
        threshold: 0.1, // Ngưỡng hiển thị
      }
    )

    // Lấy tất cả các tiêu đề trong nội dung
    const headings = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'))
    headingsRef.current = headings as HTMLElement[]

    // Bắt đầu quan sát các tiêu đề
    headings.forEach((heading) => observer.observe(heading))

    // Dọn dẹp khi component unmount
    return () => {
      headings.forEach((heading) => observer.unobserve(heading))
    }
  }, [])

  return (
    <div className={clsx('space-y-4', className)}>
      <div className="flex items-center gap-1">
        <span className="text-lg font-medium">On this page</span>
      </div>
      <ul className="flex flex-col space-y-2">
        {toc.map(({ value, depth, url }) => {
          const id = url.replace('#', '') // Lấy id từ URL
          const isActive = activeId === id

          return (
            <li
              key={url}
              className={clsx(
                'font-medium transition-colors',
                isActive
                  ? 'text-blue-500 dark:text-gray-200' // Highlight khi active
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
              )}
              style={{ paddingLeft: (depth - 2) * 16 }}
            >
              <Link href={url}>{value}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
