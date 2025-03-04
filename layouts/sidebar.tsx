import React from 'react'
import './sidebar.css'
export default function Sidebar() {
  const sections = [
    {
      title: 'Weaverse Hydrogen',
      links: [
        { name: 'Overview', href: '/docs/hydrogen/overview', active: true },
        { name: 'Getting Started', href: '/docs/hydrogen/getting-started' },
        { name: 'Tutorial (20m)', href: '/docs/hydrogen/tutorial' },
      ],
    },
    {
      title: 'Guides',
      links: [
        { name: 'Prerequisites', href: '/docs/guides/prerequisites' },
        { name: 'Project Structure', href: '/docs/guides/project-structure' },
        { name: 'Environment Variables', href: '/docs/guides/environment-variables' },
        { name: 'Weaverse Hydrogen Component', href: '/docs/guides/weaverse-component' },
        { name: 'Component Schema', href: '/docs/guides/component-schema' },
        { name: 'Input Settings', href: '/docs/guides/input-settings' },
        { name: 'Rendering a Weaverse Page', href: '/docs/guides/rendering-page' },
        { name: 'Data Fetching and Caching', href: '/docs/guides/fetching-and-caching' },
        { name: 'Global Theme Settings', href: '/docs/guides/global-theme-settings' },
        { name: 'Global Section', href: '/docs/guides/global-section' },
        { name: 'Navigation configuration', href: '/docs/guides/navigation-config' },
        { name: 'Content Security Policy', href: '/docs/guides/csp' },
        { name: 'Third-party Integration', href: '/docs/guides/third-party-integration' },
        { name: 'Localization', href: '/docs/guides/localization' },
      ],
    },
    {
      title: 'Deployment',
      links: [
        { name: 'Deploy to Shopify Oxygen', href: '/docs/deployment/oxygen' },
        {
          name: 'Hydrogen Domain, Checkout, and Analytics Setup',
          href: '/docs/deployment/hydrogen-domain-checkout-and-analytics-setup',
        },
        { name: 'Deploy to Vercel (Deprecated)', href: '/docs/deployment/vercel' },
      ],
    },
    {
      title: 'API References',
      links: [
        { name: 'WeaverseClient', href: '/docs/api/weaverse-client' },
        { name: 'useThemeSettings', href: '/docs/api/use-theme-settings' },
        { name: 'useWeaverse', href: '/docs/api/use-weaverse' },
        { name: 'useItemInstance', href: '/docs/api/use-item-instance' },
        { name: 'getSelectedProductOptions', href: '/docs/api/get-selected-product-options' },
        { name: 'withWeaverse', href: '/docs/api/with-weaverse' },
      ],
    },
    {
      title: 'Developer Tools',
      links: [
        { name: 'Weaverse CLI', href: '/docs/dev-tools/weaverse-cli' },
        { name: 'Weaverse SDKs', href: '/docs/dev-tools/weaverse-sdks' },
      ],
    },
    {
      title: 'Advanced',
      links: [
        { name: 'Custom Pages', href: '/docs/advanced/custom-page' },
        { name: 'Custom Routing', href: '/docs/advanced/custom-routing' },
        { name: 'Custom Templates', href: '/docs/advanced/custom-template' },
        {
          name: 'Migrating Hydrogen Project to Weaverse',
          href: '/docs/advanced/hydrogen-to-weaverse',
        },
      ],
    },
    {
      title: 'Weaverse Studio',
      links: [
        {
          name: 'Customizing Hydrogen Project inside Weaverse Studio',
          href: '/docs/studio/customizing',
        },
        { name: 'Troubleshooting', href: '/docs/studio/troubleshooting' },
      ],
    },
    {
      title: 'Weaverse Marketplace',
      links: [
        { name: 'Overview', href: '/docs/marketplace/overview' },
        { name: 'Submit a Theme to Weaverse Marketplace', href: '/docs/marketplace/submit-theme' },
        {
          name: 'Pilot - Shopify Hydrogen Starter Theme',
          href: '/docs/marketplace/the-pilot-theme',
        },
      ],
    },
    {
      title: 'Themes',
      links: [{ name: 'Theme "Pilot" Sections', href: '/docs/themes/pilot-sections' }],
    },
  ]

  return (
    <div className="scrollbar-hidden relative h-full w-full lg:h-[calc(100vh-228px)]">
      <div style={{ minWidth: '100%', display: 'table' }}>
        <nav className="space-y-6 pr-2 lg:space-y-8">
          {sections.map((section, sectionIndex) => (
            <div className="space-y-3" key={sectionIndex}>
              <div className="text-info-900 dark:text-info-200 font-semibold">{section.title}</div>
              <div className="border-info-200 dark:border-info-700 flex flex-col space-y-2 border-l">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    className={`leading-5.5 -ml-px border-l pl-4 text-sm ${
                      link.active
                        ? 'border-primary-500 font-medium text-primary-500 dark:border-primary-400 dark:text-primary-400'
                        : 'text-info-600 hover:text-info-900 dark:text-info-400 dark:hover:text-info-200 hover:border-info-400 dark:hover:border-info-300 border-transparent'
                    }`}
                    href={link.href}
                    data-discover="true"
                  >
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
