export class counter {
  private count: number;
  private static instance: counter | null = null;
  private constructor() {
    this.count = 0;
  }
  public static createInstance(): counter {
    if (this.instance !== null) {
      return this.instance;
    }
    this.instance = new counter();
    return this.instance;
  }
  public increaseCount(): void {
    this.count++;
  }

  public getCount(): number {
    return this.count;
  }
}
