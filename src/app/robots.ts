// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Caso você tenha alguma área administrativa futuramente
        },
        sitemap: 'https://heictojpg.com.br/sitemap.xml',
    }
}