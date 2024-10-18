function longText(title, description, isRequired) {
    return {
        type: 'comment',
        name: title,
        title,
        description,
        isRequired,
        rows: 2,
        autoGrow: true,
        allowResize: false,
    };
}

function shortText(title, description, isRequired) {
    return {
        type: 'text',
        name: title,
        title,
        description,
        isRequired,
    };
}

function dateOfBirth(title, description, isRequired) {
    return {
        type: 'text',
        name: title,
        title,
        description,
        isRequired,
        inputType: 'date',
        defaultValue: '2005-01-01',  // For DOB
        maxValueExpression: 'today(-365)', // For DOB
    };
}

function multipleChoice(title, description, isRequired, choices, multipleSelect = false, dropdown = false) {
    let type;
    if (!multipleSelect) {
        if (dropdown) { // Single select dropdown
            type = 'dropdown';
        } else { // Single select checkboxes
            type = 'radiogroup';
        }
    } else {
        if (dropdown) { // Multi select dropdown
            type = 'tagbox';
        } else { // Multi select checkboxes
            type = 'checkbox';
        }
    }
    return {
        type,
        name: title,
        title,
        description,
        isRequired,
        choices,
        showClearButton: false,
        showNoneItem: false,
        showOtherItem: false,
    };
}
