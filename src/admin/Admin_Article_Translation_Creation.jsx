// src/pages/Admin_Article_Translation_Creation.jsx
import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import '../styles/Admin_Article_Translation_Creation.css';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import {
  fetchLanguages,
  searchArticles,
  createArticleTranslation
} from '../utils/apiCall';

export default function Admin_Article_Translation_Creation() {
  const [languages, setLanguages] = useState([]);
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [articleName, setArticleName] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searching, setSearching] = useState(false);
  const [saving, setSaving] = useState(false);
  const [page, setPage] = useState(0);
  const [size] = useState(10);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    fetchLanguages()
      .then(setLanguages)
      .catch((err) => console.error('Error loading languages:', err));
  }, []);

  const handleSearch = async (pageNumber = 0) => {
    setSearching(true);
    try {
      const payload = {
        articleName: searchTerm || '',
        topicName: '',
        createdUser: '',
        defaultLanguageCode: '',
        dateCreatedFrom: '',
        dateCreatedTo: '',
        isSerialArticle: true,
        page: pageNumber,
        size: size,
        offset: pageNumber * size
      };
      const result = await searchArticles(payload);
      const articlesData = result.content || result;
      setArticles(articlesData);
      setPage(result.number ?? pageNumber);
      setTotalElements(result.totalElements ?? articlesData.length);
    } catch (err) {
      console.error('Error searching articles:', err);
      alert('❌ Failed to load articles');
    } finally {
      setSearching(false);
    }
  };

  const handleCreateTranslation = async () => {
    if (!selectedArticle || !selectedLanguage || !articleName || !articleContent) {
      alert('⚠️ Please fill all required fields!');
      return;
    }

    const payload = {
      articleTranslationMasterUuid: selectedArticle.articleUuid,
      languageCode: selectedLanguage,
      articleName: articleName,
      articleContent: articleContent,
	  serialArticleUuid: selectedArticle.serialArticleUuid,
	  chapterId: selectedArticle.chapterId
    };

    try {
      setSaving(true);
      const response = await createArticleTranslation(payload);
      console.log('✅ Created translation:', response);
      alert('✅ Translation created successfully!');
      setArticleName('');
      setArticleContent('');
      setSelectedLanguage('');
      setSelectedArticle(null);
    } catch (error) {
      console.error('❌ Error creating translation:', error);
      alert('❌ Failed to create translation');
    } finally {
      setSaving(false);
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
      [{ align: [] }]
    ]
  };

  const totalPages = Math.ceil(totalElements / size);

  return (
    <AdminLayout>
      <div className="related-articles admin-translation-container">
        <h2 className="admin-page-title">📝 Create Article Translation</h2>

        {/* Search Section */}
        <div className="admin-search-section">
          <label>
            <strong>Search Article:</strong>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter article name..."
              className="article-translation-input"
            />
          </label>
          <button
            onClick={() => handleSearch(0)}
            disabled={searching}
            className="search-master-article-button"
          >
            {searching ? 'Searching...' : 'Search'}
          </button>
        </div>

        {/* Search Results Table */}
        {articles.length > 0 && (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Article Name</th>
                  <th>Topic</th>
                  <th>Language</th>
                  <th>Created By</th>
                  <th>Date Created</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((a) => (
                  <tr
                    key={a.articleUuid}
                    className={
                      selectedArticle?.articleUuid === a.articleUuid
                        ? 'selected-row'
                        : ''
                    }
                  >
                    <td>{a.articleName}</td>
                    <td>{a.topicName || '-'}</td>
                    <td>{a.defaultLanguageCode}</td>
                    <td>{a.createdUser}</td>
                    <td>{a.dateCreated}</td>
                    <td>
                      <button
                        className="admin-btn small"
                        onClick={() => setSelectedArticle(a)}
                      >
                        {selectedArticle?.articleUuid === a.articleUuid
                          ? 'Selected'
                          : 'Select'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Controls */}
        {articles.length > 0 && (
          <div className="admin-pagination">
            <button
              disabled={page === 0}
              onClick={() => handleSearch(page - 1)}
              className="admin-btn small"
            >
              ◀ Previous
            </button>
            <span>
              Page {page + 1} / {totalPages || 1}
            </span>
            <button
              disabled={page + 1 >= totalPages}
              onClick={() => handleSearch(page + 1)}
              className="admin-btn small"
            >
              Next ▶
            </button>
          </div>
        )}

        {/* Selected Article Info */}
        {selectedArticle && (
          <div className="selected-article-info">
            <strong>Selected:</strong> {selectedArticle.articleName} (
            {selectedArticle.defaultLanguageCode})
          </div>
        )}

        {/* Translation Form */}
        <div className="translation-form">
          <label>
            <strong>Target Language:</strong>{' '}
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="article-translation-input"
            >
              <option value="">-- Select Language --</option>
              {languages.map((lang) => (
                <option key={lang.languageCode} value={lang.languageCode}>
                  {lang.languageName}
                </option>
              ))}
            </select>
          </label>

          <label>
            <strong>Translation Name:</strong>{' '}
            <input
              type="text"
              value={articleName}
              onChange={(e) => setArticleName(e.target.value)}
              placeholder="Enter translated article title..."
              className="article-translation-input"
            />
          </label>

          <div className="editor-wrapper">
            <ReactQuill
              value={articleContent}
              onChange={setArticleContent}
              modules={quillModules}
              theme="snow"
              placeholder="Enter translated article content..."
            />
          </div>

          <button
            onClick={handleCreateTranslation}
            disabled={saving}
            className="admin-btn primary"
          >
            {saving ? 'Saving...' : 'Create Translation'}
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
