// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@unocss/nuxt",
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Montserrat: [400, 700],
				},
			},
		],
		"@nuxt/image",
	],
	css: [
		"@unocss/reset/normalize.css",
		"@unocss/reset/eric-meyer.css",
		"~/assets/css/main.css",
	],
	app: {
		head: {
			charset: "utf-8",
			title: "Marco Ippolito - Senior Developer Experience Engineer",
			meta: [
				{ name: "description", content: "My personal website" },
				{ name: "author", content: "Marco Ippolito" },
				{
					property: "og:title",
					content: "Marco Ippolito - Senior Developer Experience Engineer",
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					property: "og:url",
					content: "https://marcoippolito.dev",
				},
				{
					property: "og:image",
					content: "/img/og-image.jpg",
				},
				{
					property: "og:description",
					content:
						"Currently serving as a maintainer of Node.js, Fastify and Mercurius and member of Node.js security team, I'm a developer with years of experience in designing, developing and testing high scalability and distributed cloud applications, I'm committed to contributing to open source projects and helping the Node.js community grow.",
				},
				{
					property: "twitter:card",
					content: "summary_large_image",
				},
				{
					property: "twitter:url",
					content: "https://marcoippolito.dev",
				},
				{
					property: "twitter:title",
					content: "Marco Ippolito - Senior Developer Experience Engineer",
				},
				{
					property: "twitter:description",
					content:
						"Currently serving as a maintainer of Node.js, Fastify and Mercurius and member of Node.js security team, I'm a developer with years of experience in designing, developing and testing high scalability and distributed cloud applications, I'm committed to contributing to open source projects and helping the Node.js community grow.",
				},
				{
					property: "twitter:image",
					content: "/img/og-image.jpg",
				},
			],
			viewport: "width=device-width, initial-scale=1",
			link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
			htmlAttrs: { lang: "en" },
		},
	},
	build: {
		extractCSS: {
			allChunks: true,
		},
	},
	router: {
		options: {
			scrollBehaviorType: "smooth",
		},
	},
});
