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
npm run build
npm install -g serve
npx serve -s build

OR

docker build -t formatter-commercial-ui
docker run -p 80:80 formatter-commercial-ui

### 1. Clone the repository

```bash
git clone https://github.com/hoangnguyenphp/formatter-commercial-ui.git
cd formatter-commercial-ui
