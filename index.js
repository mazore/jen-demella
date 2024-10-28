const APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzguJXhyZStKM34zHOLR4Km5RrZpODwIN6XswtesaFqWMPXMS3E9_ebbyuqkWo4ZLHOOQ/exec';

document.addEventListener('DOMContentLoaded', function() {
    const survey = new Survey.Model(intakeQuestionnaire);

    survey.applyTheme(SurveyTheme.PlainLight); // https://surveyjs.io/form-library/documentation/manage-default-themes-and-styles

    survey.render(document.getElementById('surveyContainer'));

    survey.onComplete.add(function (result) {
        console.log(JSON.stringify(result.data));

        let mappedResults = {};

        for (const questionKey in intakeEntryTemplateMap) {
            if (!questionKey) continue;
            const questionText = intakeEntryTemplateMap[questionKey];
            mappedResults[questionKey] = result.data[questionText];
        }

        mappedResults = {
            filename: getFilename(result.data),
            ...mappedResults,
            ...parseDateOfBirth(mappedResults['DOB']),
            ...generatePronouns(mappedResults['Pronouns'])
        };

        console.log('Posting data:', mappedResults);
        postResponse(mappedResults);
    });
});

function postResponse(payload) {
    fetch(APP_SCRIPT_URL, {
        redirect: 'follow',
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;utf-8' },
        body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => console.log('Survey submitted successfully:', data))
    .catch(error => console.error('Error submitting survey:', error));
}
