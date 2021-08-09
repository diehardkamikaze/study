class Complaints {
    constructor() {
        this.complaints = []
    }

    reply(complaint) {

    }

    add(complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplaints extends Complaints {
    reply({ id, customer, details}) {
        return 'Product: ' + id + ' : ' + customer + ' : ' + details
    }
}


class ServiceComplaints extends Complaints {
    reply({ id, customer, details}) {
        return 'Service: ' + id + ' : ' + customer + ' : ' + details
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;
        switch (type) {
            case 'service':
                complaint = new ServiceComplaints();
                break;
            case 'product':
                complaint = new ProductsComplaints();
                break;
        }
        return complaint.add({id, customer, details})
    }
}

const registry = new ComplaintRegistry();
console.log(registry.register('Alm', 'service', 'no way'));