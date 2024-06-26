# Real Estate Management Application

This application manages real estate properties (apartments, houses, etc.) and provides services including property advertising, tenant interviews, property viewings, and lease negotiations. Once leased, the company assumes responsibility for periodic property inspections. It has a dashboard and a user side.

## Data Structure

### Branch Offices
- Each office has a unique ID, address (street, house number, municipality, city, postal code), phone numbers, and fax numbers.
- Each office is managed by a branch manager, with performance data tracked including their appointment date.

### Employees
- Each office has multiple employees, organized into teams with a team leader responsible for daily operations.
- Employee data includes name, address, contact details, gender, date of birth, personal ID, job title, monthly salary, and employment start date.
- Typists among the employees have their typing speed recorded.

### Estates
- Each property has a unique ID within the company and details such as address (street, house number, city, postal code, municipality), type, number of rooms, square footage, and monthly rent.
- Properties are assigned to specific employees who manage them, with a maximum of 20 properties per employee.
- Leased properties are retained in the system for a minimum of three years post-lease.

### Owners
- Owners (individuals or companies) are identified by a unique ID and have their contact details stored.
- Individual owners' data includes name, address, and phone number.
- Company owners' data includes name, business activity, address, phone number, fax, and contact person details.

### Clients - Users
- Prospective clients' initial contact details are recorded upon first contact, including name, address, phone number, fax, desired property type, square footage, and maximum monthly rent.
- Each client has a unique ID and undergoes an interview as per company policy.

### Advertising
- Properties are advertised on the web app as needed.
- Advertising records include publication date, advertised property details, and estate information.

## Technologies Used
- Frontend: React
- Backend: Node.js with Express
- Database: PostgreSQL

## Project made for the subject Databases II, taught by teacher S.Zorman.
