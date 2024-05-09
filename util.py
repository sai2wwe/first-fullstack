import json

# Load the data from the JSON file
with open('booksdata.json', 'r') as file:
    data = json.load(file)

# Add "available": "true" to all documents
for document in data:
    document['available'] = 'true'
    document['borrower'] = 'none'
    document['due_date'] = 'none'
    document['queries'] = ['none']
    

# Write the modified data back to the JSON file
with open('booksdata.json', 'w') as file:
    json.dump(data, file, indent=4)