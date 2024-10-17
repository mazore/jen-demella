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

function checkboxes(title, description, isRequired, choices) {
    return {
        type: 'checkbox',
        name: title,
        title,
        description,
        isRequired,
        choices,
        showClearButton: true,
        showNoneItem: false,
        showOtherItem: false,
    };
}

function multipleChoice(title, description, isRequired, choices) {
    return {
        type: 'radiogroup',
        name: title,
        title,
        description,
        isRequired,
        choices,
        showClearButton: true,
        showNoneItem: false,
        showOtherItem: false,
    };
}

const intakeQuestionnaire = {
    title: 'Patient Intake Questionnaire',
    elements: [
        longText(
            "What has prompted the evaluation at this time?",
            "Please use a few sentences to explain the reason for this assessment including when this started, stability over time, attempts to ameliorate the issue.",
            true,
        ),
        longText(
            "What do you hope to gain from a neuropsychological assessment?",
            "",
            false,
        ),
        shortText(
            "First Name",
            "",
            true,
        ),
        shortText(
            "Last Name",
            "",
            true,
        ),
        dateOfBirth(
            "Date of Birth",
            "",
            true,
        ),
        longText(
            "Describe the patient's current living situation.",
            "Please list everyone in the household including name, age, occupation, education level, relationship. Please note any immediate family members who no longer live at home and reason.",
            false,
        ),
        multipleChoice(
            "Gender Identity",
            "",
            true,
            ["Cisgender male", "Cisgender female", "Non-binary", "Transgender male", "Transgender female", "Other", "Prefer not to answer"],
        ),
        multipleChoice(
            "Pronouns",
            "",
            true,
            ["He/Him", "She/Her", "They/Them", "Other", "Prefer not to answer"],
        ),
        multipleChoice(
            "Sexual Orientation",
            "",
            true,
            ["Heterosexual", "Gay/Lesbian", "Bisexual", "Pansexual", "Asexual", "Panromantic", "Other", "Unknown", "Prefer not to answer"],
        ),
        shortText(
            "Where was the patient born?",
            "City, State",
            true,
        ),
        shortText(
            "Where was the patient raised?",
            "City, State",
            true,
        ),
        checkboxes(
            "What is your cultural heritage?",
            "",
            true,
            ["African", "Asian", "European", "Hispanic or Latino", "Middle Eastern", "Native American", "Pacific Islander", "Mixed descent", "Jewish"],
        ),
        multipleChoice(
            "With whom does the patient currently live?",
            "",
            false,
            ["mother", "father", "mother and father", "grandparents", "family members", "guardian"],
        ),
        multipleChoice(
            "Where there any moves?",
            "",
            true,
            ["no history of moves", "one move", "multiple moves", "recent move within the past year", "frequent moves due to family circumstances", "moves related to military service", "moves related to housing instability"],
        ),
        shortText(
            "If there were any moves, at what age?",
            "",
            false,
        ),
        longText(
            "Maternal History",
            "Please list history of education and highest degree earned. List any educational, medical, or emotional concerns and grade level/age at occurrence. List Currently Employment. List Developmental History\n(milestones met? list age of any concerns).",
            true,
        ),
        longText(
            "Paternal History",
            "Please list history of education and highest degree earned. List any educational, medical, or emotional concerns and grade level/age at occurrence. List Currently Employment. List Developmental History\n(milestones met? list age of any concerns)",
            true,
        ),
        longText(
            "Please describe any important cultural history and ethnic identity of the patient.",
            "",
            false,
        ),
        multipleChoice(
            "Gestation",
            "",
            true,
            ["full-term pregnancy", "preterm pregnancy (less than 37 weeks)", "late-term pregnancy (more than 40 weeks)", "pregnancy with complications", "pregnancy without complications", "multiple pregnancies (twins, triplets, etc.)"],
        ),
        checkboxes(
            "Delivery",
            "",
            true,
            ["vaginal delivery", "cesarean section (C-section)", "emergency C-section", "induced labor", "natural labor without medication", "labor with epidural or other pain management", "assisted delivery (forceps or vacuum extraction)", "delivery with complications", "delivery without complications"],
        ),
        multipleChoice(
            "Did the patient see their doctor or pediatrician for annual well child checkups?",
            "",
            true,
            ["regularly", "occasionally", "rarely", "never"],
        ),
        longText(
            "Describe gross motor development",
            "(include age accomplished)",
            true,
        ),
        longText(
            "Describe fine motor development",
            "(include age accomplished)",
            true,
        ),
        longText(
            "Describe speech and communication\ndevelopment",
            " (include age accomplished)",
            true,
        ),
        multipleChoice(
            "Please describe how discipline or consequences\nare handled in the home.",
            "",
            true,
            ["consistent and involves clear consequences for actions", "generally consistent but varies depending on the situation", "inconsistent and varies widely", "involves positive reinforcement and reward systems", "involves time-outs or loss of privileges", "involves verbal warnings or discussions", "involves physical punishment"],
        ),
        multipleChoice(
            "Is one caregiver typically the disciplinarian?",
            "",
            true,
            ["one caregiver is always the disciplinarian", "one caregiver is usually the disciplinarian", "both caregivers share disciplinarian roles equally", "neither caregiver takes on the disciplinarian role"],
        ),
        multipleChoice(
            "Are caregivers in agreement with discipline?",
            "",
            true,
            ["completely in agreement", "mostly in agreement", "sometimes in agreement", "rarely in agreement", "not in agreement"],
        ),
        multipleChoice(
            "Sensory processing concerns?",
            "",
            true,
            ["over-responsive to sensory input (e.g., sensitive to lights, sounds, textures)", "under-responsive to sensory input (e.g., slow to respond to sensory information)", "seeks out sensory experiences (e.g., craves movement, touch)", "avoids sensory experiences (e.g., avoids certain textures, loud noises)", "mixed response to sensory input", "no sensory processing concerns"],
        ),
        multipleChoice(
            "Any developmental regression?",
            "",
            true,
            ["no regression observed", "mild regression in some skills", "significant regression in multiple skills", "regression in speech and language", "regression in motor skills", "regression in social skills", "regression in self-care abilities"],
        ),
        checkboxes(
            "When did the patient start structured education.",
            "",
            true,
            ["before age 3", "at age 3", "at age 4", "at age 5", "at age 6", "after age 6"],
        ),
        longText(
            "Please list all schools, grades attended.",
            "",
            true,
        ),
        checkboxes(
            "What is the patient's highest level of education?",
            "",
            true,
            ["did not complete high school", "high school diploma or GED", "some college, no degree", "associate's degree", "bachelor's degree", "some graduate school, no degree", "master's degree", "doctoral degree (Ph.D., Ed.D., etc.)", "professional degree (M.D., J.D., etc.)"],
        ),
        shortText(
            "Where did they attend school for the highest level of education?",
            "Name of School",
            true,
        ),
        longText(
            "Please note any concerns in any grades. ",
            "",
            true,
        ),
        multipleChoice(
            "Has the patient ever repeated a grade?",
            "",
            true,
            ["never repeated a grade", "repeated one grade", "repeated multiple grades", "currently repeating a grade"],
        ),
        checkboxes(
            "Special accommodations?",
            "",
            true,
            ["receives special education services", "has an Individualized Education Program (IEP)", "has a 504 Plan", "receives accommodations for standardized testing", "has classroom modifications (e.g., seating arrangements, extra time on assignments)", "receives assistive technology services", "receives behavioral support services", "receives speech and language therapy", "receives occupational therapy", "receives physical therapy"],
        ),
        multipleChoice(
            "Any diagnoses for learning disorders or ADHD?",
            "",
            true,
            ["been diagnosed with a learning disorder", "beendiagnosed with ADHD", "been diagnosed with both a learning disorder and ADHD", "suspected but not formally diagnosed with a learning disorder", "suspected but not formally diagnosed with ADHD", "no diagnoses for learning disorders or ADHD"],
        ),
        multipleChoice(
            "IEP or 504 plan?",
            "",
            true,
            ["currently has an Individualized Education Program (IEP)", "currently has a 504 Plan", "currently has both an IEP and a 504 Plan", "previously had an Individualized Education Program (IEP)", "previously had a 504 Plan", "previously had both an IEP and a 504 Plan", "has never had an IEP or 504 Plan"],
        ),
        multipleChoice(
            "Any problems at school?",
            "(truancy/expulsions/consistent errors/disputes/harassment/bullying):",
            true,
            ["has current academic problems", "has had past academic problems", "has current behavioral problems", "has had past behavioral problems", "has current social problems", "has had past social problems", "has no problems at school"],
        ),
        longText(
            "What are current hobbies or activities?",
            "Please describe. How long has the patient been participating?",
            true,
        ),
        checkboxes(
            "Please note if there is any significant medical history.",
            "",
            true,
            ["no significant medical history", "history of chronic illness (e.g., asthma, diabetes)", "history of surgeries", "history of hospitalizations", "history of genetic disorders", "history of heart conditions", "history of neurological conditions (e.g., epilepsy, migraines)", "history of gastrointestinal issues", "history of respiratory issues", "history of autoimmune disorders"],
        ),
        multipleChoice(
            "Any emergency room visits?",
            "Please list dates and incident.",
            true,
            ["no emergency room visits", "one emergency room visit", "multiple emergency room visits", "emergency room visits for physical health issues", "emergency room visits for mental health issues", "emergency room visits for injuries"],
        ),
        multipleChoice(
            "Any surgeries?",
            "",
            true,
            ["no surgeries", "one surgery", "multiple surgeries", "surgery for physical health issues", "surgery for injuries", "surgery for congenital conditions"],
        ),
        longText(
            "Please elaborate about anything noted above.",
            "",
            false,
        ),
        checkboxes(
            "Any head injury?",
            "(Please note age, loss of consciousness, hospitalized, surgery, persisting cognitive effects):",
            true,
            ["no history of head injuries", "single mild head injury", "multiple mild head injuries", "single severe head injury", "multiple severe head injuries", "diagnosed concussions"],
        ),
        longText(
            "Specify all medications and supplements presently taking with the dosage and the reason.",
            "",
            false,
        ),
        longText(
            "If taking prescription medication, who is the prescribing provider?",
            "Please include type of provider (MD, DO, etc), name and phone number.",
            false,
        ),
        longText(
            "Who is the patient's primary care physician?",
            "Please include type of provider (MD, DO, etc), name and phone number.",
            true,
        ),
        checkboxes(
            "Allergies?",
            "",
            true,
            ["no known allergies", "food allergies", "environmental allergies", "medication allergies", "insect sting allergies", "pet allergies"],
        ),
        multipleChoice(
            "Immunizations up to date?",
            "",
            true,
            ["all immunizations are up to date", "some immunizations are up to date", "no immunizations are up to date", "immunizations are delayed due to medical reasons", "immunizations are delayed due to personal or religious beliefs", "immunizations status unknown"],
        ),
        checkboxes(
            "Are other substances, such as caffeine, tobacco,\nmarijuana, or other non prescription or recreational\ndrugs used?",
            "",
            true,
            ["no use of any substances", "uses caffeine", "uses tobacco", "uses marijuana", "uses other non-prescription or recreational drugs", "uses multiple substances (specify which ones)"],
        ),
        checkboxes(
            "Sleep Concerns?",
            "",
            true,
            ["Delayed Onset", "Frequent Awakening", "Restlessness", "Snoring", "Early Morning Awakening", "Daytime Tiredness", "Nightmares", "Naps"],
        ),
        multipleChoice(
            "Appetite",
            "",
            true,
            ["has a very healthy appetite and eats a wide variety of foods", "has a healthy appetite but is selective about certain foods", "has a moderate appetite and sometimes skips meals", "has a poor appetite and often refuses to eat", "has a fluctuating appetite that varies day to day", "has a strong preference for certain foods and avoids others"],
        ),
        multipleChoice(
            "Vision Concerns?",
            "",
            true,
            ["no vision concerns", "wears glasses or contact lenses", "has difficulty seeing far distances (nearsighted)", "has difficulty seeing close objects (farsighted)", "has astigmatism", "has a lazy eye (amblyopia)", "has strabismus (crossed eyes)", "has color blindness"],
        ),
        multipleChoice(
            "Hearing Concerns?",
            "",
            true,
            ["no hearing concerns", "uses hearing aids", "frequent ear infections", "difficulty hearing in noisy environments", "partial hearing loss in one ear", "partial hearing loss in both ears", "diagnosed with auditory processing disorder"],
        ),
        checkboxes(
            "Does the patient have a psychiatric diagnosis?",
            "",
            true,
            ["not been diagnosed with a psychiatric diagnosis", "has been diagnosed with anxiety disorder", "has been diagnosed with depression", "has been diagnosed with bipolar disorder", "has been diagnosed with schizophrenia", "has been diagnosed with obsessive-compulsive disorder (OCD)", "has been diagnosed with post-traumatic stress disorder (PTSD)", "has been diagnosed with eating disorder", "has been diagnosed with personality disorder", "has been diagnosed with attention-deficit/hyperactivity disorder (ADHD)", "has been diagnosed with autism spectrum disorder (ASD)"],
        ),
        multipleChoice(
            "Has the patient ever been hospitalized for a psychiatric issue?",
            "",
            true,
            ["no history of psychiatric hospitalization", "one psychiatric hospitalization", "multiple psychiatric hospitalizations", "hospitalized for depression", "hospitalized for anxiety", "hospitalized for suicidal ideation or attempts", "hospitalized for psychosis"],
        ),
        multipleChoice(
            "Does the patient currently see a therapist or have seen one in the past?",
            "",
            true,
            ["currently sees a therapist", "has seen a therapist in the past", "has never seen a therapist", "currently sees a therapist and has seen one in the past", "currently sees a counselor", "has seen a counselor in the past", "has never seen a counselor", "currently sees a counselor and has seen one in the past"],
        ),
        multipleChoice(
            "Is there a history of mental illness in the family?",
            "",
            true,
            ["no history of mental illness in the family", "history of depression in the family", "history of anxiety in the family", "history of bipolar disorder in the family", "history of schizophrenia in the family", "history of substance abuse in the family", "history of obsessive-compulsive disorder (OCD) in the family", "history of post-traumatic stress disorder (PTSD) in the family", "history of eating disorders in the family", "history of personality disorders in the family", "other mental illnesses in the family"],
        ),
        multipleChoice(
            "Anxiety",
            "",
            true,
            ["no history of anxiety", "mild anxiety symptoms", "moderate anxiety symptoms", "severe anxiety symptoms", "anxiety diagnosed by a healthcare professional", "currently receiving treatment for anxiety", "past treatment for anxiety"],
        ),
        multipleChoice(
            "Somatic Complaints",
            "",
            true,
            ["no somatic complaints", "frequent headaches", "frequent stomachaches", "muscle tension or pain", "fatigue or low energy", "dizziness or lightheadedness", "nausea or vomiting", "unexplained aches and pains"],
        ),
        multipleChoice(
            "Worry",
            "",
            true,
            ["no excessive worry", "worries occasionally about specific situations", "frequently worries about a variety of issues", "worries excessively about health or safety", "worries excessively about social interactions", "worries excessively about academic performance", "worries excessively about future events"],
        ),
        multipleChoice(
            "Fear",
            "",
            true,
            ["no significant fears", "fear of specific objects or situations (phobias)", "fear of social interactions (social anxiety)", "fear of being away from parents or home (separation anxiety)", "fear of the dark or nighttime", "fear of failure or making mistakes", "fear of being judged or criticized"],
        ),
        multipleChoice(
            "Appropriate Stranger Danger",
            "",
            true,
            ["demonstrates appropriate caution around strangers", "overly cautious around strangers", "too trusting of strangers", "has been taught about stranger danger but does not always follow it", "has not been taught about stranger dange"],
        ),
        multipleChoice(
            "Risk/Danger awareness",
            "",
            true,
            ["has appropriate awareness of risk and danger", "has limited awareness of risk and danger", "has poor awareness of risk and danger", "often engages in risky or dangerous behaviors", "needs constant supervision to ensure safety", "shows excessive fear of risk and danger"],
        ),
        multipleChoice(
            "Obsessive Thoughts",
            "",
            true,
            ["no obsessive thoughts", "occasional obsessive thoughts", "frequent obsessive thoughts", "obsessive thoughts interfere with daily activities", "diagnosed with obsessive-compulsive disorder (OCD)", "currently receiving treatment for obsessive thoughts", "past treatment for obsessive thoughts"],
        ),
        multipleChoice(
            "Repetitive Behaviors or Habits",
            "",
            true,
            ["no repetitive behaviors or habits", "occasional repetitive behaviors or habits", "frequent repetitive behaviors or habits", "repetitive behaviors or habits interfere with daily activities", "diagnosed with obsessive-compulsive disorder (OCD)", "currently receiving treatment for repetitive behaviors or habits", "past treatment for repetitive behaviors or habits"],
        ),
        multipleChoice(
            "Depressed Mood",
            "",
            true,
            ["no signs of depressed mood", "occasional feelings of sadness or low mood", "frequent feelings of sadness or low mood", "persistent depressed mood", "diagnosed with depression", "currently receiving treatment for depression", "past treatment for depression"],
        ),
        multipleChoice(
            "Impulsivity",
            "",
            true,
            ["no signs of impulsivity", "occasional impulsive behavior", "frequent impulsive behavior", "impulsive behavior that interferes with daily activities", "diagnosed with ADHD", "currently receiving treatment for impulsivity", "past treatment for impulsivity"],
        ),
        multipleChoice(
            "Hyperactivity",
            "",
            true,
            ["no signs of hyperactivity", "occasional hyperactive behavior", "frequent hyperactive behavior", "hyperactive behavior that interferes with daily activities", "diagnosed with ADHD", "currently receiving treatment for hyperactivity", "past treatment for hyperactivity"],
        ),
        multipleChoice(
            "Distractibility",
            "",
            true,
            ["no signs of distractibility", "occasionally distracted", "frequently distracted", "distractibility interferes with daily activities", "diagnosed with ADHD", "currently receiving treatment for distractibility", "past treatment for distractibility"],
        ),
        multipleChoice(
            "Inattention",
            "",
            true,
            ["no signs of inattention", "occasional inattention", "frequent inattention", "inattention that interferes with daily activities", "diagnosed with ADHD", "currently receiving treatment for inattention", "past treatment for inattention"],
        ),
        multipleChoice(
            "Tantrums",
            "",
            true,
            ["no history of tantrums", "occasional tantrums", "frequent tantrums", "severe tantrums", "tantrums triggered by specific situations", "tantrums that interfere with daily activities", "currently receiving treatment for tantrums", "past treatment for tantrums"],
        ),
        multipleChoice(
            "Self-Injurious Behaviors",
            "",
            true,
            ["no self-injurious behaviors", "occasional self-injurious behaviors", "frequent self-injurious behaviors", "cutting or scratching", "burning", "hitting or punching oneself", "head banging", "currently receiving treatment for self-injurious behaviors", "past treatment for self-injurious behaviors"],
        ),
        multipleChoice(
            "Aggression",
            "",
            true,
            ["no signs of aggression", "occasional aggressive behavior", "frequent aggressive behavior", "verbal aggression", "physical aggression", "aggression towards self", "aggression towards others", "currently receiving treatment for aggression", "past treatment for aggression"],
        ),
        multipleChoice(
            "Hallucinations/Delusions",
            "",
            true,
            ["no history of hallucinations or delusions", "occasional hallucinations", "frequent hallucinations", "occasional delusions", "frequent delusions", "diagnosed with a psychotic disorder", "currently receiving treatment for hallucinations or delusions", "past treatment for hallucinations or delusions"],
        ),
        multipleChoice(
            "Substance Use",
            "",
            true,
            ["no history of substance use", "occasional use of substances (e.g., alcohol, tobacco)", "frequent use of substances (e.g., alcohol, tobacco)", "use of marijuana", "use of prescription drugs not prescribed to them", "use of illegal drugs", "currently receiving treatment for substance use", "past treatment for substance use"],
        ),
        multipleChoice(
            "Sexual History",
            "",
            true,
            ["no sexual activity", "sexually active with one partner", "sexually active with multiple partners", "history of consensual sexual activity", "history of non-consensual sexual activity", "history of sexually transmitted infections (STIs)", "currently receiving treatment for sexual health issues"],
        ),
        multipleChoice(
            "Social Connections",
            "",
            true,
            ["strong social connections with peers", "moderate social connections with peers", "weak social connections with peers", "difficulty making or maintaining friendships", "socially isolated or withdrawn", "participates in social activities or groups"],
        ),
        multipleChoice(
            "Please describe social supports.",
            "",
            true,
            ["strong support from family", "strong support from friends", "involvement in community groups or organizations", "participation in support groups", "strong support from school staff or teachers", "support from religious or spiritual community", "limited social support", "no social support"],
        ),
        multipleChoice(
            "If in a relationship, please describe the nature of the relationship and length of time together.",
            "",
            true,
            ["in a stable and supportive relationship for less than 6 months", "in a stable and supportive relationship for 6 months to 1 year", "in a stable and supportive relationship for 1 to 3 years", "in a stable and supportive relationship for more than 3 years", "in a turbulent or unstable relationship for less than 6 months", "in a turbulent or unstable relationship for 6 months to 1 year", "in a turbulent or unstable relationship for 1 to 3 years", "in a turbulent or unstable relationship for more than 3 years"],
        ),
        multipleChoice(
            "Does the patient feel safe in the relationship?",
            "",
            true,
            ["always feels safe in the relationship", "mostly feels safe in the relationship", "sometimes feels safe in the relationship", "rarely feels safe in the relationship", "never feels safe in the relationship", "N/A"],
        ),
        checkboxes(
            "Please check any of the following that apply",
            "",
            true,
            ["Does not give close attention to details", "Distractible and has concentration problems", "Does not listen or follow instructions", "Fails to complete tasks", "Loses or misplaces things", "Forgetful", "Fidgets and squirms", "Has difficulty staying seated", "Talks excessively", "Moves,runs, or climbs when not appropriate", "Difficulty waiting turn in line or during games", "Interrupts or intrudes on others", "Difficulty inhibiting inappropriate responses", "Difficulty sifting attention between tasks", "Organizing information", "Difficulty planning and completing multiple step tasks", "Difficulty monitoring and adapting behavior", "Difficulty regulating emotional response", "Difficulty managing time", "Difficulty initiating and completing tasks", "Struggles with reading", "Difficulty mastering phonics (letter sounds)", "Poor reading comprehension", "Struggles with math concepts", "Difficulty with writing conventions such as punctuation", "Difficulty organizing their thoughts", "Poor spelling", "Frequently complains about school", "Easily discouraged or overwhelmed with homework", "Problems sharing interests or emotions with others", "Fails to initiate or respond to social situations", "Shows poor regulation of eye contact and body language", "Decreased interest in developing friendships with others", "Does not understand nonverbal cues", "Uses toys in nonfunctional ways (focus on wheel rather than", "use car imaginatively)", "Copies words or phrases repeatedly", "Highly restricted, fixed interests", "Low or high response to sensory experiences (light, sound,", "textures of food or clothing)", "Doesn't get called for outings or playdates", "Doesn't have close friendships", "Misinterprets others comments or behavior", "Misses social cues", "Is withdrawn from others", "Feels isolated and lonely", "Struggles to initiate conversation", "Says or does things that put off others", "Doesn't feel confident around others", "Struggles in large groups"],
        ),
        multipleChoice(
            "History of Abuse or Neglect?",
            "",
            true,
            ["no history of abuse or neglect", "history of physical abuse", "history of emotional abuse", "history of sexual abuse", "history of neglect", "multiple types of abuse", "currently receiving treatment for abuse or neglect", "past treatment for abuse or neglect"],
        ),
        multipleChoice(
            "Any CPS Contact?",
            "",
            true,
            ["no contact with Child Protective Services (CPS)", "past contact with CPS", "current involvement with CPS", "multiple contacts with CPS", "CPS contact due to suspected abuse or neglect", "CPS contact due to other family issues"],
        ),
        multipleChoice(
            "Any history or Interaction with Legal System/Legal Concerns?",
            "",
            true,
            ["no history of interaction with the legal system", "past interaction with the legal system", "current legal concerns or involvement", "history of juvenile delinquency", "history of arrests or charges", "history of court appearances", "probation or parole history", "involvement with family court (custody, guardianship, etc.)"],
        ),
        longText(
            "Please note the patient's strengths.",
            "",
            false,
        ),
        longText(
            "Is there anything else that you would like me to know?",
            "",
            false,
        ),

    ],
    showQuestionNumbers: 'off',
    completedHtml: 'Thank you for completing the questionnaire!',
}
