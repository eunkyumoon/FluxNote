import React, { useState, useEffect } from 'react';
import './NoteEditor.css';

const NoteEditor = ({ note, onUpdateNote, onDeleteNote }) => {
  const [title, setTitle] = useState(note.title || '');
  const [content, setContent] = useState(note.content || '');

  useEffect(() => {
    setTitle(note.title || '');
    setContent(note.content || '');
  }, [note.id, note.title, note.content]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    onUpdateNote({ ...note, title: newTitle, content });
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    onUpdateNote({ ...note, title, content: newContent });
  };

  const handleDelete = () => {
    if (window.confirm('이 노트를 삭제하시겠습니까?')) {
      onDeleteNote(note.id);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="note-editor">
      <div className="note-editor-header">
        <div className="note-editor-meta">
          <span className="note-editor-date">
            생성: {formatDate(note.createdAt)}
          </span>
          {note.updatedAt !== note.createdAt && (
            <span className="note-editor-date">
              수정: {formatDate(note.updatedAt)}
            </span>
          )}
        </div>
        <button
          className="btn-delete"
          onClick={handleDelete}
          aria-label="노트 삭제"
        >
          삭제
        </button>
      </div>

      <div className="note-editor-body">
        <input
          type="text"
          className="note-editor-title"
          placeholder="제목을 입력하세요..."
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          className="note-editor-content"
          placeholder="내용을 입력하세요..."
          value={content}
          onChange={handleContentChange}
        />
      </div>
    </div>
  );
};

export default NoteEditor;

