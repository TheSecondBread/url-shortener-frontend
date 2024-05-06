import { createContext, useState } from "react";

export const LinkContext = createContext({
  Sendlink: () => {},
});

function ContextProvider({ children }) {
  const [currUrl, SetUrl] = useState("<=url will generate here=>");


    async function generateShortenedLink(link){
      
      const data = {
        id:null,
        link: link.current.value,
        url:null
      };
  
      // Convert the data to JSON format
      const jsonData = JSON.stringify(data);

      let resp = await fetch("https://url-shortener-backend-fa97.onrender.com/urls", {
      method: "POST", // or 'PUT', 'GET', 'DELETE', etc.
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      body: jsonData, // Include the JSON data in the body
    })

    let d = await resp.json()

    SetUrl("https://url-shortener-backend-fa97.onrender.com/"+d.url)
    }
  return (
    <LinkContext.Provider value={{ generateShortenedLink,currUrl }}>{children}</LinkContext.Provider>
  );
}
export default ContextProvider;