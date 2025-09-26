// src/utils/apiCall.js
export async function formatterApiCall(type, action, content) {
	const url = `${process.env.REACT_APP_ONLINE_CODE_FORMATTER_API_URL || 'http://localhost:8080'}/api/format/${action}`;

	const response = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ type, content }),
	});

	const data = await response.json();
	if (!data.success) throw new Error(data.message);
	return data.result;
}

export async function fetchVisits() {
	try {
		const res = await fetch(`${process.env.REACT_APP_ONLINE_CODE_FORMATTER_API_URL || 'https://service.online-code-formatter.com'}/api/page-visit-counter`);
		const count = await res.text();
		return count;
	} catch (err) {
		console.error('Failed to load visit counter:', err);
	}
};

// Fetch article function
export async function fetchArticle(articleUuid) {
	try {
		const baseUrl = `${process.env.REACT_APP_UNIVERSE_BLOG_API_URL || 'http://localhost:8081'}`;

		const response = await fetch(`${baseUrl}/articles/${articleUuid}`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching article:', error);
		throw error;
	}
}

// Fetch single article function
export async function fetchArticleByUuidAndLanguage(articleUuid, languageCode) {
	try {
		const baseUrl = `${process.env.REACT_APP_UNIVERSE_BLOG_API_URL || 'http://localhost:8081'}`;

		const response = await fetch(`${baseUrl}/articles/${articleUuid}/${languageCode}`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching article:', error);
		throw error;
	}
}

// Fetch topics function - accept languageCode as parameter
export async function fetchTopicsByLanguageCode(languageCode) {
	try {
		const baseUrl = `${process.env.REACT_APP_UNIVERSE_BLOG_API_URL || 'http://localhost:8081'}`;

		const response = await fetch(`${baseUrl}/topics/${languageCode}`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching topics:', error);
		throw error;
	}
}

// Fetch topics function - accept languageCode as parameter
export async function fetchSingleArticlesByTopicAndLanguage(topicUuid, languageCode) {
	try {
		const baseUrl = `${process.env.REACT_APP_UNIVERSE_BLOG_API_URL || 'http://localhost:8081'}`;

		const response = await fetch(`${baseUrl}/articles/single-articles-by-topic-language/${topicUuid}/${languageCode}`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching topics:', error);
		throw error;
	}
}

export const fetchTopicTranslation = async (topicUuid, languageCode) => {
	try {
		return apiCall(`/topic-translations/${topicUuid}/${languageCode}`);
	} catch (error) {
		console.error('Error fetching topic translation:', error);
		throw error;
	}
}

export const fetchSerialArticlesByTopicAndLanguage = async (topicUuid, languageCode) => {
	try {
		const baseUrl = `${process.env.REACT_APP_UNIVERSE_BLOG_API_URL || 'http://localhost:8081'}`;

		const response = await fetch(`${baseUrl}/serial-articles/${topicUuid}/${languageCode}`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Error fetching topics:', error);
		throw error;
	}
}




// Generic API call function (optional)
export async function apiCall(endpoint, options = {}) {
	try {
		const baseUrl = `${process.env.REACT_APP_UNIVERSE_BLOG_API_URL || 'http://localhost:8081'}`;

		const response = await fetch(`${baseUrl}${endpoint}`, {
			headers: {
				'Content-Type': 'application/json',
				...options.headers,
			},
			...options,
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error('API call error:', error);
		throw error;
	}
}