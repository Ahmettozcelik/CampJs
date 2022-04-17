class Customer{
    constructor(id,customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "12345");
//Instance prototyping
customer.name = "Levs"
console.log(customer.name)

//Class prototyping
Customer.something="Something"
console.log(Customer.something)

console.log(customer.customerNumber)

class IndividialCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
        super(id, customerNumber)
        this.companyName = companyName
    }
}