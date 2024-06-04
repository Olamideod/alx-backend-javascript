# ES6 Data Manipulation

## Description
This project focuses on manipulating data using various ES6 features such as `map`, `filter`, `reduce`, typed arrays, sets, and maps. The tasks involve creating functions to perform specific data manipulations and operations.

## Learning Objectives
By the end of this project, you should be able to:
- Use `map`, `filter`, and `reduce` on arrays
- Understand typed arrays
- Utilize the Set, Map, and WeakMap data structures

## Requirements
- All files are executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- All functions must be exported

## Setup
To set up the project environment, follow these steps:

1. **Install NodeJS 12.11.x**:
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    nodejs -v
    npm -v
    ```

2. **Install Jest, Babel, and ESLint**:
    Ensure you have the `package.json`, `babel.config.js`, and `.eslintrc.js` files in your project directory. Run:
    ```bash
    npm install
    ```

3. **Run Tests**:
    ```bash
    npm run test
    ```

4. **Run Lint**:
    ```bash
    npm run lint
    ```

## Tasks

### 0. Basic List of Objects
Create a function `getListStudents` that returns an array of student objects.
- **File**: `0-get_list_students.js`

### 1. More Mapping
Create a function `getListStudentIds` that returns an array of ids from a list of objects.
- **File**: `1-get_list_student_ids.js`

### 2. Filter
Create a function `getStudentsByLocation` that returns an array of objects located in a specific city.
- **File**: `2-get_students_by_loc.js`

### 3. Reduce
Create a function `getStudentIdsSum` that returns the sum of all the student ids.
- **File**: `3-get_ids_sum.js`

### 4. Combine
Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.
- **File**: `4-update_grade_by_city.js`

### 5. Typed Arrays
Create a function `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.
- **File**: `5-typed_arrays.js`

### 6. Set Data Structure
Create a function `setFromArray` that returns a Set from an array.
- **File**: `6-set.js`

### 7. More Set Data Structure
Create a function `hasValuesFromArray` that returns a boolean if all elements in the array exist within the set.
- **File**: `7-has_array_values.js`

### 8. Clean Set
Create a function `cleanSet` that returns a string of all the set values that start with a specific string.
- **File**: `8-clean_set.js`

### 9. Map Data Structure
Create a function `groceriesList` that returns a map of groceries with their quantities.
- **File**: `9-groceries_list.js`

### 10. More Map Data Structure
Create a function `updateUniqueItems` that updates the quantity to 100 for items with initial quantity 1 in the map.
- **File**: `10-update_uniq_items.js`

## Author
This project is part of the ALX Software Engineering program.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
