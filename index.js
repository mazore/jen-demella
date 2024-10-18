const survey = new Survey.Model(intakeQuestionnaire);

survey.applyTheme(SurveyTheme.PlainLight); // https://surveyjs.io/form-library/documentation/manage-default-themes-and-styles

document.addEventListener('DOMContentLoaded', function() {
    survey.render(document.getElementById('surveyContainer'));
});

survey.onComplete.add(function (result) {
    console.log("Survey results: " + JSON.stringify(result.data));
    generateWordDocument(result.data);
});

function generateWordDocument(results) {
    const { Document, Packer, Paragraph, TextRun } = window.docx;

    const filename = `${results['First Name']} ${results['Last Name']} Intake Report.docx`;
    const paragraphs = [];

    for (const question in results) {
        const answer = results[question];
        const answerTextRuns = [];

        if (Array.isArray(answer)) {
            for (const item of answer) {
                answerTextRuns.push(new TextRun({ text: item, break: 1 }));
            };
        } else {
            answerTextRuns.push(new TextRun({ text: answer, break: 1 }));
        }

        paragraphs.push(new Paragraph({
            children: [
                new TextRun({
                    text: question,
                    bold: true,
                }),
                ...answerTextRuns
            ],
        }));
        paragraphs.push(new Paragraph({})); // To break up the questions
    }

    const doc = new Document({
        sections: [{
            properties: {},
            children: paragraphs,
        }]
    });

    // Download word doc
    Packer.toBlob(doc).then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    });
}
