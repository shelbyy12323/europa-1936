import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import WorldAtlas from './WorldAtlas';
import Script from 'next/script';

const mapVersion = createHash('sha256').update(readFileSync('public/europe-1936.js')).digest('hex').slice(0, 12);

function CampaignMenu() {
  return (
    <section id="campaign-menu" className="campaign" aria-labelledby="campaign-title">
      <div className="campaign-inner">
        <header>
          <p className="campaign-date">Новая кампания</p>
          <h1 id="campaign-title">Карта <span>мира</span></h1>
        </header>
        <fieldset className="world-settings"><legend>Дата и страна старта</legend>
          <label>Стартовый год<input id="world-year" type="number" min="-3400" max="2026" defaultValue="1936" /></label>
          <label>Страна или территория<select id="world-country" size="7" /></label>
          <small id="history-status" role="status">Загрузка исторических карт…</small>
        </fieldset>
        <div className="campaign-actions">
          <button id="campaign-start" type="button">Начать кампанию</button>
          <button id="campaign-resume" type="button" hidden>Продолжить партию</button>
        </div>
      </div>
    </section>
  );
}

function EuropeGame() {
  return (
    <main aria-label="Европа 1936">
      <div id="game-layer" inert>
        <canvas id="cv" aria-label="Карта кампании" />
        <div id="top" />
        <button id="flag" type="button" aria-label="Сведения о стране" />
        <div id="tr" />
        <div id="cp" className="pn" />
        <div id="log" />
        <div id="tip" /><aside id="foreign-country" hidden><strong /><button type="button">Импорт стали</button></aside>
        <aside id="city-panel" aria-label="Приказы для города" hidden />

        <div id="win" className="pn" hidden>
          <div id="wh" className="ph">
            <span id="wt" />
            <button className="x" type="button" aria-label="Закрыть окно">✕</button>
          </div>
          <div id="wb" />
        </div>

        <aside id="army-drawer" hidden aria-label="Планировщик армии" /><div id="bot">
          <small id="plan-hint" />
          <div id="gens" />
          <div id="bb">
            <button id="focus-front" type="button">Линия фронта</button>
            <button id="start-offensive" className="go" type="button">Начать наступление</button>
          </div>
        </div>

        <div id="front-list" aria-label="Армии театра" /><canvas id="mini-map" width="232" height="124" aria-label="Обзорная карта" /><WorldAtlas /><div id="modes" />
        <button id="campaign-open" type="button" hidden>Меню</button>
        <div id="md" hidden><div /></div>
      </div>
      <CampaignMenu />
      <Script src={`${process.env.NEXT_PUBLIC_GAME_BASE || ''}/europe-1936.js?v=${mapVersion}`} strategy="afterInteractive" />
    </main>
  );
}

export default function Page() {
  return <EuropeGame />;
}



