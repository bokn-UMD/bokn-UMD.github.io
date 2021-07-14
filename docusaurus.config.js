const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'bokn-UMD',
  tagline: 'BOKN UMD developments',
  url: 'https://bokn-umd.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
 // favicon: 'img/favicon.ico',
  organizationName: 'bokn-umd', // Usually your GitHub org/user name.
  projectName: 'bokn-umd.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'bokn-UMD',
      logo: {
        alt: 'bokn-UMD',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'bokn-UMD',
          position: 'left',
          label: 'Documentation',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/bokn-UMD/bokn-UMD.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} bokn-UMD.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/bokn-UMD/bokn-UMD.github.io/blob/master/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
