# unit-4-game
###Sudo Code###
1. First I have to create basic html structure and apply css to it 

###logic for the game###
1. At start {
    A random number is created which is the score to beat
    4 crystal have 4 values each the game starts and it will be random 
    My accumulated number is 0
}
2. win condition{
    Accumulated number = random number 
    win++
    game restarts();
}
3. else{
    loss++
    game restarts();

}
4. on click to crystal{
    gets value from crystal add to accumulate number
    win condition();
}
5. At restart{
    new random number is generated which is the score to beat 
    My accumulated number is 0 
    win/loss gets accumulated from the first chance 
    New number assigned to 4 crystals 
}

6. have to use random mathod to generate numbers for the crystals and the number to beat

