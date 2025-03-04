'use client'
import type { Blog, Snippet } from 'contentlayer/generated'
import { HomeIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { BlogMeta } from '~/components/blog/blog-meta'
import { Comments } from '~/components/blog/comments'
import { DiscussOnX } from '~/components/blog/discuss-on-x'
import { EditOnGithub } from '~/components/blog/edit-on-github'
import { PostTitle } from '~/components/blog/post-title'
import { Reactions } from '~/components/blog/reactions'
import { ScrollButtons } from '~/components/blog/scroll-buttons'
import { SocialShare } from '~/components/blog/social-share'
import { TagsList } from '~/components/blog/tags'
import { TableOfContents } from '~/components/blog/toc'
import { Container } from '~/components/ui/container'
import { GradientDivider } from '~/components/ui/gradient-divider'
import { SITE_METADATA } from '~/data/site-metadata'
import type { StatsType } from '~/db/schema'
import type { CoreContent } from '~/types/data'
import Sidebar from './sidebar'
import { KbarSearchTrigger } from '~/components/search/kbar-trigger'

interface PostSimpleProps {
  content: CoreContent<Blog | Snippet>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export function CustomLayout({ content, children }: PostSimpleProps) {
  let { slug, date, lastmod, title, type, tags, readingTime, toc } = content
  let postUrl = `${SITE_METADATA.siteUrl}/${type.toLowerCase()}/${slug}`

  return (
    <div className="flex">
      <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
        <div className="space-y-4 dark:divide-gray-700 lg:sticky lg:top-24">
          <KbarSearchTrigger />
          <Sidebar />
        </div>
      </div>
      <Container className="max-w-3xl pt-4 lg:pt-12">
        <div className="flex items-center space-x-2 text-base text-gray-600 dark:text-gray-400">
          <HomeIcon className="h-4 w-4" />
          <span className="cursor-pointer hover:underline">Docs</span>
          <span>&gt;</span>
          <span>Weaverse Hydrogen</span>
        </div>
        <ScrollButtons />
        <article className="space-y-6 pt-6 lg:space-y-12">
          <div className="space-y-4">
            <PostTitle>{title}</PostTitle>
            <dl>
              <div>
                <dt className="sr-only">Published on</dt>
                <BlogMeta
                  date={date}
                  lastmod={lastmod}
                  type={type.toLowerCase() as StatsType}
                  slug={slug}
                  readingTime={readingTime}
                />
              </div>
            </dl>
          </div>
          <GradientDivider />
          <div className="prose prose-lg max-w-none dark:prose-invert">{children}</div>

          <GradientDivider className="mb-2 mt-1" />

          <div className="space-y-8"></div>
        </article>
      </Container>
      <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
        <div className="space-y-4 divide-y divide-gray-200 dark:divide-gray-700 lg:sticky lg:top-24">
          <TableOfContents toc={toc} />
        </div>
      </div>
    </div>
  )
}
