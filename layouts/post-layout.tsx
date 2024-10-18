import type { Author, Blog } from 'contentlayer/generated'
import type { CoreContent } from 'pliny/utils/contentlayer'
import type { ReactNode } from 'react'
import { Authors } from '~/components/blog/authors'
import { BackToPosts } from '~/components/blog/back-to-posts'
import { Banner } from '~/components/blog/banner'
import { BlogMeta } from '~/components/blog/blog-meta'
import { Comments } from '~/components/blog/comments'
import { DiscussAndEdit } from '~/components/blog/discuss-and-edit'
import { PostNav } from '~/components/blog/post-nav'
import { PostTitle } from '~/components/blog/post-title'
import { ScrollButtons } from '~/components/blog/scroll-buttons'
import { SocialShare } from '~/components/blog/social-share'
import { TagsList } from '~/components/blog/tags'
import { TableOfContents } from '~/components/blog/toc'
import { Container } from '~/components/ui/container'
import { SITE_METADATA } from '~/data/site-metadata'

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Author>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export function PostLayout({ content, next, prev, children }: LayoutProps) {
  let { slug, images, lastmod, readingTime, date, title, tags, toc, type } = content
  let postUrl = `${SITE_METADATA.siteUrl}/${type.toLowerCase()}/${slug}`

  return (
    <Container className="pt-4 lg:pt-12">
      <ScrollButtons />
      <article className="pt-6">
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <div className="space-y-4">
            <TagsList tags={tags} />
            <PostTitle>{title}</PostTitle>
            <div className="space-y-4 pt-4 md:pt-10">
              <Banner banner={images?.[0] || SITE_METADATA.socialBanner} title={title} />
            </div>
            <div className="flex items-center justify-between pb-4 pt-2">
              <BlogMeta date={date} lastmod={lastmod} slug={slug} readingTime={readingTime} />
              <SocialShare postUrl={postUrl} title={title} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 pb-10 lg:grid-cols-12">
            <div className="col-span-12 divide-y divide-gray-200 dark:divide-gray-700 lg:col-span-8 xl:col-span-9">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert lg:prose-lg">
                {children}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-20">
                <TableOfContents toc={toc} className="hidden lg:block" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <PostNav
              next={next}
              nextLabel="Next article"
              prev={prev}
              prevLabel="Previous article"
            />
            <Comments slug={slug} />
          </div>
        </div>
      </article>
    </Container>
  )
}
