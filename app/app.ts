function startGame() {
  let name: string | undefined;
  name = "Suresh";
  var messegeElement = document.getElementById("messages");
  messegeElement!.innerText = "Welcome to MultiMath! Starting a new game.....";
  setPlayerName(name);
  postScores(50, "Sample");
  postScores(-20, "Sample");
}

function getInput(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );

  if (inputElement.value === undefined) {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScores(score: number, playerName: string = "MultiMath"): void {
  let logger: (value: string) => void;
  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessege;
  }
  const postScores: HTMLElement | null =
    document.getElementById("postedScores");
  postScores!.innerText = `${score} - ${playerName}`;

  logger(`${score}`);
}

function setPlayerName(name: string) {
  console.log(`Hello My name is ${name}`);
}

const logMessege = (messege: string): void => {
  console.log(messege);
};

const logError = (err: string): void => {
  console.log(err);
};

document.getElementById("startGame")!.addEventListener("click", startGame);

let result: Result = {
  playerName: "MultiMath",
  score: 5,
  problemCount: 10,
  factor: 7,
};

let player: Player = {
  name: "Dan",
  formatName: () => "Dan",
};
