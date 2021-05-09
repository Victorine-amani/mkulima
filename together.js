class Mkulima {
    constructor(farms, product, vendors) {
        this.farms = farms;
        this.product = product;
        this.vendors = vendors;
    }
}

class FarmRecord extends Mkulima {
    constructor(id, name, farmer, phoneNumber, address) {
        super(farms, products, vendor);
        this.id = id;
        this.name = name;
        this.farmer = farmer;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}

class Product extends Mkulima {
    constructor(id, name, price) {
        super(farms, products, vendor);
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Vendor extends Mkulima {

}