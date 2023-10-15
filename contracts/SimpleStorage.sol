//SPDX-License-Identifier:MIT
pragma solidity 0.8.8;

contract SimpleStorage {
    uint256 public favoriteNum;

    function store(uint256 _favNum) public virtual {
        favoriteNum = _favNum;

        // uint256 scopeTest; //available only to this function

        //retrieve() however if we call retrieve() it will cost gas
    }

    // function store1(uint256 _scopeTest) public{
    //      scopeTest=_scopeTest; //scopeTest not available outside store function
    // }

    //view,pure dont use gas
    function retrieve() public view returns (uint256) {
        return favoriteNum;
    }

    //pure even dont allow to read data
    function add() public pure returns (uint256) {
        return (2 + 100);
    }

    //    People public person=People({roll:7,name:"Ashim"});

    struct People {
        uint256 roll;
        string name;
    }

    //we use dynamic array
    People[] public people;

    function addPerson(uint256 _roll, string memory _name) public {
        people.push(People(_roll, _name));
        //_name='asdsd' //since memory can be modified

        nameToRoll[_name] = _roll;
    }

    //data location like memory or calldata can be specified only in array,string,struct or mappings where you dont know where to store

    //memory stores variable temporarily and can be modified
    //calldata stores variable temporarily and cant be modified
    //storage stores variable permanently can be modified

    //**However whatif we know name but not rollno
    //Mappings
    mapping(string => uint256) public nameToRoll;
}
