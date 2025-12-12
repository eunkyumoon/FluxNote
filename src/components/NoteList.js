import React from 'react';
import './NoteList.css';

const NoteList = ({ notes, selectedNote, onSelectNote, onDeleteNote }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    } else if (diffDays === 1) {
      return '어제';
    } else if (diffDays < 7) {
      return `${diffDays}일 전`;
    } else {
      return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
    }
  };

  const getPreview = (content) => {
    if (!content) return '내용 없음';
    const preview = content.replace(/\n/g, ' ').trim();
    return preview.length > 50 ? preview.substring(0, 50) + '...' : preview;
  };

  if (notes.length === 0) {
    return (
      <div className="note-list-empty">
        <p>노트가 없습니다</p>
        <p className="note-list-empty-hint">새 노트를 만들어보세요!</p>
      </div>
    );
  }

  return (
    <div className="note-list">
      {notes.map(note => (
        <div
          key={note.id}
          className={`note-item ${selectedNote?.id === note.id ? 'active' : ''}`}
          onClick={() => onSelectNote(note)}
        >
          <div className="note-item-header">
            <h3 className="note-item-title">
              {note.title || '제목 없음'}
            </h3>
            <button
              className="note-item-delete"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteNote(note.id);
              }}
              aria-label="노트 삭제"
            >
              🗑️
            </button>
          </div>
          <p className="note-item-preview">{getPreview(note.content)}</p>
          <span className="note-item-date">{formatDate(note.updatedAt)}</span>
        </div>
      ))}
    </div>
  );
};

export default NoteList;

