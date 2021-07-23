class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership,
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);
        member.type = type
        member.define = function() {
            console.log('some info', this.type, this.name);
        }
        return member;
    }
}

const factory = new MemberFactory();
const members = [ factory.create('Velik', 'standard'), factory.create('Allloholic', 'premium'), factory.create('Vladilen', 'simple') ];
members.forEach(obj =>
    obj.define()
);