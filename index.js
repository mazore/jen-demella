const survey = new Survey.Model(intakeQuestionnaire);

survey.applyTheme(SurveyTheme.PlainLight); // https://surveyjs.io/form-library/documentation/manage-default-themes-and-styles

document.addEventListener('DOMContentLoaded', function() {
    survey.render(document.getElementById('surveyContainer'));
});

survey.onComplete.add(function (result) {
    console.log("Survey results: " + JSON.stringify(result.data));
    // You can add additional logic here to handle the survey results
});
