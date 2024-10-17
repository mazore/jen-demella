from collections import defaultdict
import clipboard
import json
import sys

filename = sys.argv[1]

with open(filename, 'r') as f:
    data = json.load(f)
    # d = defaultdict(int)
    elementsStr = ''
    for item in data['items']:
        type = item['type']

        function_name = None
        if type == 'PARAGRAPH_TEXT':
            function_name = 'longText'
        elif type == 'TEXT':
            function_name = 'shortText'
        elif type == 'SECTION_HEADER':
            continue
        elif type == 'DATE':
            function_name = 'dateOfBirth'
        elif type == 'CHECKBOX':
            function_name = 'checkboxes'
        elif type == 'MULTIPLE_CHOICE':
            function_name = 'multipleChoice'

        code = function_name + "(" + '\n'
        code += '    ' + json.dumps(item['title']) + ',\n'
        code += '    ' + json.dumps(item['helpText']) + ',\n'
        code += '    ' + json.dumps(item['isRequired']) + ',\n'
        if type in ('CHECKBOX', 'MULTIPLE_CHOICE'):
            code += '    ' + json.dumps(item['choices']) + ',\n'
        code += ")"

        elementsStr += code + ',\n'

        # d[type] += 1
        # if type in ('PARAGRAPH_TEXT', 'TEXT'):
        #     elements.append({
        #         'type': 'text',
        #         'name': item['title'],
        #         'title': item['title'],
        #         'description': item['helpText'],
        #         'isRequired': item['isRequired'],

        #         **({
        #             'type': 'comment',
        #             'rows': 2,
        #             'autoGrow': True,
        #             'allowResize': False,
        #         } if type == 'PARAGRAPH_TEXT' else {})
        #     })
        # if type == 'SECTION_HEADER':

        # if type == 'DATE':  # Assume DOB
        #     elements.append({
        #         'type': 'text',
        #         'name': item['title'],
        #         'title': item['title'],
        #         'inputType': 'date',
        #         'defaultValue': '2005-01-01',  # For DOB
        #         'maxValueExpression': 'today(-365)', # For DOB
        #         'isRequired': item['isRequired']
        #     })

        # if type in ('CHECKBOX', 'MULTIPLE_CHOICE'):
        #     elements.append({
        #         'type': 'checkbox' if 'CHECKBOX' else 'radiogroup',
        #         'name': item['title'],
        #         'title': item['title'],
        #         'isRequired': item['isRequired'],
        #         'choices': item['choices'],
        #         'showClearButton': True,
        #         'showNoneItem': False,
        #         'showOtherItem': False,
        #     })

# print(dict(d))
# clipboard.copy(json.dumps(elements, indent=4))
clipboard.copy('[\n' + elementsStr + '\n]')
print('Elements json copied to clipboard')
