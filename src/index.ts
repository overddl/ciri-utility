export { randomSlice, spliceOne } from './array';
export { noop, debounce, throttle } from './function';
export { storage } from './storage';

class Animal2 {
  public name: string;
  private _name: string;
  protected $name: string;
  public constructor(theName: string) {
    this.name = theName;
    this._name = theName;
    this.$name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(`${this._name} moved ${distanceInMeters}m.`);
  }
}

const tom = new Animal2('tom');
tom.move(123);