import { useState, useEffect, useRef } from "react";
import {
  FaHome, FaIdBadge, FaFolderOpen, FaInfoCircle, FaPaperPlane,
  FaAngleDoubleLeft, FaAngleDoubleRight
} from "react-icons/fa";
import { profile, navItems } from "../../config/Config.js";
import "./Sidebar.css";

const iconMap = {
  home:   <FaHome />,
  id:     <FaIdBadge />,
  folder: <FaFolderOpen />,
  info:   <FaInfoCircle />,
  send:   <FaPaperPlane />,
};

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [current, setCurrent] = useState(navItems?.[0]?.key || null);
  const currentRef = useRef(current);         // evita setState desnecessário
  const sidebarRef = useRef(null);

  // Fecha a sidebar ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }
    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);

  // ===== Detecção robusta da seção ativa =====
  useEffect(() => {
    const sections = navItems
      .map(it => document.getElementById(it.key))
      .filter(Boolean);
    if (!sections.length) return;

    let ticking = false;

    // fração da tela usada como “âncora” (0.5 = centro da viewport)
    const ANCHOR_FRACTION = 0.5;

    const updateActive = () => {
      const viewportAnchor = window.innerHeight * ANCHOR_FRACTION;

      let bestId = null;
      let bestDist = Infinity;

      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        const secCenter = rect.top + rect.height / 2;
        const dist = Math.abs(secCenter - viewportAnchor);

        if (dist < bestDist) {
          bestDist = dist;
          bestId = sec.id;
        }
      }

      if (bestId && bestId !== currentRef.current) {
        currentRef.current = bestId;
        setCurrent(bestId);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // inicial
    updateActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar ${expanded ? "expanded" : ""}`}
    >
      <div className="sidebar__content">
        <div className="sidebar__brand">
          <div className="brand__avatar">{profile.initials}</div>
          {expanded && (
            <div className="brand__text">
              <span className="brand__title">{profile.name}</span>
              <span className="brand__subtitle">{profile.role}</span>
            </div>
          )}
        </div>

        <nav className="sidebar__nav" aria-label="Navegação principal">
          {navItems.map((it) => (
            <button
              key={it.key}
              className="nav__item"
              type="button"
              data-active={current === it.key ? "true" : "false"}
              aria-current={current === it.key ? "page" : undefined}
              onClick={() => {
                const section = document.getElementById(it.key);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                // marca imediatamente ao clicar (scroll confirmará em seguida)
                currentRef.current = it.key;
                setCurrent(it.key);
                setExpanded(false);
              }}
            >
              <span className="nav__icon">{iconMap[it.icon]}</span>
              {expanded && <span className="nav__label">{it.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      <button
        className="sidebar__toggle"
        type="button"
        aria-expanded={expanded ? "true" : "false"}
        aria-label={expanded ? "Recolher menu" : "Expandir menu"}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </button>
    </aside>
  );
}
