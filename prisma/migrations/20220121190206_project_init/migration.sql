-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "licenseNumber" TEXT NOT NULL,
    "licenseDate" DATETIME NOT NULL,
    "licenseImageUrl" TEXT NOT NULL
);
