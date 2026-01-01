// AddNews.jsx
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './AddNews.css';

function AddNews({ closeModal, refreshNews }) {
  const API_URL = process.env.REACT_APP_SERVER;

  const [title_ar, setTitle] = useState('');
  const [content_ar, setContent] = useState('');
  const [category, setCategory] = useState('market');
  const [youtube_url, setYoutubeUrl] = useState('');
  const [image, setImage] = useState(null);

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Progress
  const [progress, setProgress] = useState(0);
  const [progressMsg, setProgressMsg] = useState('');
  const uploadIdRef = useRef(null);
  const progressTimerRef = useRef(null);

  // -------- helpers --------
  const generateUploadId = () =>
    `news-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

  const blockLatinLetters = (value) => value.replace(/[A-Za-z]/g, '');

  const handleArabicInput = (setter) => (e) => {
    const arabicOnly = e.target.value.replace(
      /[^\u0600-\u06FF0-9\s:;.,!?#*()[\]_`-]/g,
      ''
    );
    setter(arabicOnly);
  };

  // -------- progress polling --------
  const startProgressPolling = (uploadId) => {
    progressTimerRef.current = setInterval(async () => {
      try {
        const res = await axios.get(`${API_URL}/upload-progress/${uploadId}`);
        const { percent, message, done } = res.data || {};

        setProgress(typeof percent === 'number' ? percent : 0);
        setProgressMsg(message || '');

        if (done) {
          clearInterval(progressTimerRef.current);
          progressTimerRef.current = null;
        }
      } catch {
        // silent
      }
    }, 400);
  };

  const stopProgressPolling = () => {
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => stopProgressPolling();
  }, []);

  // -------- submit --------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!title_ar || !content_ar || !image) {
      setError('جميع الحقول الإلزامية مطلوبة');
      return;
    }

    setError('');
    setIsSubmitting(true);
    setProgress(0);
    setProgressMsg('بدء الرفع...');

    const uploadId = generateUploadId();
    uploadIdRef.current = uploadId;

    const formData = new FormData();
    formData.append('title_ar', title_ar);
    formData.append('content_ar', content_ar);
    formData.append('category', category);
    formData.append('youtube_url', youtube_url);
    formData.append('image', image);

    startProgressPolling(uploadId);

    try {
      await axios.post(`${API_URL}/news`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-Upload-Id': uploadId,
          'Idempotency-Key': uploadId, // منع التكرار
        },
      });

      setProgress(100);
      setProgressMsg('تم بنجاح');

      setTimeout(() => {
        stopProgressPolling();
        refreshNews && refreshNews();
        closeModal && closeModal();
      }, 600);
    } catch (err) {
      setError('وقع خطأ أثناء إضافة الخبر، حاول مرة أخرى.');
      stopProgressPolling();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="AddNews">
      <h2 className="addnews-title">إضافة خبر جديد</h2>
      <p className="addnews-subtitle">
        اكتب الخبر بالعربية، ويمكنك استعمال <strong>Markdown</strong>.
      </p>

      <form onSubmit={handleSubmit} className="addnews-form">
        {/* Title + Category */}
        <div className="addnews-row">
          <div className="addnews-field">
            <label>عنوان الخبر *</label>
            <input
              type="text"
              value={title_ar}
              placeholder="عنوان مختصر وواضح"
              onChange={handleArabicInput(setTitle)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="addnews-field">
            <label>تصنيف الخبر</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={isSubmitting}
            >
              <option value="market">سوق العقار</option>
              <option value="legal">إرشادات قانونية</option>
              <option value="tips">نصائح عملية</option>
              <option value="investment">استثمار</option>
              <option value="other">أخرى</option>
            </select>
          </div>
        </div>

        {/* YouTube */}
        <div className="addnews-field">
          <label>رابط فيديو يوتيوب (اختياري)</label>
          <input
            type="text"
            value={youtube_url}
            placeholder="https://www.youtube.com/watch?v=XXXX"
            onChange={(e) => setYoutubeUrl(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        {/* Content */}
        <div className="addnews-field">
          <label>وصف الخبر (Markdown) *</label>
          <textarea
            rows={8}
            value={content_ar}
            onChange={(e) => setContent(blockLatinLetters(e.target.value))}
            placeholder={`اكتب نص الخبر هنا...\n\n# عنوان\n- نقطة\n**نص غامق**`}
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Image */}
        <div className="addnews-field">
          <label>صورة المقال *</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Progress bar */}
        {(isSubmitting || progress > 0) && (
          <div className="progress-wrap">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="progress-text">
              {progress}% — {progressMsg}
            </div>
          </div>
        )}

        {error && <p className="error-message">{error}</p>}

        {/* Buttons */}
        <div className="button-group">
          <button
            type="button"
            className="btn-secondary"
            onClick={closeModal}
            disabled={isSubmitting}
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'جاري الإضافة...' : 'إضافة الخبر'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNews;
