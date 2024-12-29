// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface FontItem {
//   family: string;
// }

// const TestApi: React.FC = () => {
//   const [fonts, setFonts] = useState<FontItem[]>([]);

//   useEffect(() => {
//     const fetchFonts = async () => {
//       try {
//         const response = await axios.get(
//           'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC0AYWyYsUz4qYE_ZpIGU1TTXkDEe0QsW4'
//         );
//         // Lấy 10 font đầu tiên
//         setFonts(response.data.items);
//       } catch (error) {
//         console.error('Error fetching fonts:', error);
//       }
//     };

//     fetchFonts();
//   }, []);

//   const addFontLink = (fontFamily: string) => {
//     console.log("🚀 ~ addFontLink ~ fontFamily:", fontFamily)
//     const link = document.createElement('link');
//     link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
//       / /g,
//       '+'
//     )}&display=swap`;
//     link.rel = 'stylesheet';
//     document.head.appendChild(link);
//   };

//   useEffect(() => {
//     fonts.forEach((font) => {
//       addFontLink(font.family);
//     });
//   }, [fonts]);

//   return (
//     <div>
//       <h1>Google Fonts</h1>
//       <div>
//         {fonts.map((font) => (
//           <div
//             key={font.family}
//             style={{
//               fontFamily: font.family,
//               fontSize: '20px',
//               marginBottom: '16px',
//             }}
//           >
//             {font.family}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestApi;
