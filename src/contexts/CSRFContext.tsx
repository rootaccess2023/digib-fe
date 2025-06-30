import { createContext, useState, useEffect, useContext, type ReactNode } from "react";
import extractCsrfTokenFromHtml from "../helpers/csrfFromHtmlHelper";

interface CSRFContextType {
    csrfToken: string,
    setCsrfToken: React.Dispatch<React.SetStateAction<string>>,
}

const defaultContextValue: CSRFContextType = {
    csrfToken: "",
    setCsrfToken: () => {},
}

const CSRFContext  = createContext<CSRFContextType>(defaultContextValue);

interface CSRFProviderProps {
    children: ReactNode,
}

export const CSRFProvider: React.FC<CSRFProviderProps> = ({ children }) => {
    const [csrfToken, setCsrfToken] = useState<string>("");

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await fetch("http://localhost:3000/users/sign_up", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                const html = await response.text();
                const csrf = extractCsrfTokenFromHtml(html);
                if (typeof csrf === "string") {
                    setCsrfToken(csrf);
                } else {
                    console.error("Failed to extract CSRF from HTML")
                }
                
            } catch (error) {
                console.error("Unable to fetch CSRF Token: ", error)
            }
        }
        fetchToken();
    }, [])

    return (
        <CSRFContext.Provider value={{ csrfToken, setCsrfToken}}>
            {children}
        </CSRFContext.Provider>
    )

}

export const useCSRF = () => useContext(CSRFContext);

