-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "licenseNumber" TEXT,
    "licenseDate" DATETIME,
    "licenseImageUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Customer" ("createdAt", "dateOfBirth", "firstName", "id", "lastName", "licenseDate", "licenseImageUrl", "licenseNumber", "placeOfBirth", "updatedAt") SELECT "createdAt", "dateOfBirth", "firstName", "id", "lastName", "licenseDate", "licenseImageUrl", "licenseNumber", "placeOfBirth", "updatedAt" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
