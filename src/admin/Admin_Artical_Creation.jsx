import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import '../styles/RelatedArtical.css';
import { articleLinks } from '../generic/articleLinks';

// Quill imports
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Admin_Artical_Creation() {
  const { topic_code } = useParams();
  const [editorContent, setEditorContent] = useState(''); // state for editor

  // Convert object to array and filter by topic_code
  const filteredArticles = Object.values(articleLinks).filter(
    (link) => link.topic_code === topic_code
  );

  const handleSave = () => {
    // Later: send to backend API / DB
    console.log('Saved article content:', editorContent);
    alert('Article saved! (check console)');
  };

  // Quill toolbar options
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  return (
    <AdminLayout>
      <div className="related-articles">
        <h2 style={{ marginTop: '1em' }}>Article Creation</h2>

        {/* Quill Editor */}
        <div style={{ marginBottom: '1rem' }}>
          <ReactQuill
            value={editorContent}
            onChange={setEditorContent}
            modules={modules}
            theme="snow"
            placeholder="Write your article here..."
            style={{ height: '300px' }}
          />
        </div>

        {/* Save button outside editor box */}
        <div style={{ marginTop: '5rem' }}>
          <button onClick={handleSave}>Save Article</button>
        </div>

        {/* Existing links list */}
        <ul className="article-list">
          {filteredArticles.map((link, idx) => (
            <li key={idx}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
}
