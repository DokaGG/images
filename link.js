(async function () {
    const urlMappingsUrl = "https://raw.githubusercontent.com/your-username/your-repo/main/url-mappings.json";
    
    try {
      const response = await fetch(urlMappingsUrl);
      const mappings = await response.json();
      const currentPath = window.location.pathname;
  
      if (mappings[currentPath]) {
        window.location.href = mappings[currentPath];
      }
    } catch (error) {
      console.error("Failed to load URL mappings:", error);
    }
  })();
  