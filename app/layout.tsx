import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import portfolioData from "@/content/portfolio.json";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: portfolioData.meta.title,
        template: "%s | Rohit Karthik"
    },
    description: portfolioData.meta.description,
    keywords: portfolioData.meta.keywords,
    authors: [{ name: portfolioData.meta.author, url: portfolioData.meta.url }],
    creator: portfolioData.meta.author,
    publisher: portfolioData.meta.author,
    metadataBase: new URL(portfolioData.meta.url),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: portfolioData.meta.url,
        title: portfolioData.meta.title,
        description: portfolioData.meta.description,
        siteName: "Rohit Karthik Portfolio",
        images: [
            {
                url: portfolioData.meta.ogImage,
                width: 1200,
                height: 630,
                alt: "Rohit Karthik - ML Researcher & Entrepreneur"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: portfolioData.meta.title,
        description: portfolioData.meta.description,
        images: [portfolioData.meta.ogImage],
        creator: portfolioData.meta.twitterHandle,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "google-site-verification-token",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rohit Karthik",
    "url": "https://rohitkarthik.com",
    "image": "https://rohitkarthik.com/rohit_headshot.jpg",
    "sameAs": [
        "https://github.com/Ninjagor",
        "https://www.linkedin.com/in/rohit-srinivas-karthik/"
    ],
    "jobTitle": "ML Researcher & Entrepreneur",
    "worksFor": [
        {
            "@type": "Organization",
            "name": "Activio"
        },
        {
            "@type": "Organization",
            "name": "PiCode Education"
        }
    ],
    "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Charter School of Wilmington"
    },
    "address": {
        "@type": "PostalAddress",
        "addressRegion": "Delaware",
        "addressCountry": "US"
    },
    "description": "ML Researcher, Entrepreneur, and High School Student. Building ML inference systems, founding EdTech startups, and conducting cutting-edge machine learning research.",
    "knowsAbout": [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "PyTorch",
        "Python",
        "TypeScript",
        "Entrepreneurship",
        "EdTech"
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="msapplication-TileColor" content="#000000" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/jpeg" href="/rohit_headshot.jpg" />
                <link rel="apple-touch-icon" href="/rohit_headshot.jpg" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={jetbrainsMono.variable}>{children}</body>
        </html>
    );
}
