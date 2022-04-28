import { showQuestionAlert } from './alerts';

export const setQuestionForAlerts = async (question) => {
  return await showQuestionAlert(question);
};
