"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  startTransition,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type TouchEvent
} from "react";
import { useReadingControls } from "@/components/reading-controls";
import type { Poem } from "@/data/poems";

type CatalogDrawerProps = {
  poems: Poem[];
  currentPoemId?: string;
};

type DrawerView = "catalog" | "favorite";

export function CatalogDrawer({
  poems,
  currentPoemId
}: CatalogDrawerProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<DrawerView>("catalog");
  const [dragOffset, setDragOffset] = useState(0);
  const [swipeDragging, setSwipeDragging] = useState(false);
  const { favoritePoemIds, isFavorite } = useReadingControls();
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const swipeActiveRef = useRef(false);
  const suppressClickRef = useRef(false);
  const suppressClickTimeoutRef = useRef<number | null>(null);
  const prefetchRafRef = useRef<number | null>(null);
  const prefetchedPoemIdsRef = useRef<Set<string>>(new Set());

  const favoritePoems = useMemo(() => {
    return poems.filter((poem) => favoritePoemIds.includes(poem.id));
  }, [favoritePoemIds, poems]);

  function toggleOpen() {
    resetSwipeState();
    startTransition(() => {
      setOpen((value) => !value);
    });
  }

  function closeDrawer() {
    resetSwipeState();
    startTransition(() => {
      setOpen(false);
    });
  }

  function switchView(nextView: DrawerView) {
    startTransition(() => {
      setView(nextView);
    });
  }

  function stopInteractiveClick(event: MouseEvent<HTMLElement>) {
    event.stopPropagation();
  }

  function queueClickSuppression() {
    suppressClickRef.current = true;

    if (suppressClickTimeoutRef.current !== null) {
      window.clearTimeout(suppressClickTimeoutRef.current);
    }

    suppressClickTimeoutRef.current = window.setTimeout(() => {
      suppressClickRef.current = false;
      suppressClickTimeoutRef.current = null;
    }, 250);
  }

  function resetSwipeState() {
    touchStartRef.current = null;
    swipeActiveRef.current = false;
    setSwipeDragging(false);
    setDragOffset(0);
  }

  function handleDrawerClickCapture(event: MouseEvent<HTMLElement>) {
    if (!suppressClickRef.current) {
      return;
    }

    suppressClickRef.current = false;
    event.preventDefault();
    event.stopPropagation();
  }

  function handleTouchStart(event: TouchEvent<HTMLElement>) {
    if (!open || event.touches.length !== 1) {
      return;
    }

    const touch = event.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY
    };
    swipeActiveRef.current = false;
  }

  function handleTouchMove(event: TouchEvent<HTMLElement>) {
    if (!open || event.touches.length !== 1 || !touchStartRef.current) {
      return;
    }

    const touch = event.touches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const horizontalDistance = Math.abs(deltaX);
    const verticalDistance = Math.abs(deltaY);

    if (!swipeActiveRef.current) {
      if (horizontalDistance < 12 && verticalDistance < 12) {
        return;
      }

      if (deltaX < 0 && horizontalDistance > verticalDistance * 1.15) {
        swipeActiveRef.current = true;
        setSwipeDragging(true);
      } else if (verticalDistance > horizontalDistance) {
        touchStartRef.current = null;
        return;
      } else {
        return;
      }
    }

    if (!swipeActiveRef.current) {
      return;
    }

    event.preventDefault();
    setDragOffset(Math.min(Math.abs(deltaX), 240));
  }

  function handleTouchEnd() {
    if (!open) {
      return;
    }

    const shouldClose = swipeActiveRef.current && dragOffset >= 72;

    if (swipeActiveRef.current || dragOffset > 0) {
      queueClickSuppression();
    }

    if (shouldClose) {
      resetSwipeState();
      closeDrawer();
      return;
    }

    resetSwipeState();
  }

  function prefetchPoemIds(ids: string[]) {
    ids.forEach((id) => {
      if (!id || prefetchedPoemIdsRef.current.has(id)) {
        return;
      }

      prefetchedPoemIdsRef.current.add(id);
      router.prefetch(`/poems/${id}`);
    });
  }

  function renderPoemCard(poem: Poem) {
    const active = poem.id === currentPoemId;
    const favorited = isFavorite(poem.id);

    return (
      <Link
        key={poem.id}
        href={`/poems/${poem.id}`}
        onClick={closeDrawer}
        ref={(node) => {
          itemRefs.current[poem.id] = node;
        }}
        aria-current={active ? "page" : undefined}
        className={`focus-ink block rounded-[1.4rem] border px-4 py-4 transition-all duration-200 ${
          active
            ? "translate-x-1 border-[color:rgba(122,94,61,0.55)] bg-[rgba(244,233,211,0.82)] shadow-[0_12px_26px_rgba(84,62,44,0.08)]"
            : "border-[color:rgba(201,183,154,0.68)] bg-[rgba(255,250,242,0.48)] hover:border-[color:rgba(122,94,61,0.5)] hover:bg-[rgba(250,243,228,0.74)]"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs tracking-[0.24em] text-[color:var(--color-ink-soft)]">
                {poem.chapter}
              </p>
              {favorited ? <span className="catalog-favorite-pill">已收藏</span> : null}
            </div>
            <h2 className="mt-2 font-[family-name:var(--font-ink)] text-3xl tracking-[0.03em] text-[color:var(--color-accent)]">
              {poem.title}
            </h2>
          </div>
          <span className="text-xs text-[color:var(--color-ink-soft)]">
            {poem.orderLabel}
          </span>
        </div>
      </Link>
    );
  }

  const visiblePoems = view === "catalog" ? poems : favoritePoems;
  const preferredPoemId = visiblePoems.some((poem) => poem.id === currentPoemId)
    ? currentPoemId
    : visiblePoems[0]?.id;

  function collectVisiblePoemIds() {
    const node = listRef.current;

    if (!node) {
      return [];
    }

    const frameRect = node.getBoundingClientRect();

    return visiblePoems
      .filter((poem) => {
        const item = itemRefs.current[poem.id];

        if (!item) {
          return false;
        }

        const itemRect = item.getBoundingClientRect();

        return itemRect.bottom >= frameRect.top - 48 && itemRect.top <= frameRect.bottom + 48;
      })
      .map((poem) => poem.id);
  }

  function collectNeighborPoemIds(seedIds: string[]) {
    const ids = new Set<string>();
    const poemIndexes = new Map(visiblePoems.map((poem, index) => [poem.id, index]));

    seedIds.forEach((id) => {
      const index = poemIndexes.get(id);

      if (index === undefined) {
        return;
      }

      for (let offset = -2; offset <= 4; offset += 1) {
        const poem = visiblePoems[index + offset];

        if (poem) {
          ids.add(poem.id);
        }
      }
    });

    return [...ids];
  }

  function prefetchCatalogTargets() {
    if (!open) {
      return;
    }

    const visibleIds = collectVisiblePoemIds();
    const seedIds =
      visibleIds.length > 0
        ? visibleIds
        : preferredPoemId
          ? [preferredPoemId]
          : visiblePoems.slice(0, 4).map((poem) => poem.id);
    const neighborIds = collectNeighborPoemIds(
      preferredPoemId ? [preferredPoemId, ...seedIds] : seedIds
    );

    prefetchPoemIds([...seedIds, ...neighborIds]);
  }

  function scheduleCatalogPrefetch() {
    if (prefetchRafRef.current !== null) {
      window.cancelAnimationFrame(prefetchRafRef.current);
    }

    prefetchRafRef.current = window.requestAnimationFrame(() => {
      prefetchRafRef.current = null;
      prefetchCatalogTargets();
    });
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const node = listRef.current;

    if (!node) {
      return;
    }

    const targetNode = preferredPoemId ? itemRefs.current[preferredPoemId] : null;

    const frame = window.requestAnimationFrame(() => {
      if (targetNode) {
        targetNode.scrollIntoView({
          block: "nearest",
          behavior: "auto"
        });
      } else {
        node.scrollTo({ top: 0, behavior: "auto" });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [open, preferredPoemId, view, visiblePoems.length]);

  useEffect(() => {
    if (!open) {
      return;
    }

    scheduleCatalogPrefetch();

    return () => {
      if (prefetchRafRef.current !== null) {
        window.cancelAnimationFrame(prefetchRafRef.current);
        prefetchRafRef.current = null;
      }
    };
  }, [open, preferredPoemId, view, visiblePoems]);

  useEffect(() => {
    return () => {
      if (suppressClickTimeoutRef.current !== null) {
        window.clearTimeout(suppressClickTimeoutRef.current);
      }

      if (prefetchRafRef.current !== null) {
        window.cancelAnimationFrame(prefetchRafRef.current);
      }
    };
  }, []);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="poem-catalog"
        aria-label={open ? "关闭目录" : "打开目录"}
        onClick={toggleOpen}
        className={`seal-button catalog-surface focus-ink fixed left-5 top-5 z-50 flex size-16 items-center justify-center rounded-[1.55rem] border border-[color:rgba(177,154,118,0.66)] text-[color:var(--color-ink-soft)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5 sm:left-7 sm:top-7 sm:size-[4.5rem] ${
          open ? "rotate-180" : "rotate-0"
        }`}
      >
        <span className="sr-only">目录</span>
        <span className="catalog-glyph" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
          <i />
          <i />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-[rgba(49,38,29,0.2)] transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeDrawer}
      />

      <aside
        id="poem-catalog"
        aria-label="诗经目录"
        onClickCapture={handleDrawerClickCapture}
        onClick={closeDrawer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{
          transform: open ? `translateX(-${dragOffset}px)` : undefined,
          touchAction: "pan-y"
        }}
        className={`catalog-surface fixed inset-y-0 left-0 z-50 w-[min(24rem,88vw)] border-r border-[color:rgba(167,142,104,0.58)] px-5 py-24 transition-transform sm:px-7 ${
          swipeDragging ? "duration-0" : "duration-300"
        } ${open ? "" : "-translate-x-full"}`}
      >
        <div className="ink-frame flex h-full flex-col rounded-[1.75rem] px-5 py-6 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <p className="section-title text-[11px] text-[color:var(--color-ink-soft)]">
              目录
            </p>
            {favoritePoems.length > 0 ? (
              <span className="text-xs tracking-[0.16em] text-[color:var(--color-ink-soft)]">
                已收藏 {favoritePoems.length}
              </span>
            ) : null}
          </div>

          <div className="mt-6 rounded-[1.45rem] border border-[rgba(191,163,126,0.24)] bg-[rgba(255,249,240,0.44)] p-1.5">
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={(event) => {
                  stopInteractiveClick(event);
                  switchView("catalog");
                }}
                className={`catalog-switch-button focus-ink ${
                  view === "catalog" ? "is-active" : ""
                }`}
              >
                目录
              </button>
              <button
                type="button"
                onClick={(event) => {
                  stopInteractiveClick(event);
                  switchView("favorite");
                }}
                className={`catalog-switch-button focus-ink ${
                  view === "favorite" ? "is-active" : ""
                }`}
              >
                <span>收藏</span>
                {favoritePoems.length > 0 ? (
                  <span className="catalog-switch-count">{favoritePoems.length}</span>
                ) : null}
              </button>
            </div>
          </div>

          <div className="catalog-list-frame mt-6">
            <div
              ref={listRef}
              tabIndex={0}
              onScroll={scheduleCatalogPrefetch}
              className="catalog-scroll-panel focus-ink space-y-3"
            >
              {visiblePoems.length > 0 ? visiblePoems.map(renderPoemCard) : null}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
