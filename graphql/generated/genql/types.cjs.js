module.exports = {
    "scalars": [
        1,
        2,
        3,
        6,
        7
    ],
    "types": {
        "Customer": {
            "createdAt": [
                3
            ],
            "dateOfBirth": [
                3
            ],
            "firstName": [
                1
            ],
            "id": [
                2
            ],
            "lastName": [
                1
            ],
            "licenseDate": [
                3
            ],
            "licenseImageUrl": [
                1
            ],
            "licenseNumber": [
                1
            ],
            "placeOfBirth": [
                1
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "ID": {},
        "DateTime": {},
        "Mutation": {
            "createCustomer": [
                0,
                {
                    "dateOfBirth": [
                        1,
                        "String!"
                    ],
                    "firstName": [
                        1,
                        "String!"
                    ],
                    "lastName": [
                        1,
                        "String!"
                    ],
                    "licenseDate": [
                        1
                    ],
                    "licenseImageUrl": [
                        1
                    ],
                    "licenseNumber": [
                        1
                    ],
                    "placeOfBirth": [
                        1,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "Query": {
            "getCustomers": [
                0,
                {
                    "sortBy": [
                        6
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "SortOrder": {},
        "Boolean": {}
    }
}