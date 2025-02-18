import { Card, CardContent, CardHeader } from "@mui/material";

import { ATTRIBUTE_LIST } from "../../../../consts";
import { Attributes } from "../../../../types";
import Attribute from "./attribute";

import { useCharacter } from "../hooks/use-character";

export default function AttributesList() {
  const { character, updateCharacter } = useCharacter();

  const changeAttribute = (key: keyof Attributes, value: number) => {
    console.debug(`${character.id}.changeAttribute`, key, value);
    character.changeAttribute(key, value);

    updateCharacter(character);
  };

  return (
    <Card>
      <CardHeader title="Attributes" />
      <CardContent>
        {ATTRIBUTE_LIST.map((attribute: keyof Attributes) => (
          <Attribute
            key={attribute}
            name={attribute}
            value={character.attributes[attribute]}
            modifier={character.getAttributeModifier(attribute)}
            onIncrease={changeAttribute.bind(null, attribute, 1)}
            onDecrease={changeAttribute.bind(null, attribute, -1)}
          />
        ))}
      </CardContent>
    </Card>
  );
}
