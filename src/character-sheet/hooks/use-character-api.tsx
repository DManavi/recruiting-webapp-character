import * as Character from "../features/character/models/character";

const API_BASE_URL =
  "https://recruiting.verylongdomaintotestwith.ca/api/{DManavi}/character";

export const useCharactersApi = () => {
  const loadCharacters = async () => {
    const response = await fetch(API_BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const successful = response.status === 200;

    if (successful !== true) {
      throw new Error("Failed to load characters");
    }

    // the response schema is like: { data: Array<Character.Model> }
    // so we can add more properties to the response if needed (like pagination)
    const responsePayload: { body: { data: Array<Character.Model> } } =
      await response.json();

    // let's create a model (instance of the class) from the response
    return responsePayload.body.data.map((item: any) =>
      Character.Model.create(item)
    );
  };

  const saveCharacters = async ({
    characters,
  }: {
    characters: Array<Character.Model>;
  }) => {
    // let's convert the model to a format that the API expects
    const requestPayload = {
      data: characters.map((item) => item.toJSON()),
    };

    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestPayload),
    });

    const successful = response.status === 200;

    if (successful !== true) {
      throw new Error("Failed to save characters");
    }
  };

  return { loadCharacters, saveCharacters };
};
