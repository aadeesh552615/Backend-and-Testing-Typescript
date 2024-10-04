class player {
  public readonly id;
  constructor(
    private height: number,
    public weight: number,
    protected speed: number
  ) {
    this.id = Math.floor(Math.random() * 100);
  }
  get getHeight(): number {
    return this.height;
  }
  set setHeight(height: number) {
    this.height = height;
  }
  get getSpeed() {
    return this.speed;
  }
  set setSpeed(speed: number) {
    this.speed = speed;
  }
}

class power extends player {
  private special;
  constructor(height: number, weight: number, speed: number, special: string) {
    super(height, weight, speed);
    this.special = special;
  }
  get getSpecial() {
    return this.special;
  }
  set setSpecial(special: string) {
    this.special = special;
  }
  displaySpeed(): number {
    return this.speed;
  }
}

const player2 = new player(22, 21, 84);
console.log(player2.id);
