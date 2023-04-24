class Facility {
    constructor(power) {
        this._power = power;
        this._switched = false;
    }

    switchOn() {
        this._switched = true;
        return this;
    }

    switchOff() {
        this._switched = false;
        return this;
    }

    get switched() {
        return this._switched;
    }

    get power() {
        return this._power;
    }

    get name() {
        throw 'Method must be overwritten in a child class';
    }

    printInfo() {
        console.log(`${this.name}: ${this.switched ? 'Включен' : 'Выключен'}`)
        console.log(`Мощность прибора: ${this.power} Вт`);
    }
}

class Refrigerator extends Facility {
    constructor(power, volume, deepFreeze) {
        super(power);
        this._volume = volume;
        this._deepFreeze = deepFreeze;
    }

    get name() {
        return 'Холодильник';
    }

    get volume() {
        return this._volume;
    }

    get deepFreeze() {
        return this._deepFreeze;
    }

    printInfo() {
        super.printInfo();
        console.log(`Объем холодильника: ${this.volume} литров`);
        console.log(`Наличие морозильной камеры: ${this.deepFreeze ? 'Да' : 'Нет'}`);
    }
}

class Iron extends Facility {
    constructor(power, maxTemperature) {
        super(power);
        this._maxTemperature = maxTemperature;
    }

    get name() {
        return 'Утюг';
    }

    get maxTemperature() {
        return this._maxTemperature;
    }

    printInfo() {
        super.printInfo();
        console.log(`Максимальная температура: ${this.maxTemperature} С`);
    }
}

const facilities = [];
facilities.push((new Refrigerator(75, 115, true)).switchOn());
facilities.push((new Refrigerator(65, 95, false)).switchOff());
facilities.push((new Iron(1700, 175)).switchOn());
facilities.push((new Iron(2500, 205)).switchOff());

console.log(facilities);

for (let item of facilities) {
    item.printInfo();
    console.log();
}
