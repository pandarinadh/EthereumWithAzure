pragma solidity ^0.4.23;

 contract IScoreStore {

     function GetScore(string name) returns (int);
 }

contract MyGame {

    function showScore(string name) returns (int)
    {
       // IScoreStore scoreStore = IScoreStore(0x53d4197df6c00d65ea59e8706b25a55332b36451); cloud address
       IScoreStore scoreStore = IScoreStore(0x013e50c6e570abdbe6929d9bbb5d81b4a22d7139); //local one

       
        return scoreStore.GetScore(name);
    }
}