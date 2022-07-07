var customerName = 'bob'
const leastFavoriteCustomer = 'mary'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob'
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'joe'
    return leastFavoriteCustomer;
}