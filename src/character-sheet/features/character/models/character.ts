import { Attributes, Class } from "../../../../types";
import { CLASS_LIST } from "../../../../consts";

class Character {
  id: string;

  attributes: Attributes;

  getClasses(): Array<Class> {
    return Object.keys(CLASS_LIST).reduce((acc, key) => {
      const characterAttributes = this.attributes;
      const currentClassAttributes = CLASS_LIST[key];

      const match = Object.keys(characterAttributes).every(
        (attribute) =>
          characterAttributes[attribute] >= currentClassAttributes[attribute]
      );

      if (match) {
        acc.push(key);
      }

      return acc;
    }, [] satisfies Array<Class>);
  }

  changeAttribute(name: keyof Attributes, change: number) {
    const currentValue = this.attributes[name];
    let newValue = currentValue + change;

    // Ensure the value is not less than 0
    if (newValue < 0) {
      newValue = 0;
    }

    // Ensure the cumulative value of all attributes is not greater than 70
    const currentTotal = Object.values(this.attributes).reduce(
      (acc, val) => acc + val,
      0
    );
    console.debug("currentTotal", currentTotal);

    const newTotal = currentTotal + change;
    console.debug("newTotal", newTotal);

    // enforce the 70 cap
    if (newTotal > 70) {
      const remaining = 70 - currentTotal;

      console.debug("newTotal > 70");
      console.debug("remaining", remaining);

      newValue = currentValue + remaining;
    }

    this.attributes[name] = newValue;
  }

  getAttributeModifier(name: keyof Attributes): number {
    return Math.floor((this.attributes[name] - 10) / 2);
  }

  static create(data?: Partial<Character>): Character {
    return Object.assign(
      new Character(),
      {
        id: new Date().valueOf().toString(),
        attributes: {
          Strength: 10,
          Dexterity: 10,
          Constitution: 10,
          Intelligence: 10,
          Wisdom: 10,
          Charisma: 10,
        },
      } satisfies Partial<Character>,
      data
    );
  }

  toJSON() {
    return {
      id: this.id,
    };
  }
}

export { Character as Model };
