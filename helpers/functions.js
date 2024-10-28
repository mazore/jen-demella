function getFilename(mappedResults) {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;

    const firstName = mappedResults['First Name'];
    const lastName = mappedResults['Last Name'];

    return `${formattedDate} ${firstName} ${lastName} Intake Report`;
}

function parseDateOfBirth(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    } else if (ageMonths === 0 && today.getDate() < birthDate.getDate()) {
        ageYears--;
        ageMonths = 11;
    }

    return { 'Age': ageYears, 'Month': ageMonths };
}

function generatePronouns(pronouns) {
    const pronounsIndex = {
        'He/Him': 0,
        'She/Her': 1,
        'They/Them': 2,
    }[pronouns];
    if (!pronounsIndex && pronounsIndex != 0) { return {} } // Not in those pronouns
    return {
        'His Her': ['His', 'Her', 'Their'][pronounsIndex],
        'his her': ['his', 'her', 'their'][pronounsIndex],
        'He She': ['He', 'She', 'They'][pronounsIndex],
        'he she': ['he', 'she', 'they'][pronounsIndex],
    }
}
