interface Customer{
    "Name":string;
    "City":string;
    "Country":string;
}

interface Customers{
    "records":Customer[]
}

export default Customers;