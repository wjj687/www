"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FAVORITE_STORAGE_KEY = "shijing.favorite-poem-ids";

type ReadingControlsValue = {
  showAnnotation: boolean;
  toggleAnnotation: () => void;
  showPhonetic: boolean;
  togglePhonetic: () => void;
  showTranslation: boolean;
  toggleTranslation: () => void;
  favoritePoemIds: string[];
  isFavorite: (poemId: string) => boolean;
  toggleFavorite: (poemId: string) => void;
};

const ReadingControlsContext = createContext<ReadingControlsValue | null>(null);

export function ReadingControlsProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [showAnnotation, setShowAnnotation] = useState(false);
  const [showPhonetic, setShowPhonetic] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [favoritePoemIds, setFavoritePoemIds] = useState<string[]>([]);
  const [favoritesReady, setFavoritesReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const storedValue = window.localStorage.getItem(FAVORITE_STORAGE_KEY);

      if (storedValue) {
        const parsedValue = JSON.parse(storedValue);

        if (Array.isArray(parsedValue)) {
          setFavoritePoemIds(
            parsedValue.filter((value): value is string => typeof value === "string")
          );
        }
      }
    } catch {
      // Ignore malformed local data and continue with an empty favorite list.
    } finally {
      setFavoritesReady(true);
    }
  }, []);

  useEffect(() => {
    if (!favoritesReady || typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.setItem(
        FAVORITE_STORAGE_KEY,
        JSON.stringify(favoritePoemIds)
      );
    } catch {
      // Ignore write failures in private mode or restricted environments.
    }
  }, [favoritePoemIds, favoritesReady]);

  function toggleFavorite(poemId: string) {
    setFavoritePoemIds((currentValue) => {
      if (currentValue.includes(poemId)) {
        return currentValue.filter((value) => value !== poemId);
      }

      return [...currentValue, poemId];
    });
  }

  function isFavorite(poemId: string) {
    return favoritePoemIds.includes(poemId);
  }

  return (
    <ReadingControlsContext.Provider
      value={{
        showAnnotation,
        toggleAnnotation: () => {
          setShowAnnotation((value) => !value);
        },
        showPhonetic,
        togglePhonetic: () => {
          setShowPhonetic((value) => !value);
        },
        showTranslation,
        toggleTranslation: () => {
          setShowTranslation((value) => !value);
        },
        favoritePoemIds,
        isFavorite,
        toggleFavorite
      }}
    >
      {children}
    </ReadingControlsContext.Provider>
  );
}

export function useReadingControls() {
  const context = useContext(ReadingControlsContext);

  if (!context) {
    throw new Error("useReadingControls must be used within ReadingControlsProvider");
  }

  return context;
}
