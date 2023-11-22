import { useContext } from "react";
import LibraryContext from "../context/LibraryContext";

export default function useLibraryContext() {
    const context = useContext(LibraryContext);
    if (!context) {
        throw new Error("useLibraryContext must be used within a LibraryContextProvider");
    }
    return context;
}
