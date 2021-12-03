interface Player {
  name: string;
  age: number;
  hobby?: string;
}

const playerOne: Player = {
  name: "Sakib",
  age: 15,
};

const playerTwo: Player = {
  name: "Mushi",
  age: 25,
  hobby: "Cricket",
};

const persons: Player[] = [{ name: "x", age: 4 }];

const getArray = <T>(arr: T[]) : T[] => {
    return arr
}


getArray<number>([4,5])


let cid:string = "1"

let customerId = cid as string 