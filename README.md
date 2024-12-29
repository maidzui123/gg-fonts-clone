# Google Fonts Clone

A React application that replicates the core functionality of Google Fonts, allowing users to browse, preview, and use various fonts in their projects.

## Features

- 🔍 Browse and search through font collections
- 👀 Real-time font preview
- ⚡ Dynamic font loading
- 🎨 Font style and weight variations
- 📦 React Query for efficient data fetching
- 🔄 Automatic font style injection
- ⚙️ Font variant support

## Tech Stack

- React
- TypeScript
- TanStack Query (React Query)
- Google Fonts API

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gg-fonts-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## API Integration

The application uses React Query for efficient data fetching and caching:

```typescript
// Font fetching hooks
export const useFetchFonts = () => {
  return useQuery<FontItem[], Error>({
    queryKey: ["fonts"],
    queryFn: fetchFontsAPI,
    staleTime: 1000 * 60 * 5,  // Cache for 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useFetchFontDetail = (font: string) => {
  return useQuery<FontItem, Error>({
    queryKey: ["fontDetail", font],
    queryFn: () => fetchFontDetailAPI(font),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
```

## Font Loading System

### Dynamic Link Injection
The application dynamically injects Google Fonts stylesheet links:

```typescript
const addFontLink = (fontFamily: string) => {
  const link = document.createElement("link");
  link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
    / /g,
    "+"
  )}&display=swap`;
  link.rel = "stylesheet";
  document.head.appendChild(link);
};
```

### Font Style Management
Handles different font weights and styles through dynamic `@font-face` rules:

```typescript
const addFontStyles = (fontFamily: string, files: Record<string, string>) => {
  const style = document.createElement("style");
  
  const fontFaces = Object.entries(files)
    .map(([weightOrStyle, url]) => {
      const [weight, style] = parseWeightAndStyle(weightOrStyle);
      return `
        @font-face {
          font-family: '${fontFamily}';
          font-style: ${style};
          font-weight: ${weight};
          src: url('${url}') format('truetype');
        }
      `;
    })
    .join("\n");

  style.innerHTML = fontFaces;
  document.head.appendChild(style);
};
```

## Font Data Structure

```typescript
interface FontItem {
  family: string;
  files: Record<string, string>;
  variants: string[];
  // Add other properties as needed
}
```

## Usage

1. **Browsing Fonts**:
   - Navigate through the font list
   - Use the search function to find specific fonts
   - Preview fonts with custom text

2. **Loading Fonts**:
   - Fonts are automatically loaded when viewed
   - Font variants are loaded on demand
   - Preview different weights and styles

3. **Implementing Fonts**:
   - Copy the generated CSS code
   - Use the font family in your CSS
   - Import specific variants as needed

## Performance Considerations

- Uses React Query for efficient data fetching and caching
- Implements dynamic font loading to minimize initial load time
- Caches font data for 5 minutes to reduce API calls
- Lazy loads font variants

## HOW TO RUN QUICKLY
```bash
docker compose up -d
```
- Then run http://localhost:5175/ on your current browser.
