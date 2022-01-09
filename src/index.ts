import "./assert/style";
import Food from "./pojo/Food";
import Score from "./pojo/Score";
const food = new Food();
const score = new Score(10);
food.randomFood();
food.test();
