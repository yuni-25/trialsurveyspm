import { json } from "./json";

function generateDictionary() {
  const rows = [];

  function scan(elements) {
    elements.forEach((q) => {
      if (!q.name) return;

      // Matrix Dropdown
      if (q.type === "matrixdropdown") {
        q.rows.forEach((row) => {
          q.columns.forEach((col) => {
            rows.push({
              Variable: `${q.name} - ${row.value} - ${col.name}`,
              Question: q.title || "",
              Type: q.type,
            });
          });
        });
        return;
      }

      // Pertanyaan biasa
      rows.push({
        Variable: q.name,
        Question: q.title || "",
        Type: q.type,
      });

      // Jika ada comment otomatis
      if (q.showCommentArea) {
        rows.push({
          Variable: `${q.name}-Comment`,
          Question: q.title || "",
          Type: "comment",
        });
      }

      // Other
      if (q.showOtherItem) {
        rows.push({
          Variable: `${q.name}-Comment`,
          Question: q.title || "",
          Type: "other",
        });
      }
    });
  }

  json.pages.forEach((page) => scan(page.elements));

  const csv = [
    "Variable,Question,Type",
    ...rows.map(
      (r) => `"${r.Variable}","${r.Question.replace(/"/g, '""')}","${r.Type}"`
    ),
  ].join("\n");

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "SurveyDictionary.csv";

  link.click();

  URL.revokeObjectURL(url);
}

export default generateDictionary;
