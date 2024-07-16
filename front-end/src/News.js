
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useTranslation } from 'react-i18next';
// // import './News.css';

// // function News() {
// //   const [articles, setArticles] = useState([]);
// //   const { t, i18n } = useTranslation();
// //   const API_URL = process.env.REACT_APP_SERVER || 'https://alaqariyya.com/nodeapp';

// //   useEffect(() => {
// //     const fetchArticles = async () => {
// //       try {
// //         const response = await axios.get(`${API_URL}/news?lang=${i18n.language}`);
// //         setArticles(response.data);
// //       } catch (error) {
// //         console.error('Error fetching news articles:', error);
// //       }
// //     };

// //     fetchArticles();
// //   }, [API_URL, i18n.language]);

// //   return (
// //     <div className="News">
// //       <div className="news-articles">
// //         {articles.length > 0 ? (
// //           articles.map((article) => (
// //             <div key={article.id} className="news-article">
// //               <h2>{article.title}</h2>
// //               <img src={`${API_URL}/uploads/${article.image_url}`} alt={article.title} className="news-image" />
// //               <p>{article.content}</p>
// //               <p><strong>{t('news.publishedOn')}: </strong>{new Date(article.published_at).toLocaleDateString()}</p>
// //             </div>
// //           ))
// //         ) : (
// //           <p>{t('news.noArticles')}</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default News;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './News.css';

// function News() {
//   const [articles, setArticles] = useState([]);
//   const API_URL = process.env.REACT_APP_SERVER;

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/news?lang=ar`);
//         setArticles(response.data);
//       } catch (error) {
//         console.error('Error fetching news articles:', error);
//       }
//     };

//     fetchArticles();
//   }, [API_URL]);

//   return (
//     <div className="News">
//       <div className="news-articles">
//         {articles.length > 0 ? (
//           articles.map((article) => (
//             <div key={article.id} className="news-article">
//               <h2>{article.title}</h2>
//               <img src={`${API_URL}/uploads/${article.image_url}`} alt={article.title} className="news-image" />
//               <p>{article.content}</p>
//               <p><strong>Published On: </strong>{new Date(article.published_at).toLocaleDateString()}</p>
//             </div>
//           ))
//         ) : (
//           <p>No articles found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default News;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import './News.css';

function News() {
  const [articles, setArticles] = useState([]);
  const { i18n } = useTranslation();
  const API_URL = process.env.REACT_APP_SERVER;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${API_URL}/news?lang=${i18n.language}`);
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching news articles:', error);
      }
    };

    fetchArticles();
  }, [API_URL, i18n.language]);

  return (
    <div className="News">
      <div className="news-articles">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="news-article">
              <h2>{article.title}</h2>
              <img src={`${API_URL}/uploads/${article.image_url}`} alt={article.title} className="news-image" />
              <p>{article.content}</p>
              <p><strong>Published On: </strong>{new Date(article.published_at).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
}

export default News;
