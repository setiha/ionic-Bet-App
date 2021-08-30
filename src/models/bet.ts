export class Bet {
  match: any;
  winnerCode: string;
  amount: number;
  time: number;
  done = false;
  win = false;

  constructor(match, winnerCode, amount) {
    this.match = match;
    this.winnerCode = winnerCode;
    this.amount = amount;
    this.time = new Date().getTime();
  }

  toJson() {
    const json = {
      match: this.match,
      winnerCode: this.winnerCode,
      amount: this.amount,
      time: this.time,
      done: this.done

    };
    return JSON.stringify(json);
  }
}
