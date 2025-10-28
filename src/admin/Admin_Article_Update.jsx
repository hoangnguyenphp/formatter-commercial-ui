import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import '../styles/Admin_Article_Update.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  fetchTopics,
  fetchLanguages,
  fetchSerialArticles,
  fetchArticleByUuidAndLanguage,
  updateArticle,
} from '../utils/apiCall';

export default function Admin_Article_Update() {
  const { articleUuid } = useParams(); // from route: /article-update/:articleUuid

  const [editorContent, setEditorContent] = useState('');
  const [topics, setTopics] = useState([]);
  const [serialArticles, setSerialArticles] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedSerialArticle, setSelectedSerialArticle] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // default
  const [isSerialArticle, setIsSerialArticle] = useState(false);
  const [articleName, setArticleName] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // ✅ Load dropdown data + article
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [topicsData, serialData, langData] = await Promise.all([
          fetchTopics(),
          fetchSerialArticles(),
          fetchLanguages(),
        ]);

        setTopics(topicsData);
        setSerialArticles(serialData);
        setLanguages(langData);

        // Load the article for update (default language or selected one)
        const lang = selectedLanguage || 'en';
        const articleData = await fetchArticleByUuidAndLanguage(articleUuid, lang);

        setArticleName(articleData.articleName || '');
        setSelectedTopic(articleData.masterTopicUuid || '');
        setSelectedSerialArticle(articleData.serialArticle || '');
        setSelectedLanguage(articleData.languageCode || 'en');
        setEditorContent(articleData.articleContent || '');
        setIsSerialArticle(!!articleData.serialArticle);
      } catch (error) {
        console.error('Error loading article or dropdown data:', error);
        alert('❌ Failed to load article or dropdown data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [articleUuid]);

  // ✅ Handle update
  const handleUpdate = async () => {
    if (!articleName || !selectedTopic || !selectedLanguage || !editorContent) {
      alert('⚠️ Please fill all required fields!');
      return;
    }

    const payload = {
      articleUuid: articleUuid,
      articleName: articleName,
      masterTopicUuid: selectedTopic,
      articleContent: editorContent,
      languageCode: selectedLanguage,
      serialArticleUuid: isSerialArticle ? selectedSerialArticle : null,
    };

    try {
      setSaving(true);
      const response = await updateArticle(payload);
      console.log('✅ Article updated successfully:', response);
      alert('✅ Article updated successfully!');
    } catch (error) {
      console.error('❌ Error updating article:', error);
      alert('❌ Failed to update article');
    } finally {
      setSaving(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
      [{ align: [] }],
    ],
  };

  if (loading) {
    return (
      <AdminLayout>
        <div style={{ padding: '2rem' }}>
          <h3>Loading article...</h3>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="related-articles">
        <h2 style={{ marginTop: '1em' }}>Update Article</h2>

        {/* Article Name */}
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <label>
            <strong>Article Name:</strong>{' '}
            <input
              type="text"
              value={articleName}
              onChange={(e) => setArticleName(e.target.value)}
              placeholder="Enter article title..."
              style={{
                width: '400px',
                marginLeft: '0.5rem',
                padding: '0.3rem',
              }}
            />
          </label>
        </div>

        {/* Metadata fields */}
        <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
          <label>
            <strong>Topic:</strong>{' '}
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
            >
              <option value="">-- Select Topic --</option>
              {topics.map((topic) => (
                <option key={topic.topicUuid} value={topic.topicUuid}>
                  {topic.topicName}
                </option>
              ))}
            </select>
          </label>

          <label style={{ marginLeft: '1rem' }}>
            <strong>Language:</strong>{' '}
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="">-- Select Language --</option>
              {languages.map((lang) => (
                <option key={lang.languageCode} value={lang.languageCode}>
                  {lang.languageName}
                </option>
              ))}
            </select>
          </label>

          <label style={{ marginLeft: '1rem' }}>
            <input
              type="checkbox"
              checked={isSerialArticle}
              onChange={(e) => setIsSerialArticle(e.target.checked)}
              style={{ marginRight: '0.3rem' }}
            />
            Is Serial Article
          </label>

          {isSerialArticle && (
            <label style={{ marginLeft: '1rem' }}>
              <strong>Serial Article:</strong>{' '}
              <select
                value={selectedSerialArticle}
                onChange={(e) => setSelectedSerialArticle(e.target.value)}
              >
                <option value="">-- Select Serial --</option>
                {serialArticles.map((serial) => (
                  <option
                    key={serial.serialArticleUuid}
                    value={serial.serialArticleUuid}
                  >
                    {serial.serialArticleName}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>

        {/* Quill Editor */}
        <div className="editor-wrapper">
          <ReactQuill
            value={editorContent}
            onChange={setEditorContent}
            modules={modules}
            theme="snow"
            placeholder="Edit your article here..."
            style={{ height: '100%', minHeight: '300px' }}
          />
        </div>

        {/* Update Button */}
        <div style={{ marginTop: '2rem' }}>
          <button onClick={handleUpdate} disabled={saving}>
            {saving ? 'Saving...' : 'Update Article'}
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
