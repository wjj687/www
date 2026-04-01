"use client";

import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";
import { useReadingControls } from "@/components/reading-controls";

const featureItems = [
  { key: "annotation", label: "注释", icon: "commentary" },
  { key: "phonetic", label: "注音", icon: "phonetic" },
  { key: "translation", label: "翻译", icon: "translation" },
  { key: "interpretation", label: "解释", icon: "switch" },
  { key: "favorite", label: "收藏", icon: "favorite" },
  { key: "appreciation", label: "赏析", icon: "appreciation" },
  { key: "ai", label: "AI解析", icon: "spark" }
] as const;

type FeatureIcon = (typeof featureItems)[number]["icon"];

function FeatureGlyph({ kind }: { kind: FeatureIcon }) {
  switch (kind) {
    case "commentary":
      return (
        <span className="feature-glyph feature-glyph-commentary" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      );
    case "phonetic":
      return (
        <span className="feature-glyph feature-glyph-phonetic" aria-hidden="true">
          <i>音</i>
          <b />
        </span>
      );
    case "translation":
      return (
        <span className="feature-glyph feature-glyph-translation" aria-hidden="true">
          <i>A</i>
          <b>译</b>
        </span>
      );
    case "switch":
      return (
        <span className="feature-glyph feature-glyph-switch" aria-hidden="true">
          <i />
          <b />
        </span>
      );
    case "favorite":
      return (
        <span className="feature-glyph feature-glyph-favorite" aria-hidden="true">
          <i />
          <b />
        </span>
      );
    case "appreciation":
      return (
        <span className="feature-glyph feature-glyph-appreciation" aria-hidden="true">
          <i />
          <i />
          <b />
        </span>
      );
    case "spark":
      return (
        <span className="feature-glyph feature-glyph-spark" aria-hidden="true">
          <i />
          <i />
          <i />
          <b />
        </span>
      );
    default:
      return null;
  }
}

function MenuArrow({ open }: { open: boolean }) {
  return (
    <span
      className={`feature-menu-arrow ${open ? "rotate-180" : "rotate-0"}`}
      aria-hidden="true"
    >
      <i />
      <i />
    </span>
  );
}

export function FeatureMenu({ currentPoemId }: { currentPoemId?: string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const {
    showAnnotation,
    toggleAnnotation,
    showPhonetic,
    togglePhonetic,
    showTranslation,
    toggleTranslation,
    isFavorite,
    toggleFavorite
  } = useReadingControls();
  const favoriteActive = currentPoemId ? isFavorite(currentPoemId) : false;

  function toggleMenu() {
    startTransition(() => {
      setOpen((value) => !value);
    });
  }

  function openRoute(pathname: string) {
    startTransition(() => {
      router.push(pathname);
      setOpen(false);
    });
  }

  function handleInterpretationOpen() {
    if (!currentPoemId) {
      return;
    }

    openRoute(`/poems/${currentPoemId}/interpretation`);
  }

  function handleAppreciationOpen() {
    if (!currentPoemId) {
      return;
    }

    openRoute(`/poems/${currentPoemId}/appreciation`);
  }

  function handleAiAnalysisOpen() {
    if (!currentPoemId) {
      return;
    }

    openRoute(`/poems/${currentPoemId}/ai-analysis`);
  }

  return (
    <div className="fixed right-5 top-5 z-50 flex flex-col items-end gap-3 sm:right-7 sm:top-7">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="feature-menu-panel"
        aria-label={open ? "收起功能菜单" : "展开功能菜单"}
        onClick={toggleMenu}
        className={`feature-menu-trigger focus-ink ${open ? "is-open" : ""}`}
      >
        <span className="feature-menu-trigger-ring" aria-hidden="true" />
        <span className="feature-menu-trigger-core">
          <MenuArrow open={open} />
        </span>
      </button>

      <div
        id="feature-menu-panel"
        className={`flex flex-col items-end gap-2 transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        aria-hidden={!open}
      >
        {featureItems.map((item, index) => {
          const isAnnotation = item.key === "annotation";
          const isPhonetic = item.key === "phonetic";
          const isTranslation = item.key === "translation";
          const isInterpretation = item.key === "interpretation";
          const isFavoriteAction = item.key === "favorite";
          const isAppreciation = item.key === "appreciation";
          const isAiAnalysis = item.key === "ai";
          const isActive =
            (isAnnotation && showAnnotation) ||
            (isPhonetic && showPhonetic) ||
            (isTranslation && showTranslation) ||
            (isFavoriteAction && favoriteActive);
          const handleClick = isAnnotation
            ? toggleAnnotation
            : isPhonetic
              ? togglePhonetic
              : isTranslation
                ? toggleTranslation
                : isFavoriteAction
                  ? () => {
                      if (currentPoemId) {
                        toggleFavorite(currentPoemId);
                      }
                    }
                  : isInterpretation
                    ? handleInterpretationOpen
                  : isAppreciation
                    ? handleAppreciationOpen
                    : isAiAnalysis
                      ? handleAiAnalysisOpen
                      : undefined;
          const pressed = isAnnotation
            ? showAnnotation
            : isPhonetic
              ? showPhonetic
              : isTranslation
                ? showTranslation
                : isFavoriteAction
                  ? favoriteActive
                  : undefined;
          const disabled =
            (isInterpretation || isFavoriteAction || isAppreciation || isAiAnalysis) &&
            !currentPoemId;
          const label = isFavoriteAction && favoriteActive ? "已收藏" : item.label;

          return (
            <div
              key={item.key}
              className={`relative transition-all duration-300 ${
                open ? "translate-x-0 scale-100" : "translate-x-3 scale-95"
              }`}
              style={{ transitionDelay: open ? `${index * 28}ms` : "0ms" }}
            >
              <button
                type="button"
                aria-pressed={pressed}
                disabled={disabled}
                onClick={handleClick}
                className={`feature-action-button focus-ink ${
                  isActive ? "is-active" : ""
                } ${disabled ? "is-disabled" : ""} ${
                  isFavoriteAction ? "favorite-action" : ""
                } ${isFavoriteAction && favoriteActive ? "is-favorite-active" : ""}`}
              >
                <span className="feature-action-icon">
                  <FeatureGlyph kind={item.icon} />
                </span>
                <span className="feature-action-label">{label}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
