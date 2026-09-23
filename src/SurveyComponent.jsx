import generateDictionary from "./generateDictionary";
import React, { useMemo, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.min.css";

import { themeJson } from "./theme";
import "./index.css";
import { json } from "./json";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxfkU62RvOB_XcZWp06Zm2epEfCA9xLbi9GdirjoTkkZUYO9aMJqE8FMQiWGlWlbosZ/exec";

function SurveyComponent() {
  const [currentPage, setCurrentPage] = useState(0);

  const survey = useMemo(() => {
    const model = new Model(json);

    model.applyTheme(themeJson);

    // Update progress bar ketika pindah halaman
    model.onCurrentPageChanged.add((sender) => {
      setCurrentPage(sender.currentPageNo);
    });

    model.onComplete.add(async (sender) => {
      console.log("===== BEFORE FETCH =====");
      console.log(sender.data);
      console.log(JSON.stringify(sender.data, null, 2));

      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(sender.data),
        });

        console.log("===== AFTER FETCH =====");
        console.log("Survey submitted.");
      } catch (err) {
        console.error(err);
      }
    });

    return model;
  }, []);

  // Total halaman yang sedang visible
  const totalPages = survey.visiblePageCount;

  // Hitung progress
  const progress = totalPages > 0 ? ((currentPage + 1) / totalPages) * 100 : 0;

  return (
    <div className="survey-wrapper">
      {/* CUSTOM PROGRESS BAR */}
      <div className="custom-progress">
        <div
          className="custom-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* SURVEY */}
      <Survey model={survey} />
    </div>
  );
}

export default SurveyComponent;
