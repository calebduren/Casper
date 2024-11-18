declare namespace Ghost {
  interface Post {
    id: string;
    title: string;
    slug: string;
    html: string;
    // Add more properties as needed
  }

  interface Author {
    id: string;
    name: string;
    bio?: string;
    // Add more properties as needed
  }
}

// Make Ghost available globally
declare global {
  interface Window {
    ghost?: {
      api: {
        posts: Ghost.Post[];
        authors: Ghost.Author[];
      };
    };
  }
}
