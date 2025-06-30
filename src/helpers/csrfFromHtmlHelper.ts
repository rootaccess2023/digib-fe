function extractCsrfTokenFromHtml(html: string): string | null {
    // Create a DOM parser
    const parser = new DOMParser();
  
    // Parse the HTML string into a Document
    const doc = parser.parseFromString(html, 'text/html');
  
    // Query the meta tag with name="csrf-token"
    const meta = doc.querySelector('meta[name="csrf-token"]');
  
    // Return the content attribute or null if not found
    return meta?.getAttribute('content') ?? null;
  }

  export default extractCsrfTokenFromHtml;