import { useState, useEffect } from "react";
import { SplashScreen } from "./components/screens/SplashScreen";
import { OnboardingScreen } from "./components/screens/OnboardingScreen";
import { HomeScreen } from "./components/screens/HomeScreen";
import { EraExplorerScreen } from "./components/screens/EraExplorerScreen";
import { ArticleScreen } from "./components/screens/ArticleScreen";
import { GalleryScreen } from "./components/screens/GalleryScreen";
import { FavoritesScreen } from "./components/screens/FavoritesScreen";
import { ProfileScreen } from "./components/screens/ProfileScreen";
import { EraDetailScreen } from "./components/screens/EraDetailScreen";
import { ToastNotification } from "./components/ToastNotification";

export type Screen =
  | "splash"
  | "onboarding"
  | "home"
  | "eras"
  | "article"
  | "gallery"
  | "favorites"
  | "profile"
  | "era-detail";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  era: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  era: string;
  tags: string[];
}

export interface AppContextType {
  currentScreen: Screen;
  navigateTo: (screen: Screen, data?: any) => void;
  favorites: (Article | GalleryItem)[];
  addFavorite: (item: Article | GalleryItem) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  theme: "light" | "dark";
  toggleTheme: () => void;
  showToast: (message: string) => void;
  selectedArticle?: Article;
  selectedEra?: string;
  selectedGalleryItem?: GalleryItem;
}

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>("splash");
  const [favorites, setFavorites] = useState<
    (Article | GalleryItem)[]
  >([]);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [selectedArticle, setSelectedArticle] = useState<
    Article | undefined
  >();
  const [selectedEra, setSelectedEra] = useState<
    string | undefined
  >();
  const [selectedGalleryItem, setSelectedGalleryItem] =
    useState<GalleryItem | undefined>();
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
  }>({ show: false, message: "" });

  useEffect(() => {
    // Show splash screen, then onboarding
    const timer = setTimeout(() => {
      setCurrentScreen("onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (screen: Screen, data?: any) => {
    if (screen === "article" && data?.article) {
      setSelectedArticle(data.article);
    }
    if (screen === "era-detail" && data?.era) {
      setSelectedEra(data.era);
    }
    if (data?.galleryItem) {
      setSelectedGalleryItem(data.galleryItem);
    }
    setCurrentScreen(screen);
  };

  const addFavorite = (item: Article | GalleryItem) => {
    if (!favorites.find((f) => f.id === item.id)) {
      setFavorites([...favorites, item]);
      showToast("Added to Favorites ✓");
    }
  };

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter((f) => f.id !== id));
    showToast("Removed from Favorites");
  };

  const isFavorite = (id: string) => {
    return favorites.some((f) => f.id === id);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 2000);
  };

  const context: AppContextType = {
    currentScreen,
    navigateTo,
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    theme,
    toggleTheme,
    showToast,
    selectedArticle,
    selectedEra,
    selectedGalleryItem,
  };

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="min-h-screen bg-vintage-cream dark:bg-vintage-dark transition-colors duration-300">
        <div className="max-w-[480px] mx-auto min-h-screen relative">
          {currentScreen === "splash" && <SplashScreen />}
          {currentScreen === "onboarding" && (
            <OnboardingScreen context={context} />
          )}
          {currentScreen === "home" && (
            <HomeScreen context={context} />
          )}
          {currentScreen === "eras" && (
            <EraExplorerScreen context={context} />
          )}
          {currentScreen === "article" && (
            <ArticleScreen context={context} />
          )}
          {currentScreen === "gallery" && (
            <GalleryScreen context={context} />
          )}
          {currentScreen === "favorites" && (
            <FavoritesScreen context={context} />
          )}
          {currentScreen === "profile" && (
            <ProfileScreen context={context} />
          )}
          {currentScreen === "era-detail" && (
            <EraDetailScreen context={context} />
          )}

          {toast.show && (
            <ToastNotification message={toast.message} />
          )}
        </div>
      </div>
    </div>
  );
}