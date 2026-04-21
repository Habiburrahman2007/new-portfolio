import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  "bali-evisa-indonesia": lazy(() => import("./BaliEvisaDetail")),
  leadsup: lazy(() => import("./LeadsUpDetail")),
  polsekrembang: lazy(() => import("./PolsekRembangDetail")),
  floodsegmen: lazy(() => import("./FloodSegmenDetail")),
  qmeal: lazy(() => import("./QMealDetail")),
  lostandfound: lazy(() => import("./LostAndFoundDetail")),
  imageclas: lazy(() => import("./ImageClasDetail")),
  "financial-assistant-bot": lazy(() => import("./FinancialAssistantDetail")),
  "hifdz-tracker": lazy(() => import("./HifdzTrackerDetail")),
  "simple-rag": lazy(() => import("./SimpleRAGDetail")),
  backuper: lazy(() => import("./BackuperDetail")),
  "finansial-assistant-bot": lazy(() => import("./FinanceTrackerDetail")),
  "relax-spa": lazy(() => import("./RelaxSpaDetail")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}
