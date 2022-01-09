/*  
 分数面板类
 */
export default class Score {
  score: number = 0;
  level: number = 1;
  // 最大等级
  maxLevel: number;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  constructor(maxLevel: number) {
    this.maxLevel = maxLevel;
    this.scoreEle = document.getElementById("score");
    this.levelEle = document.getElementById("level");
  }

  addScore() {
    this.score += 1;
    this.scoreEle.innerText = this.score.toString();
    if (this.score % 10 == 0) {
      this.addLevel();
    }
  }

  addLevel() {
    if (this.level < this.maxLevel) {
      this.level += 1;
      this.levelEle.innerText = this.level.toString();
    }
  }
}
