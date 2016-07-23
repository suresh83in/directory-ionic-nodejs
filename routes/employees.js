var employees = [
    {"id": 0, "firstName": "Narasimha", "lastName": "Prasad", "reports": 1, "title": "Digital Channels Lead", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "James_King.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
    {"id": 1, "firstName": "Suresh", "lastName": "Muthukrishnan", "managerId": 0, "managerName": "NNP", "reports": 3, "title": "Mobile App Architect", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "Julie_Taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
    {"id": 2, "firstName": "Kumar", "lastName": "Thangaraj", "managerId": 1, "managerName": "Suresh Muthukrishnan", "reports": 2, "title": "Senior Manager", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "Lisa_Wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
    {"id": 3, "firstName": "Divey", "lastName": "Chandra", "managerId": 1, "managerName": "Suresh Muthukrishnan", "reports": 1, "title": "Junior Architect", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
    {"id": 4, "firstName": "Sharath", "lastName": "Mangalore", "managerId": 1, "managerName": "Suresh Muthukrishnan", "reports": 0, "title": "iOS developer", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
    {"id": 5, "firstName": "Prathima", "lastName": "Shenoy", "managerId": 3, "managerName": "Divey Chandra", "reports": 0, "title": "framework developer", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "Kathleen_Byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
    {"id": 6, "firstName": "Sudharsan", "lastName": "Gurumurthy", "managerId": 2, "managerName": "Kumar Thangaraj", "reports": 0, "title": "framework Lead", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "Amy_Jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
    {"id": 7, "firstName": "Dhakshinamoorthy", "lastName": "Elangovan", "managerId": 2, "managerName": "Kumar Thangaraj", "reports": 0, "title": "framework developer", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
];

exports.findAll = function (req, res, next) {
    var name = req.query.name;
    if (name) {
        res.send(employees.filter(function(employee) {
            return (employee.firstName + ' ' + employee.lastName + ' ' + employee.title).toLowerCase().indexOf(name.toLowerCase()) > -1;
        }));
    } else {
        res.send(employees);
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(employees[id]);
};

exports.findReports = function (req, res, next) {
    var id = parseInt(req.params.id),
        response,
        reports = [],
        employee;

    response = {
        id: id,
        firstName: employees[id].firstName,
        lastName: employees[id].lastName,
        title: employees[id].title,
        pic: employees[id].pic
    }

    for (var i=0; i<employees.length; i++) {
        employee = employees[i];
        if (employee.managerId === id) {
            reports.push({id: employee.id, firstName: employee.firstName, lastName: employee.lastName, title: employee.title, pic: employee.pic});
        }
    }

    response.reports = reports;

    res.send(response);
};
