import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Banner, Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Link from "next/link";

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = (
    <Banner storageKey="some-key">🚀 <Link href="https://versapanel.net" className="underline font-semibold hover:text-gray-100 transition">
        Versa Panel
        </Link>{" "}
        – Currently in <span className="italic font-medium">Beta</span>!
    </Banner>
  );
  
const navbar = (
    <Navbar
        logo={<img src="/images/general/logo.png" alt="Logo" width={40} height={20}/>}
        // ... Your additional navbar options
    />
)
const footer = <Footer>{new Date().getFullYear()} © Versa Development.</Footer>

export default async function RootLayout({children}) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
        <Head
            // ... Your additional head options
        >
            <link rel="shortcut icon" href="/images/general/icon.png"/>
            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
        <Layout
            banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/versa-development/documentation"
            footer={footer}
            // ... Your additional layout options
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}