const APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyAzotKRZ4N4ikBtSMxHygA3kVnkI1v0CNicHix75OCkuCaICb6U4b4-KjaxWti7tnQNw/exec';

const SAMPLE_ANSWERS = intakeQuestionnaire.elements.reduce((acc, element, i) => {
    const { name } = element;
    let text;
    if (name == 'First Name') {
        text = 'John';
    } else if (name == 'Last Name') {
        text = 'Doe';
    } else if (name == 'Pronouns') {
        text = 'He/Him';
    } else {
        text = `Template answer for ${i + 1}: ${name}`;
    }
    acc[name] = text;
    return acc;
}, {});

document.addEventListener('DOMContentLoaded', function() {
    const survey = new Survey.Model(intakeQuestionnaire);

    survey.applyTheme(SurveyTheme.PlainLight); // https://surveyjs.io/form-library/documentation/manage-default-themes-and-styles

    survey.render(document.getElementById('surveyContainer'));

    survey.onComplete.add(function (result) {
        console.log(JSON.stringify(result.data));

        let mappedResults = {};

        for (const questionTitle in intakeEntryTemplateMap) {
            const templateKey = intakeEntryTemplateMap[questionTitle];
            mappedResults[templateKey] = result.data[questionTitle];

            if (Array.isArray(mappedResults[templateKey])) { // If multiple choice, combine array into a string with commas and 'and'
                if (mappedResults[templateKey].length > 1) {
                    const lastItem = mappedResults[templateKey].pop();
                    mappedResults[templateKey] = `${mappedResults[templateKey].join(', ')} and ${lastItem}`;
                } else {
                    mappedResults[templateKey] = mappedResults[templateKey][0];
                }
            }
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
