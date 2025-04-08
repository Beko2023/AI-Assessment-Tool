import snapShotQuestions from "./questions/snapshot";
import followUpQuestions from "./questions/follow_up";
import keyChallenges from "./questions/key_challenges";
import dataReadiness from "./questions/data_readiness";

export const allQuestions = [
  ...snapShotQuestions,
  ...followUpQuestions,
  ...keyChallenges,
  ...dataReadiness,
];

export default {
  snapShotQuestions,
  followUpQuestions,
  keyChallenges,
  dataReadiness,
  allQuestions,
};
