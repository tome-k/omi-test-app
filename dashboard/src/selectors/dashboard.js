import { createSelector } from "reselect";

/**
 * Direct selector to the Dashboard state domain
 */
const selectDashboardDomain = (state) => state.dashboard;

/**
 * Other Selectors
 */
const selectDashboard = createSelector(selectDashboardDomain, (substate) => ({
  stats: substate.stats,
  statsRsf: substate.statsRsf,
  timeline: substate.timeline,
  timelineRsf: substate.timelineRsf,
}));

export { selectDashboard };
export default selectDashboardDomain;