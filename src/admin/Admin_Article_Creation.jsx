import React, { useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import '../styles/Admin_Article_Creation.css'

// Quill imports
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Admin_Article_Creation() {
  const [editorContent, setEditorContent] = useState(''); // state for editor

  const handleSave = () => {
    // Later: send to backend API / DB
    console.log('Saved article content:', editorContent);
    alert('Article saved! (check console)');
  };

  // Quill toolbar options
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
	  [{ align: [] }], // ✅ Alignment added
    ],
  };

  return (
    <AdminLayout>
      <div className="related-articles">
        <h2 style={{ marginTop: '1em' }}>Article Creation</h2>

		{/* Resizable Editor Wrapper */}
		<div className="editor-wrapper">
		  <ReactQuill
		    value={editorContent}
		    onChange={setEditorContent}
		    modules={modules}
		    theme="snow"
		    placeholder="Write your article here..."
		    style={{ height: '100%', minHeight: '300px' }}
		  />
		</div>

        {/* Save button outside editor box */}
        <div style={{ marginTop: '2rem' }}>
          <button onClick={handleSave}>Save Article</button>
        </div>

      </div>
    </AdminLayout>
  );
}
