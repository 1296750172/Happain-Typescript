/* 
  食物类
*/

export default class Food {
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("food");
  }

  // 获取食物节点的坐标
  getPosition(): object {
    return { x: this.element.offsetLeft, y: this.element.offsetTop };
  }

  // 随机食物位置
  randomFood() {
    console.log(this.element);
    this.element.style.left = "80px";
    this.element.style.top = "100px";
  }

  test() {
    console.log(111);
  }
}
