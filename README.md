# Formatter UI

A modern and extensible React-based frontend for the **Formatter Tool**. Supports minifying, beautifying, and verifying a wide range of formats including JSON, HTML, XML, SQL, Java, YAML, CSS, and Markdown.

## ✨ Features

- 🌙 Light/Dark mode toggle
- 🔎 Auto-detect input type (planned)
- 📋 Copy and 💾 Download output
- 🧼 Minify / 🎨 Beautify / ✅ Verify operations
- 🧾 Supports: JSON, XML, HTML, SQL, JAVA, YAML, CSS, Markdown
- 📢 Google AdSense support (header, footer, side)
- 📱 Responsive and accessible UI
- 🐳 Docker-ready deployment
- 🌐 SEO-friendly meta tags

---

## 🛠 Tech Stack

| Layer           | Technology                                                            | Purpose                                              |
|-----------------|-----------------------------------------------------------------------|------------------------------------------------------|
| **Framework**   | [React 18](https://reactjs.org/)                                      | Declarative UI components                            |
| **Styling**     | CSS Modules / Plain CSS                                               | Responsive layout, dark/light themes                 |
| **Icons**       | Emoji (☀️ 🌙)                                                         | Lightweight and accessible theme toggle              |
| **Theming**     | `useContext`, `styled-components` (optional)                          | Light/dark theme control                             |
| **HTTP Client** | [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) | Lightweight backend communication                    |
| **Clipboard**   | [`copy-to-clipboard`](https://www.npmjs.com/package/copy-to-clipboard) | Enables one-click copying of output                  |
| **Testing**     | [`@testing-library/react`](https://testing-library.com/)              | Unit tests for components                            |
| **SEO**         | [`react-helmet`](https://github.com/nfl/react-helmet)                 | Injects dynamic `<title>` and `<meta>` tags          |
| **Ads**         | [Google AdSense](https://www.google.com/adsense/)                     | Monetization via configurable ad slots               |
| **Deployment**  | [Docker + Nginx](https://www.docker.com/)                             | Containerized static app for easy hosting            |
| **Build Tool**  | [`react-scripts`](https://create-react-app.dev/)                      | Handles transpiling, bundling, and environment setup |
| **Node**        | version v16.16.0                                                      |                                                      |   

## 🚀 Getting Started
- npm run build
- npm install -g serve
- npx serve -s build

OR

- docker build -t formatter-commercial-ui
- docker run -p 80:80 formatter-commercial-ui

### 1. Clone the repository

- git clone https://github.com/hoangnguyenphp/formatter-commercial-ui.git
- cd formatter-commercial-ui

## Project Source Code Structure

formatter-commercial-ui
	public
		about.html
		contact.html
		googlea174f775eb913581.html
		index.html
		privacy-policy.html
		terms-of-service.html
	src
		admin
			Admin_Article_Creation.jsx
		apps
			App.jsx
			UUIDGenerator.jsx
		components
			pagevisitcounter
				LeftSidebarMenu.jsx
				PageVisitCounter.jsx
			AdminLeftSidebarMenu.jsx
			AdsBanner.jsx
			App1.jsx
			AppLeftSidebarMenu.jsx
			ArticleLeftSidebarMenu.jsx
			FormatTab.jsx
			GoTopBottomButtons.jsx
			MenuSection.jsx
			StringifyTab.jsx
			Tabs.jsx
		formatter
			CssFormatter.js
			FormatterFactory.js
			HtmlFormatter.js
			JavaFormatter.js
			JSFormatter.js
			JsonFormatter.js
			MarkdownFormatter.js
			SqlFormatter.js
			XmlFormatter.js
			YamlFormatter.js
		game
			TicTacToe.jsx
		generic
			articleLinks.js
			TopicCode.js
			topicLinks.js
		i18n
			i18n.js
		layouts
			AdminLayout.jsx
			AppLayout.jsx
			ArticleLayout.jsx
			GameLayout.jsx
		pages
			article
				SerialArticle.jsx
				SingleArticle.jsx
			serialarticle
				SerialArticleChapterList.jsx
			topic
				ArticlesByTopic.jsx
		styles
			Admin_Article_Creation.css
			AdminLayout.css
			AdminLeftSidebarMenu.css
			App.css
			AppLeftSidebarMenu.css
			ArticleLayout.css
			ArticleLeftSidebarMenu.css
			ArtileLayout.css
			global.css
			RelatedArtical.css
			Tabs.css
			TicTacToe.css
		utils
			apiCall.js
			ScrollToTop.js
			scrollUtils.js
		index.js

## Hosting Cost
Here’s a comparison of the most popular hosting platforms for full-stack web apps (frontend + backend), including Render, Vercel, Netlify, Heroku, DigitalOcean, and AWS.

We’ll compare pricing assuming your app:

Has a frontend (React)

Has a backend (Spring Boot API)

Uses light resources (suitable for personal/small project)

🔍 Quick Comparison Table (USD/month)
Provider	Static Frontend	Backend (Dyno/Service)	DB (Optional)	Notes
Render	Free	$0 (free, sleeps) / $7	$0 / $7	Simple, good for full stack
Vercel	Free	Only supports Node	–	Not for Java backend
Netlify	Free	Only supports Node	–	Not for Java backend
Heroku	Free (limited)	$5 (Eco plan)	$0 / $5+	Cold starts unless paid
DigitalOcean	$4–$6 (Droplet)	$4–$6 (Shared)	$0–$15	Full control, no cold start
AWS (EC2 + S3)	$0 (S3 free tier)	$3.50+ (t4g.nano)	$0–$10	Complex but powerful

🧾 Per-Platform Detail
✅ 1. Render.com
Static Site: Free

Web Service: Free (750 hrs/month), sleeps after 15 mins idle

Paid Web Service: $7/month (no sleep)

PostgreSQL DB: Free (shared) or $7+ for private instance

🔥 Best for full-stack apps with Java backend and React frontend

✅ 2. Heroku
Eco Dynos: $5/month (1,000 dyno hours/month)

PostgreSQL: Free (shared) or $5+ for hobby dev DB

Note: No longer has full free plan for backend

🔄 Cold starts unless you use paid dyno

❌ 3. Vercel / Netlify
Frontend: Free and excellent for React/Next.js apps

Backend: NodeJS only! Not suitable for Java/Spring Boot directly

Workaround: deploy backend elsewhere (e.g., on Render or AWS)

✅ 4. DigitalOcean (Droplets)
Cheapest Droplet: $4–$6/month

Full control (Linux server), no sleep, suitable for production

Database: $15+/mo (managed) or install manually for free

💡 Needs more DevOps skill. Reliable for long-term

✅ 5. AWS (EC2 + S3 + RDS)
EC2 t4g.nano (ARM): ~$3.50/month

S3 for static frontend: Free 12 months

RDS (DB): Free tier 12 months (then ~$10/month)

💼 Best for enterprise/scale but complex to set up

💰 Summary: Total Estimated Monthly Cost
Platform	Free Plan	Basic Paid Plan	Notes
Render	$0	~$7–14	Best balance for Java+React
Heroku	$0–5	~$10+	Reliable but limited
DigitalOcean	N/A	~$6–10	Needs setup, no sleep
AWS	Free 1yr	~$10–15+	Complex, long-term

🧠 Recommendations
Use Case	Best Option
MVP / Personal Project	Render (Free)
Java backend + React frontend	Render or DigitalOcean
NodeJS-only apps	Vercel / Netlify
Full control, production-grade	DigitalOcean
Enterprise / Scalable / Cloud-native	AWS

## Other
### Domain and Host
- Domain: https://dashboard.godaddy.com/venture?ventureId=9351ce2c-45ca-4af3-99e7-459577291fb5&ua_placement=shared_header
- Host: https://dashboard.render.com/

### Render domain configuration

- https://render.com/docs/custom-domains#2-configure-dns-with-your-provider
