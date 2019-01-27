import { Wall, Doorway, Dirt } from "./obstacles";
import { Obstacle } from "./common";
import { isContinueStatement, convertToObject } from "typescript";
import { ChargingStation } from "./charging_station";

const NumDirt = 1000;

export function makeDirt(){
  let dirt = [];
  for (let i = 0; i < NumDirt; i++){
    const randomX: number = 50 + (Math.random() * (1024 - 100));
    const randomY: number = 50 + (Math.random() * (768 - 100));
    dirt.push(new Dirt({x: randomX, y: randomY}, 1));
  }

  return dirt;
}
  
export const level_1  = [
    new Doorway({x: 33, y: 450}, {height: 100, width: 10}, "doorTo2"),
    new ChargingStation({x: 51, y:300}, {height: 20, width: 10}),
    new Wall({x: 25, y: 50}, {height: 400, width: 25 }),
    new Wall({ x: 25, y: 550 }, { height: 180, width: 25 }),
    new Wall({ x: 25, y: 725 }, { height: 25, width: 950 }),
    new Wall({ x: 975, y: 50 }, { height: 700, width: 25 }),
    new Wall({ x: 25, y: 25 }, { height: 25, width: 975 }),
    ...makeDirt()
];


export const level_2 = [
    new Doorway({x: 983, y: 450}, {height: 100, width: 10}, "doorTo1"),
    new ChargingStation({x: 51, y:600}, {height: 20, width: 10}),
    new Wall({x: 975, y: 50}, {height: 400, width: 25 }),
    new Wall({ x: 975, y: 550 }, { height: 180, width: 25 }),
    new Wall({ x: 25, y: 725 }, { height: 25, width: 975 }),
    new Wall({ x: 25, y: 50 }, { height: 700, width: 25 }),
    new Wall({ x: 25, y: 25 }, { height: 25, width: 975 }),
    ...makeDirt()
]