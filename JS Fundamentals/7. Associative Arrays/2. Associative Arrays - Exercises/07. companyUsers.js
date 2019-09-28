function companyUsers(input) {
    let companies = {}

    for (const company of input) {
        let tokens = company.split(" -> ");
        let name = tokens[0];
        let id = tokens[1];

        if (!companies.hasOwnProperty(name)) {
            companies[name] = [id];
        } else if (!companies[name].includes(id)) {
            companies[name].push(id);
        }
    }

    let sortCompanies = Object.entries(companies).sort();
    
    for (const [name, ids] of sortCompanies) {
        console.log(name);
        console.log(`-- ${ids.join("\n-- ")}`);
    }
}

companyUsers(
    [ 'SoftUni -> AA12345',
  'SoftUni -> BB12345',
  'Microsoft -> CC12345',
  'HP -> BB12345' ]
)