import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

import "survey-core/defaultV2.min.css";

import "./styles.css";

import { json } from "./json";
import { themeJson } from "./theme";

export default function App() {
  const survey = new Model(json);

  survey.applyTheme(themeJson);

  survey.onComplete.add(async (sender) => {
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(sender.data),
      });

      console.log("Survey submitted.");
    } catch (e) {
      console.error(e);
    }
  });

  return <Survey model={survey} />;
}
